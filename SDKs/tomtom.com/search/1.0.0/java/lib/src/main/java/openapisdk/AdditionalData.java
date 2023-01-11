package openapisdk;

import openapisdk.utils.HTTPClient;
import openapisdk.utils.HTTPRequest;
import java.net.http.HttpResponse;
import org.apache.http.NameValuePair;

public class AdditionalData {
	private HTTPClient _defaultClient;
	private HTTPClient _securityClient;
	private String _serverUrl;
	private String _language;
	private String _sdkVersion;
	private String _genVersion;

	public AdditionalData(HTTPClient defaultClient, HTTPClient securityClient, String serverUrl, String language, String sdkVersion, String genVersion) {
		this._defaultClient = defaultClient;
		this._securityClient = securityClient;
		this._serverUrl = serverUrl;
		this._language = language;
		this._sdkVersion = sdkVersion;
		this._genVersion = genVersion;
	}
	
	
    /**
     * getSearchVersionNumberAdditionalDataExt - Additional Data
    **/
    public openapisdk.models.operations.GetSearchVersionNumberAdditionalDataExtResponse getSearchVersionNumberAdditionalDataExt(openapisdk.models.operations.GetSearchVersionNumberAdditionalDataExtRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/search/{versionNumber}/additionalData.{ext}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        java.util.List<NameValuePair> queryParams = openapisdk.utils.Utils.getQueryParams(request.queryParams);
        if (queryParams != null) {
            for (NameValuePair queryParam : queryParams) {
                req.addQueryParam(queryParam);
            }
        }
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetSearchVersionNumberAdditionalDataExtResponse res = new openapisdk.models.operations.GetSearchVersionNumberAdditionalDataExtResponse() {{
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
        }
        else if (httpRes.statusCode() == 400) {
        }
        else if (httpRes.statusCode() == 403) {
        }
        else if (httpRes.statusCode() == 404) {
        }
        else if (httpRes.statusCode() == 405) {
        }
        else if (httpRes.statusCode() == 408) {
        }
        else if (httpRes.statusCode() == 414) {
        }
        else if (httpRes.statusCode() == 500) {
        }
        else if (httpRes.statusCode() == 502) {
        }
        else if (httpRes.statusCode() == 503) {
        }
        else if (httpRes.statusCode() == 504) {
        }
        else if (httpRes.statusCode() == 596) {
        }

        return res;
    }
	
}