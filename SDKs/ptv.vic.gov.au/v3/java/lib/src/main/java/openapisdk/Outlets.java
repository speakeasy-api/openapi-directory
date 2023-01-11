package openapisdk;

import openapisdk.utils.HTTPClient;
import openapisdk.utils.HTTPRequest;
import java.net.http.HttpResponse;
import com.fasterxml.jackson.databind.ObjectMapper;
import java.nio.charset.StandardCharsets;
import org.apache.http.NameValuePair;

public class Outlets {
	private HTTPClient _defaultClient;
	private HTTPClient _securityClient;
	private String _serverUrl;
	private String _language;
	private String _sdkVersion;
	private String _genVersion;

	public Outlets(HTTPClient defaultClient, HTTPClient securityClient, String serverUrl, String language, String sdkVersion, String genVersion) {
		this._defaultClient = defaultClient;
		this._securityClient = securityClient;
		this._serverUrl = serverUrl;
		this._language = language;
		this._sdkVersion = sdkVersion;
		this._genVersion = genVersion;
	}
	
	
    /**
     * outletsGetAllOutlets - List all ticket outlets
    **/
    public openapisdk.models.operations.OutletsGetAllOutletsResponse outletsGetAllOutlets(openapisdk.models.operations.OutletsGetAllOutletsRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v3/outlets");
        
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

        openapisdk.models.operations.OutletsGetAllOutletsResponse res = new openapisdk.models.operations.OutletsGetAllOutletsResponse() {{
            v3OutletResponse = null;
            v3OutletResponse = null;
            body = null;
            body = null;
            v3ErrorResponse = null;
            v3ErrorResponse = null;
            body = null;
            v3ErrorResponse = null;
            v3ErrorResponse = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.V3OutletResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.V3OutletResponse.class);
                res.v3OutletResponse = out;
            }
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.V3OutletResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.V3OutletResponse.class);
                res.v3OutletResponse = out;
            }
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/html")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }
        else if (httpRes.statusCode() == 400) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/html")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.V3ErrorResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.V3ErrorResponse.class);
                res.v3ErrorResponse = out;
            }
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.V3ErrorResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.V3ErrorResponse.class);
                res.v3ErrorResponse = out;
            }
        }
        else if (httpRes.statusCode() == 403) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/html")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.V3ErrorResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.V3ErrorResponse.class);
                res.v3ErrorResponse = out;
            }
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.V3ErrorResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.V3ErrorResponse.class);
                res.v3ErrorResponse = out;
            }
        }

        return res;
    }
	
	
    /**
     * outletsGetOutletsByGeolocation - List ticket outlets near a specific location
    **/
    public openapisdk.models.operations.OutletsGetOutletsByGeolocationResponse outletsGetOutletsByGeolocation(openapisdk.models.operations.OutletsGetOutletsByGeolocationRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v3/outlets/location/{latitude},{longitude}", request.pathParams);
        
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

        openapisdk.models.operations.OutletsGetOutletsByGeolocationResponse res = new openapisdk.models.operations.OutletsGetOutletsByGeolocationResponse() {{
            v3OutletGeolocationResponse = null;
            v3OutletGeolocationResponse = null;
            body = null;
            body = null;
            v3ErrorResponse = null;
            v3ErrorResponse = null;
            body = null;
            v3ErrorResponse = null;
            v3ErrorResponse = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.V3OutletGeolocationResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.V3OutletGeolocationResponse.class);
                res.v3OutletGeolocationResponse = out;
            }
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.V3OutletGeolocationResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.V3OutletGeolocationResponse.class);
                res.v3OutletGeolocationResponse = out;
            }
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/html")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }
        else if (httpRes.statusCode() == 400) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/html")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.V3ErrorResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.V3ErrorResponse.class);
                res.v3ErrorResponse = out;
            }
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.V3ErrorResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.V3ErrorResponse.class);
                res.v3ErrorResponse = out;
            }
        }
        else if (httpRes.statusCode() == 403) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/html")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.V3ErrorResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.V3ErrorResponse.class);
                res.v3ErrorResponse = out;
            }
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.V3ErrorResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.V3ErrorResponse.class);
                res.v3ErrorResponse = out;
            }
        }

        return res;
    }
	
}