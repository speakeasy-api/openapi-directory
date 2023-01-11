package openapisdk;

import openapisdk.utils.HTTPClient;
import openapisdk.utils.HTTPRequest;
import java.net.http.HttpResponse;
import openapisdk.utils.SerializedBody;
import org.apache.http.NameValuePair;

public class Public {
	private HTTPClient _defaultClient;
	private HTTPClient _securityClient;
	private String _serverUrl;
	private String _language;
	private String _sdkVersion;
	private String _genVersion;

	public Public(HTTPClient defaultClient, HTTPClient securityClient, String serverUrl, String language, String sdkVersion, String genVersion) {
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
     * getDataMetrics - Get metrics about the current data release
     *
     * Returns the metrics about associations and evidences, divided by datasource, genes and so on.
     * 
    **/
    public openapisdk.models.operations.GetDataMetricsResponse getDataMetrics() throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/platform/public/utils/metrics");
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetDataMetricsResponse res = new openapisdk.models.operations.GetDataMetricsResponse() {{
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
        }

        return res;
    }
	
	
    /**
     * getDataStats - Get statistics about the current data release
     *
     * Returns the number of associations and evidences, divided by datasource.
     * 
    **/
    public openapisdk.models.operations.GetDataStatsResponse getDataStats() throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/platform/public/utils/stats");
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetDataStatsResponse res = new openapisdk.models.operations.GetDataStatsResponse() {{
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
     * getPing - Ping service
     *
     * Check if the API is up
     * 
    **/
    public openapisdk.models.operations.GetPingResponse getPing() throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/platform/public/utils/ping");
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetPingResponse res = new openapisdk.models.operations.GetPingResponse() {{
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
        }

        return res;
    }
	
	
    /**
     * getSearch - Search for a disease or a target
     *
     * This method allows you to look for gene or diseases of interest using a free text search,
     * replicating the functionality of the search box on our homepage. It should be used to identify
     * the best match for a disease or target of interest, rather than gathering a specific set of evidence.
     * 
    **/
    public openapisdk.models.operations.GetSearchResponse getSearch(openapisdk.models.operations.GetSearchRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/platform/public/search");
        
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

        openapisdk.models.operations.GetSearchResponse res = new openapisdk.models.operations.GetSearchResponse() {{
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
        }

        return res;
    }
	
	
    /**
     * getTherapeuticAreas - Get the list of therapeutic areas about the current data release
     *
     * Returns the list of therapeutic areas for the current data release
     * 
    **/
    public openapisdk.models.operations.GetTherapeuticAreasResponse getTherapeuticAreas() throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/platform/public/utils/therapeuticareas");
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetTherapeuticAreasResponse res = new openapisdk.models.operations.GetTherapeuticAreasResponse() {{
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
        }

        return res;
    }
	
	
    /**
     * getVersion - Get API version
     *
     * Returns current API version.
     * 
    **/
    public openapisdk.models.operations.GetVersionResponse getVersion() throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/platform/public/utils/version");
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetVersionResponse res = new openapisdk.models.operations.GetVersionResponse() {{
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