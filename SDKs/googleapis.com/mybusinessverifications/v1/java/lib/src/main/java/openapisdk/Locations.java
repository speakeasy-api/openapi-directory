package openapisdk;

import openapisdk.utils.HTTPClient;
import openapisdk.utils.HTTPRequest;
import java.net.http.HttpResponse;
import com.fasterxml.jackson.databind.ObjectMapper;
import java.nio.charset.StandardCharsets;
import openapisdk.utils.SerializedBody;
import org.apache.http.NameValuePair;

public class Locations {
	private HTTPClient _defaultClient;
	private HTTPClient _securityClient;
	private String _serverUrl;
	private String _language;
	private String _sdkVersion;
	private String _genVersion;

	public Locations(HTTPClient defaultClient, HTTPClient securityClient, String serverUrl, String language, String sdkVersion, String genVersion) {
		this._defaultClient = defaultClient;
		this._securityClient = securityClient;
		this._serverUrl = serverUrl;
		this._language = language;
		this._sdkVersion = sdkVersion;
		this._genVersion = genVersion;
	}
	
	
    /**
     * mybusinessverificationsLocationsFetchVerificationOptions - Reports all eligible verification options for a location in a specific language.
    **/
    public openapisdk.models.operations.MybusinessverificationsLocationsFetchVerificationOptionsResponse mybusinessverificationsLocationsFetchVerificationOptions(openapisdk.models.operations.MybusinessverificationsLocationsFetchVerificationOptionsRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/{location}:fetchVerificationOptions", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        java.util.List<NameValuePair> queryParams = openapisdk.utils.Utils.getQueryParams(request.queryParams);
        if (queryParams != null) {
            for (NameValuePair queryParam : queryParams) {
                req.addQueryParam(queryParam);
            }
        }
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.MybusinessverificationsLocationsFetchVerificationOptionsResponse res = new openapisdk.models.operations.MybusinessverificationsLocationsFetchVerificationOptionsResponse() {{
            fetchVerificationOptionsResponse = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.FetchVerificationOptionsResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.FetchVerificationOptionsResponse.class);
                res.fetchVerificationOptionsResponse = out;
            }
        }

        return res;
    }
	
	
    /**
     * mybusinessverificationsLocationsGetVoiceOfMerchantState - Gets the VoiceOfMerchant state.
    **/
    public openapisdk.models.operations.MybusinessverificationsLocationsGetVoiceOfMerchantStateResponse mybusinessverificationsLocationsGetVoiceOfMerchantState(openapisdk.models.operations.MybusinessverificationsLocationsGetVoiceOfMerchantStateRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/{name}/VoiceOfMerchantState", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        java.util.List<NameValuePair> queryParams = openapisdk.utils.Utils.getQueryParams(request.queryParams);
        if (queryParams != null) {
            for (NameValuePair queryParam : queryParams) {
                req.addQueryParam(queryParam);
            }
        }
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.MybusinessverificationsLocationsGetVoiceOfMerchantStateResponse res = new openapisdk.models.operations.MybusinessverificationsLocationsGetVoiceOfMerchantStateResponse() {{
            voiceOfMerchantState = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.VoiceOfMerchantState out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.VoiceOfMerchantState.class);
                res.voiceOfMerchantState = out;
            }
        }

        return res;
    }
	
	
    /**
     * mybusinessverificationsLocationsVerificationsComplete - Completes a `PENDING` verification. It is only necessary for non `AUTO` verification methods. `AUTO` verification request is instantly `VERIFIED` upon creation.
    **/
    public openapisdk.models.operations.MybusinessverificationsLocationsVerificationsCompleteResponse mybusinessverificationsLocationsVerificationsComplete(openapisdk.models.operations.MybusinessverificationsLocationsVerificationsCompleteRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/{name}:complete", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        java.util.List<NameValuePair> queryParams = openapisdk.utils.Utils.getQueryParams(request.queryParams);
        if (queryParams != null) {
            for (NameValuePair queryParam : queryParams) {
                req.addQueryParam(queryParam);
            }
        }
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.MybusinessverificationsLocationsVerificationsCompleteResponse res = new openapisdk.models.operations.MybusinessverificationsLocationsVerificationsCompleteResponse() {{
            completeVerificationResponse = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.CompleteVerificationResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.CompleteVerificationResponse.class);
                res.completeVerificationResponse = out;
            }
        }

        return res;
    }
	
	
    /**
     * mybusinessverificationsLocationsVerificationsList - List verifications of a location, ordered by create time.
    **/
    public openapisdk.models.operations.MybusinessverificationsLocationsVerificationsListResponse mybusinessverificationsLocationsVerificationsList(openapisdk.models.operations.MybusinessverificationsLocationsVerificationsListRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/{parent}/verifications", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        java.util.List<NameValuePair> queryParams = openapisdk.utils.Utils.getQueryParams(request.queryParams);
        if (queryParams != null) {
            for (NameValuePair queryParam : queryParams) {
                req.addQueryParam(queryParam);
            }
        }
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.MybusinessverificationsLocationsVerificationsListResponse res = new openapisdk.models.operations.MybusinessverificationsLocationsVerificationsListResponse() {{
            listVerificationsResponse = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.ListVerificationsResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.ListVerificationsResponse.class);
                res.listVerificationsResponse = out;
            }
        }

        return res;
    }
	
	
    /**
     * mybusinessverificationsLocationsVerify - Starts the verification process for a location.
    **/
    public openapisdk.models.operations.MybusinessverificationsLocationsVerifyResponse mybusinessverificationsLocationsVerify(openapisdk.models.operations.MybusinessverificationsLocationsVerifyRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/{name}:verify", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        java.util.List<NameValuePair> queryParams = openapisdk.utils.Utils.getQueryParams(request.queryParams);
        if (queryParams != null) {
            for (NameValuePair queryParam : queryParams) {
                req.addQueryParam(queryParam);
            }
        }
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.MybusinessverificationsLocationsVerifyResponse res = new openapisdk.models.operations.MybusinessverificationsLocationsVerifyResponse() {{
            verifyLocationResponse = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.VerifyLocationResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.VerifyLocationResponse.class);
                res.verifyLocationResponse = out;
            }
        }

        return res;
    }
	
}