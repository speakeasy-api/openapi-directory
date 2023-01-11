package openapisdk;

import openapisdk.utils.HTTPClient;
import openapisdk.utils.HTTPRequest;
import java.net.http.HttpResponse;
import openapisdk.utils.SerializedBody;
import org.apache.http.NameValuePair;

public class Retrieve {
	private HTTPClient _defaultClient;
	private HTTPClient _securityClient;
	private String _serverUrl;
	private String _language;
	private String _sdkVersion;
	private String _genVersion;

	public Retrieve(HTTPClient defaultClient, HTTPClient securityClient, String serverUrl, String language, String sdkVersion, String genVersion) {
		this._defaultClient = defaultClient;
		this._securityClient = securityClient;
		this._serverUrl = serverUrl;
		this._language = language;
		this._sdkVersion = sdkVersion;
		this._genVersion = genVersion;
	}
	
	
    /**
     * getAssociationById - Get association by id
     *
     * Once we integrate all evidence connecting a target to a specific disease, we
     *  compute an association score by the means of an harmonic sum. This *association score* provides
     *  an indication of how strong the evidence behind each connection is and can be
     *  used to rank genes in order of likelihood as drug targets.
     *  The association ID is constructed by using the Ensembl ID of the gene and the
     *  EFO ID for the disease (e.g. ENSG00000073756-EFO_0003767).
     *  The method returns an association object, which contains the data and summary
     *  on each evidence type included in the calculation of the score, as well as the score itself.
     * 
    **/
    public openapisdk.models.operations.GetAssociationByIdResponse getAssociationById(openapisdk.models.operations.GetAssociationByIdRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/platform/public/association");
        
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

        openapisdk.models.operations.GetAssociationByIdResponse res = new openapisdk.models.operations.GetAssociationByIdResponse() {{
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
        }

        return res;
    }
	
	
    /**
     * getEvidenceById - Get evidence by ID
     *
     * We call **evidence** a unit of data that support a connection between a target and a disease.
     * The Open Targets Platform integrates multiple types of evidence including genetic associations,
     * somatic mutations, RNA expression and target-disease associations mined from the literature.
     * This method allows you to retrieve a single evidence item or a list of pieces of evidence by using their
     * targetvalidation.org ID.
     * 
     * Evidence IDs are unique within each data release (e.g. `8ed3d7568a8c6cac9c95cfb869bac762` for release 1.2).
     * You can obtain a list of evidence and their IDs from other API calls such as [/public/evidence/filter](#!/public/get_public_evidence_filter).
     * 
     * **Please note** that a specific evidence ID may change between data releases. We can not guarantee that a specific evidence ID will refer to the same piece of evidence connecting a target and its diseases.
     * 
    **/
    public openapisdk.models.operations.GetEvidenceByIdResponse getEvidenceById(openapisdk.models.operations.GetEvidenceByIdRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/platform/public/evidence");
        
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

        openapisdk.models.operations.GetEvidenceByIdResponse res = new openapisdk.models.operations.GetEvidenceByIdResponse() {{
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
        }

        return res;
    }
	
	
    /**
     * postEvidenceById - Get evidence for a list of IDs
     *
     * This is the POST version of [/public/evidence](#!/public/get_public_evidence).
     * It allows to query for a list of evidence strings encoded in a `json` object to be passed in the body.
     * 
    **/
    public openapisdk.models.operations.PostEvidenceByIdResponse postEvidenceById(openapisdk.models.operations.PostEvidenceByIdRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/platform/public/evidence");
        
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

        openapisdk.models.operations.PostEvidenceByIdResponse res = new openapisdk.models.operations.PostEvidenceByIdResponse() {{
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
        }

        return res;
    }
	
}