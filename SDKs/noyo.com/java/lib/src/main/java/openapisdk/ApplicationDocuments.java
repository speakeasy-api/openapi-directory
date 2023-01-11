package openapisdk;

import openapisdk.utils.HTTPClient;
import openapisdk.utils.HTTPRequest;
import java.net.http.HttpResponse;
import com.fasterxml.jackson.databind.ObjectMapper;
import java.nio.charset.StandardCharsets;
import openapisdk.utils.SerializedBody;
import org.apache.http.NameValuePair;

public class ApplicationDocuments {
	private HTTPClient _defaultClient;
	private HTTPClient _securityClient;
	private String _serverUrl;
	private String _language;
	private String _sdkVersion;
	private String _genVersion;

	public ApplicationDocuments(HTTPClient defaultClient, HTTPClient securityClient, String serverUrl, String language, String sdkVersion, String genVersion) {
		this._defaultClient = defaultClient;
		this._securityClient = securityClient;
		this._serverUrl = serverUrl;
		this._language = language;
		this._sdkVersion = sdkVersion;
		this._genVersion = genVersion;
	}
	
	
    /**
     * createApplicationDocument - Create new Application Document
     *
     * Create a new document submission attached to an application. This endpoint provisions a new document upload and creates a new application document to be attached to the application. Use this endpoint to submit any files not already requested by the application.
    **/
    public openapisdk.models.operations.CreateApplicationDocumentResponse createApplicationDocument(openapisdk.models.operations.CreateApplicationDocumentRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/api/v1/applications/{application_id}/documents", request.pathParams);
        
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

        openapisdk.models.operations.CreateApplicationDocumentResponse res = new openapisdk.models.operations.CreateApplicationDocumentResponse() {{
            applicationDocumentResult = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 201) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.ApplicationDocumentResult out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.ApplicationDocumentResult.class);
                res.applicationDocumentResult = out;
            }
        }

        return res;
    }
	
	
    /**
     * editApplicationDocument - Edit an Application Document
     *
     * Edit an application document based on the ID provided. The version parameter must match the latest application document version. When the `group_file_id` is not present, this method will update properties and metadata about an existing application document.
    **/
    public openapisdk.models.operations.EditApplicationDocumentResponse editApplicationDocument(openapisdk.models.operations.EditApplicationDocumentRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/api/v1/applications/{application_id}/documents/{document_id}/{version}", request.pathParams);
        
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

        openapisdk.models.operations.EditApplicationDocumentResponse res = new openapisdk.models.operations.EditApplicationDocumentResponse() {{
            applicationDocumentResult = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.ApplicationDocumentResult out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.ApplicationDocumentResult.class);
                res.applicationDocumentResult = out;
            }
        }

        return res;
    }
	
	
    /**
     * getApplicationDocument - Get Application Document
     *
     * Returns the latest version of a single application document based on the ID provided.
    **/
    public openapisdk.models.operations.GetApplicationDocumentResponse getApplicationDocument(openapisdk.models.operations.GetApplicationDocumentRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/api/v1/applications/{application_id}/documents/{document_id}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetApplicationDocumentResponse res = new openapisdk.models.operations.GetApplicationDocumentResponse() {{
            applicationDocumentResult = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.ApplicationDocumentResult out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.ApplicationDocumentResult.class);
                res.applicationDocumentResult = out;
            }
        }

        return res;
    }
	
	
    /**
     * getApplicationDocuments - Get all Application Documents
     *
     * Get a list of all documents associated with a carrier application.
    **/
    public openapisdk.models.operations.GetApplicationDocumentsResponse getApplicationDocuments(openapisdk.models.operations.GetApplicationDocumentsRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/api/v1/applications/{application_id}/documents", request.pathParams);
        
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

        openapisdk.models.operations.GetApplicationDocumentsResponse res = new openapisdk.models.operations.GetApplicationDocumentsResponse() {{
            paginatedApplicationDocumentResult = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.PaginatedApplicationDocumentResult out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.PaginatedApplicationDocumentResult.class);
                res.paginatedApplicationDocumentResult = out;
            }
        }

        return res;
    }
	
	
    /**
     * submitApplicationDocument - Submit new Application Document
     *
     * Each group application will ask for a list of optional or required application documents. This endpoint provisions a new file upload and associates the uploaded file with the existing application document with the given ID. This endpoint can be used to replace a file that you uploaded earlier with a newer version.
    **/
    public openapisdk.models.operations.SubmitApplicationDocumentResponse submitApplicationDocument(openapisdk.models.operations.SubmitApplicationDocumentRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/api/v1/applications/{application_id}/documents/{document_id}/{version}", request.pathParams);
        
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

        openapisdk.models.operations.SubmitApplicationDocumentResponse res = new openapisdk.models.operations.SubmitApplicationDocumentResponse() {{
            applicationDocumentResult = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.ApplicationDocumentResult out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.ApplicationDocumentResult.class);
                res.applicationDocumentResult = out;
            }
        }

        return res;
    }
	
}