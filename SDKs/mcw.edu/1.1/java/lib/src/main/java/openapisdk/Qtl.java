package openapisdk;

import openapisdk.utils.HTTPClient;
import openapisdk.utils.HTTPRequest;
import java.net.http.HttpResponse;

public class Qtl {
	private HTTPClient _defaultClient;
	private HTTPClient _securityClient;
	private String _serverUrl;
	private String _language;
	private String _sdkVersion;
	private String _genVersion;

	public Qtl(HTTPClient defaultClient, HTTPClient securityClient, String serverUrl, String language, String sdkVersion, String genVersion) {
		this._defaultClient = defaultClient;
		this._securityClient = securityClient;
		this._serverUrl = serverUrl;
		this._language = language;
		this._sdkVersion = sdkVersion;
		this._genVersion = genVersion;
	}
	
	
    /**
     * getMappedQtlByPositionUsingGet - Returns a list QTL for given position and assembly map
    **/
    public openapisdk.models.operations.GetMappedQtlByPositionUsingGetResponse getMappedQtlByPositionUsingGet(openapisdk.models.operations.GetMappedQtlByPositionUsingGetRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/qtls/mapped/{chr}/{start}/{stop}/{mapKey}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetMappedQtlByPositionUsingGetResponse res = new openapisdk.models.operations.GetMappedQtlByPositionUsingGetResponse() {{
            body = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "*/*")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }
        else if (httpRes.statusCode() == 401) {
        }
        else if (httpRes.statusCode() == 403) {
        }
        else if (httpRes.statusCode() == 404) {
        }

        return res;
    }
	
	
    /**
     * getQtlByRgdIdUsingGet - Return a QTL for provided RGD ID
    **/
    public openapisdk.models.operations.GetQtlByRgdIdUsingGetResponse getQtlByRgdIdUsingGet(openapisdk.models.operations.GetQtlByRgdIdUsingGetRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/qtls/{rgdId}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetQtlByRgdIdUsingGetResponse res = new openapisdk.models.operations.GetQtlByRgdIdUsingGetResponse() {{
            body = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "*/*")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }
        else if (httpRes.statusCode() == 401) {
        }
        else if (httpRes.statusCode() == 403) {
        }
        else if (httpRes.statusCode() == 404) {
        }

        return res;
    }
	
	
    /**
     * getQtlListByPositionUsingGet - Returns a list QTL for given position and assembly map
    **/
    public openapisdk.models.operations.GetQtlListByPositionUsingGetResponse getQtlListByPositionUsingGet(openapisdk.models.operations.GetQtlListByPositionUsingGetRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/qtls/{chr}/{start}/{stop}/{mapKey}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetQtlListByPositionUsingGetResponse res = new openapisdk.models.operations.GetQtlListByPositionUsingGetResponse() {{
            body = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "*/*")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }
        else if (httpRes.statusCode() == 401) {
        }
        else if (httpRes.statusCode() == 403) {
        }
        else if (httpRes.statusCode() == 404) {
        }

        return res;
    }
	
}