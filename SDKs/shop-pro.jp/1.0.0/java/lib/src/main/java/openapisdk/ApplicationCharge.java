package openapisdk;

import openapisdk.utils.HTTPClient;
import openapisdk.utils.HTTPRequest;
import java.net.http.HttpResponse;
import com.fasterxml.jackson.databind.ObjectMapper;
import java.nio.charset.StandardCharsets;
import openapisdk.utils.SerializedBody;

public class ApplicationCharge {
	private HTTPClient _defaultClient;
	private HTTPClient _securityClient;
	private String _serverUrl;
	private String _language;
	private String _sdkVersion;
	private String _genVersion;

	public ApplicationCharge(HTTPClient defaultClient, HTTPClient securityClient, String serverUrl, String language, String sdkVersion, String genVersion) {
		this._defaultClient = defaultClient;
		this._securityClient = securityClient;
		this._serverUrl = serverUrl;
		this._language = language;
		this._sdkVersion = sdkVersion;
		this._genVersion = genVersion;
	}
	
	
    /**
     * createUsageCharge - 従量課金データの作成
     *
     * アプリ内で基本機能が利用された頻度に伴って毎月の請求が変動するようなアプリの場合は「従量課金」を使って利用者に変動分の請求を行うことができます。
     * ※無料お試し期間中のショップに対しては従量課金データを作成できません。
     * 
    **/
    public openapisdk.models.operations.CreateUsageChargeResponse createUsageCharge(openapisdk.models.operations.CreateUsageChargeRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/appstore/v1/recurring_application_charges/{recurringApplicationChargeId}/usage_charges.json", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        if (serializedRequestBody == null) {
            throw new Exception("Request body is required");
        }
        req.setBody(serializedRequestBody);
        
        java.util.Map<String, java.util.List<String>> headers = openapisdk.utils.Utils.getHeaders(request.headers);
        if (headers != null) {
            for (java.util.Map.Entry<String, java.util.List<String>> header : headers.entrySet()) {
                for (String value : header.getValue()) {
                    req.addHeader(header.getKey(), value);
                }
            }
        }
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.CreateUsageChargeResponse res = new openapisdk.models.operations.CreateUsageChargeResponse() {{
            createUsageCharge201ApplicationJSONObject = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 201) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.CreateUsageCharge201ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.CreateUsageCharge201ApplicationJson.class);
                res.createUsageCharge201ApplicationJSONObject = out;
            }
        }

        return res;
    }
	
	
    /**
     * postApplicationCharge - アプリ内課金データの作成
     *
     * 「アプリ内課金」はすでにインストール済みのアプリ上において、利用者が追加の買い切りによる課金によって新たなアプリ内の機能を提供される場合などに、利用者へ買い切りの課金分の請求を行うための課金形式です。
     * 
     * この課金はプラン課金の情報に紐付かないため、リクエストされたタイミングで課金データが作成されます。また、同一のアプリ内課金IDで同じ利用者へ複数回請求を行うことも可能です。
     * 
     * ただし、アプリの基本機能として提供しているサービスを利用した量やその頻度などに伴って毎月異なった額の請求を行うような課金については、プラン課金の「従量による課金」の機能を使って請求を行う必要があります。
     * 
    **/
    public openapisdk.models.operations.PostApplicationChargeResponse postApplicationCharge(openapisdk.models.operations.PostApplicationChargeRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/appstore/v1/application_charges.json");
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        if (serializedRequestBody == null) {
            throw new Exception("Request body is required");
        }
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.PostApplicationChargeResponse res = new openapisdk.models.operations.PostApplicationChargeResponse() {{
            postApplicationCharge201ApplicationJSONObject = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 201) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.PostApplicationCharge201ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.PostApplicationCharge201ApplicationJson.class);
                res.postApplicationCharge201ApplicationJSONObject = out;
            }
        }

        return res;
    }
	
}