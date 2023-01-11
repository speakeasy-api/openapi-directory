package openapisdk;

import openapisdk.utils.HTTPClient;
import openapisdk.utils.HTTPRequest;
import java.net.http.HttpResponse;
import openapisdk.utils.SerializedBody;

public class Preprints {
	private HTTPClient _defaultClient;
	private HTTPClient _securityClient;
	private String _serverUrl;
	private String _language;
	private String _sdkVersion;
	private String _genVersion;

	public Preprints(HTTPClient defaultClient, HTTPClient securityClient, String serverUrl, String language, String sdkVersion, String genVersion) {
		this._defaultClient = defaultClient;
		this._securityClient = securityClient;
		this._serverUrl = serverUrl;
		this._language = language;
		this._sdkVersion = sdkVersion;
		this._genVersion = genVersion;
	}
	
	
    /**
     * preprintsCitationList - Retrieve citation details
     *
     * The citation details for a preprint, in CSL format.
     * #### Returns
     * Returns a JSON object with a `data` key that contains the representation of the details necessary for the preprint citation.
    **/
    public openapisdk.models.operations.PreprintsCitationListResponse preprintsCitationList(openapisdk.models.operations.PreprintsCitationListRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/preprints/{preprint_id}/citation/", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.PreprintsCitationListResponse res = new openapisdk.models.operations.PreprintsCitationListResponse() {{
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

        return res;
    }
	
	
    /**
     * preprintsCitationRead - Retrieve a styled citation
     *
     * The citation for a preprint in a specific style.
     * #### Returns
     * Returns a JSON object with a `data` key that contains the representation of the preprint citation, in the requested style.
    **/
    public openapisdk.models.operations.PreprintsCitationReadResponse preprintsCitationRead(openapisdk.models.operations.PreprintsCitationReadRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/preprints/{preprint_id}/citation/{style_id}/", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.PreprintsCitationReadResponse res = new openapisdk.models.operations.PreprintsCitationReadResponse() {{
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

        return res;
    }
	
	
    /**
     * preprintsCreate - Create a preprint
     *
     * Creates a new preprint.
     * #### Returns
     * Returns a JSON object with a `data` key containing the representation of the created preprint, if the request is successful.
     * 
     * If the request is unsuccessful, an `errors` key containing information about the failure will be returned. Refer to the [list of error codes]() to understand why this request may have failed.
    **/
    public openapisdk.models.operations.PreprintsCreateResponse preprintsCreate(openapisdk.models.operations.PreprintsCreateRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/preprints/");
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        if (serializedRequestBody == null) {
            throw new Exception("Request body is required");
        }
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.PreprintsCreateResponse res = new openapisdk.models.operations.PreprintsCreateResponse() {{
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 201) {
        }

        return res;
    }
	
	
    /**
     * preprintsList - List all preprints
     *
     * 
     * A paginated list of preprints from all preprint providers. The returned preprints are sorted by their creation date, with the most recent preprints appearing first.
     * #### Returns
     * Returns a JSON object containing `data` and `links` keys.
     * 
     * The `data` key contains an array of 10 preprints. Each resource in the array is a separate preprint object.
     * 
     * The `links` key contains a dictionary of links that can be used for [pagination](#tag/Pagination).
     * 
     * This request should never return an error.
     * #### Filtering
     * You can optionally request that the response only include preprints that match your filters by utilizing the `filter` query parameter, e.g. https://api.osf.io/v2/preprints/?filter[provider]=socarxiv.
     * 
     * Preprints may be filtered by their `id`, `is_published`, `date_created`, `date_modified`, and `provider`.
    **/
    public openapisdk.models.operations.PreprintsListResponse preprintsList() throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/preprints/");
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.PreprintsListResponse res = new openapisdk.models.operations.PreprintsListResponse() {{
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

        return res;
    }
	
	
    /**
     * preprintsPartialUpdate - Update a preprint
     *
     * Updates the specified preprint by setting the values of the parameters passed. Any parameters not provided will be left unchanged.
     * #### Returns
     * Returns a JSON object with a `data` key containing the new representation of the updated preprint, if the request is successful.
     * 
     * If the request is unsuccessful, an `errors` key containing information about the failure will be returned. Refer to the [list of error codes]() to understand why this request may have failed.
    **/
    public openapisdk.models.operations.PreprintsPartialUpdateResponse preprintsPartialUpdate(openapisdk.models.operations.PreprintsPartialUpdateRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/preprints/{preprint_id}/", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("PATCH");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        if (serializedRequestBody == null) {
            throw new Exception("Request body is required");
        }
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.PreprintsPartialUpdateResponse res = new openapisdk.models.operations.PreprintsPartialUpdateResponse() {{
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
        }

        return res;
    }
	
	
    /**
     * preprintsRead - Retrieve a preprint
     *
     * Retrieves the details of a preprint.
     * #### Returns
     * Returns a JSON object with a `data` key containing the representation of the requested preprint, if the request is successful.
     * 
     * If the request is unsuccessful, an `errors` key containing information about the failure will be returned. Refer to the [list of error codes](#tag/Errors-and-Error-Codes) to understand why this request may have failed.
    **/
    public openapisdk.models.operations.PreprintsReadResponse preprintsRead(openapisdk.models.operations.PreprintsReadRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/preprints/{preprint_id}/", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.PreprintsReadResponse res = new openapisdk.models.operations.PreprintsReadResponse() {{
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

        return res;
    }
	
}