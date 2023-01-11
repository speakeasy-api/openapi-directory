package openapisdk;

import openapisdk.utils.HTTPClient;
import openapisdk.utils.HTTPRequest;
import java.net.http.HttpResponse;
import org.apache.http.NameValuePair;

public class CustomGatewayProcessPaymentsAndRefunds {
	private HTTPClient _defaultClient;
	private HTTPClient _securityClient;
	private String _serverUrl;
	private String _language;
	private String _sdkVersion;
	private String _genVersion;

	public CustomGatewayProcessPaymentsAndRefunds(HTTPClient defaultClient, HTTPClient securityClient, String serverUrl, String language, String sdkVersion, String genVersion) {
		this._defaultClient = defaultClient;
		this._securityClient = securityClient;
		this._serverUrl = serverUrl;
		this._language = language;
		this._sdkVersion = sdkVersion;
		this._genVersion = genVersion;
	}
	
	
    /**
     * postCustomGatewayPaymentOwnershipId - Adds a payment for an app on behalf of a user
     *
     * - Results are returned for the market provided within the basic authentication credentials 
     * - Payments must be enabled and 'Custom' must be selected as the gateway in order to use this API endpoint
     * 
    **/
    public openapisdk.models.operations.PostCustomGatewayPaymentOwnershipIdResponse postCustomGatewayPaymentOwnershipId(openapisdk.models.operations.PostCustomGatewayPaymentOwnershipIdRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/custom-gateway/payment/{ownershipId}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
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

        openapisdk.models.operations.PostCustomGatewayPaymentOwnershipIdResponse res = new openapisdk.models.operations.PostCustomGatewayPaymentOwnershipIdResponse() {{
            body = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 400) {
        }
        else if (httpRes.statusCode() == 412) {
        }
        else {
            if (openapisdk.utils.Utils.matchContentType(contentType, "*/*")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }

        return res;
    }
	
	
    /**
     * postCustomGatewayRefundOwnershipId - Fully or partially refund payment for an app on behalf of a user
     *
     * - Results are returned for the market provided within the basic authentication credentials
     * - Payments must be enabled and 'Custom' must be selected as the gateway in order to use this API endpoint
     * 
    **/
    public openapisdk.models.operations.PostCustomGatewayRefundOwnershipIdResponse postCustomGatewayRefundOwnershipId(openapisdk.models.operations.PostCustomGatewayRefundOwnershipIdRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/custom-gateway/refund/{ownershipId}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
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

        openapisdk.models.operations.PostCustomGatewayRefundOwnershipIdResponse res = new openapisdk.models.operations.PostCustomGatewayRefundOwnershipIdResponse() {{
            body = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 400) {
        }
        else if (httpRes.statusCode() == 412) {
        }
        else {
            if (openapisdk.utils.Utils.matchContentType(contentType, "*/*")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }

        return res;
    }
	
}