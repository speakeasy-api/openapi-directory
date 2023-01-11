package openapisdk;

import openapisdk.utils.HTTPClient;
import openapisdk.utils.HTTPRequest;
import java.net.http.HttpResponse;
import openapisdk.utils.SerializedBody;
import org.apache.http.NameValuePair;

public class Filter {
	private HTTPClient _defaultClient;
	private HTTPClient _securityClient;
	private String _serverUrl;
	private String _language;
	private String _sdkVersion;
	private String _genVersion;

	public Filter(HTTPClient defaultClient, HTTPClient securityClient, String serverUrl, String language, String sdkVersion, String genVersion) {
		this._defaultClient = defaultClient;
		this._securityClient = securityClient;
		this._serverUrl = serverUrl;
		this._language = language;
		this._sdkVersion = sdkVersion;
		this._genVersion = genVersion;
	}
	
	
    /**
     * getAssociationFilter - Filter available associations
     *
     * More complex queries for associations scores and objects can be done using
     * this method, which allows to sort in different order, restrict to a specific class
     * of diseases or targets, as well as filtering results by score and associated pathways.
     * 
    **/
    public openapisdk.models.operations.GetAssociationFilterResponse getAssociationFilter(openapisdk.models.operations.GetAssociationFilterRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/platform/public/association/filter");
        
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

        openapisdk.models.operations.GetAssociationFilterResponse res = new openapisdk.models.operations.GetAssociationFilterResponse() {{
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
        }

        return res;
    }
	
	
    /**
     * getEvidenceFilter - Filter available evidence
     *
     * The filter method allows to retrieve the specific data that supports a connection between targets and diseases.
     * Filters can be used to restrict the results by source and type of data,
     * or limit results to targets which are part of a particular pathway.
     * Minimum and maximum scores can be specified as well as the type of evidence linking target and disease.
     * **Note** that multiple genes and diseases can be specified in the same request.
     * 
    **/
    public openapisdk.models.operations.GetEvidenceFilterResponse getEvidenceFilter(openapisdk.models.operations.GetEvidenceFilterRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/platform/public/evidence/filter");
        
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

        openapisdk.models.operations.GetEvidenceFilterResponse res = new openapisdk.models.operations.GetEvidenceFilterResponse() {{
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
        }

        return res;
    }
	
	
    /**
     * postAssociationFilter - Batch query available associations
     *
     * Complex queries and filters for association objects can also be submitted using a JSON
     * object and the equivalent POST method.
     * 
    **/
    public openapisdk.models.operations.PostAssociationFilterResponse postAssociationFilter(openapisdk.models.operations.PostAssociationFilterRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/platform/public/association/filter");
        
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

        openapisdk.models.operations.PostAssociationFilterResponse res = new openapisdk.models.operations.PostAssociationFilterResponse() {{
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
        }

        return res;
    }
	
	
    /**
     * postEvidenceFilter - Batch filter available evidence
     *
     * POST version of [/public/evidence/filter](#!/public/get_public_evidence_filter).
     * Filters can be specified as part of a `json` object in the body, simplifying the submission of queries.
     * 
    **/
    public openapisdk.models.operations.PostEvidenceFilterResponse postEvidenceFilter(openapisdk.models.operations.PostEvidenceFilterRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/platform/public/evidence/filter");
        
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

        openapisdk.models.operations.PostEvidenceFilterResponse res = new openapisdk.models.operations.PostEvidenceFilterResponse() {{
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
        }

        return res;
    }
	
}