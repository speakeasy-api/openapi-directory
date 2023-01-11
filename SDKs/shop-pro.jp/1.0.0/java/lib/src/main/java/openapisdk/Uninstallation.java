package openapisdk;

import openapisdk.utils.HTTPClient;
import openapisdk.utils.HTTPRequest;
import java.net.http.HttpResponse;
import com.fasterxml.jackson.databind.ObjectMapper;
import java.nio.charset.StandardCharsets;

public class Uninstallation {
	private HTTPClient _defaultClient;
	private HTTPClient _securityClient;
	private String _serverUrl;
	private String _language;
	private String _sdkVersion;
	private String _genVersion;

	public Uninstallation(HTTPClient defaultClient, HTTPClient securityClient, String serverUrl, String language, String sdkVersion, String genVersion) {
		this._defaultClient = defaultClient;
		this._securityClient = securityClient;
		this._serverUrl = serverUrl;
		this._language = language;
		this._sdkVersion = sdkVersion;
		this._genVersion = genVersion;
	}
	
	
    /**
     * deleteInstallation - アプリストアアプリのアンインストール
     *
     * このAPIは OAuth のアクセストークンに紐付くアプリケーションをショップから削除します。
     * このAPIを利用した場合、ショップオーナーがアンインストールした場合と異なり、アンインストールフックは実行されません。
     * 代わりにアンインストールフックで通知される情報は、このAPIのレスポンスに含まれています。
     * 
     * アンインストール時の注意点については、[アプリのアンインストール](https://app.shop-pro.jp/open_api#section/API/アプリのインストール)を参照して下さい。
     * 
    **/
    public openapisdk.models.operations.DeleteInstallationResponse deleteInstallation(openapisdk.models.operations.DeleteInstallationRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/appstore/v1/installation.json");
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("DELETE");
        req.setURL(url);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.DeleteInstallationResponse res = new openapisdk.models.operations.DeleteInstallationResponse() {{
            deleteInstallation200ApplicationJSONObject = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.DeleteInstallation200ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.DeleteInstallation200ApplicationJson.class);
                res.deleteInstallation200ApplicationJSONObject = out;
            }
        }

        return res;
    }
	
}