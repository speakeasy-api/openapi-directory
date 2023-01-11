package openapisdk;

import openapisdk.utils.HTTPClient;
import openapisdk.utils.HTTPRequest;
import java.net.http.HttpResponse;
import com.fasterxml.jackson.databind.ObjectMapper;
import java.nio.charset.StandardCharsets;
import openapisdk.utils.SerializedBody;

public class VbaDocuments {
	private HTTPClient _defaultClient;
	private HTTPClient _securityClient;
	private String _serverUrl;
	private String _language;
	private String _sdkVersion;
	private String _genVersion;

	public VbaDocuments(HTTPClient defaultClient, HTTPClient securityClient, String serverUrl, String language, String sdkVersion, String genVersion) {
		this._defaultClient = defaultClient;
		this._securityClient = securityClient;
		this._serverUrl = serverUrl;
		this._language = language;
		this._sdkVersion = sdkVersion;
		this._genVersion = genVersion;
	}
	
	
    /**
     * getBenefitsDocumentUploadDownload - Download zip of "what the server sees"
     *
     * An endpoint that will allow you to see exactly what the server sees. We split apart all submitted docs and metadata and zip the file to make it available to you to help with debugging purposes. Files are deleted after 10 days. Only available in testing environments, not production.
    **/
    public openapisdk.models.operations.GetBenefitsDocumentUploadDownloadResponse getBenefitsDocumentUploadDownload(openapisdk.models.operations.GetBenefitsDocumentUploadDownloadRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/uploads/{id}/download", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetBenefitsDocumentUploadDownloadResponse res = new openapisdk.models.operations.GetBenefitsDocumentUploadDownloadResponse() {{
            getBenefitsDocumentUploadDownload200ApplicationZipBinaryString = null;
            getBenefitsDocumentUploadDownload401ApplicationJSONObject = null;
            getBenefitsDocumentUploadDownload403ApplicationJSONObject = null;
            getBenefitsDocumentUploadDownload404ApplicationJSONObject = null;
            getBenefitsDocumentUploadDownload429ApplicationJSONObject = null;
            getBenefitsDocumentUploadDownload500ApplicationJSONObject = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/zip")) {
                byte[] out = httpRes.body();
                res.getBenefitsDocumentUploadDownload200ApplicationZipBinaryString = out;
            }
        }
        else if (httpRes.statusCode() == 401) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.GetBenefitsDocumentUploadDownload401ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.GetBenefitsDocumentUploadDownload401ApplicationJson.class);
                res.getBenefitsDocumentUploadDownload401ApplicationJSONObject = out;
            }
        }
        else if (httpRes.statusCode() == 403) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.GetBenefitsDocumentUploadDownload403ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.GetBenefitsDocumentUploadDownload403ApplicationJson.class);
                res.getBenefitsDocumentUploadDownload403ApplicationJSONObject = out;
            }
        }
        else if (httpRes.statusCode() == 404) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.GetBenefitsDocumentUploadDownload404ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.GetBenefitsDocumentUploadDownload404ApplicationJson.class);
                res.getBenefitsDocumentUploadDownload404ApplicationJSONObject = out;
            }
        }
        else if (httpRes.statusCode() == 429) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.GetBenefitsDocumentUploadDownload429ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.GetBenefitsDocumentUploadDownload429ApplicationJson.class);
                res.getBenefitsDocumentUploadDownload429ApplicationJSONObject = out;
            }
        }
        else if (httpRes.statusCode() == 500) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.GetBenefitsDocumentUploadDownload500ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.GetBenefitsDocumentUploadDownload500ApplicationJson.class);
                res.getBenefitsDocumentUploadDownload500ApplicationJSONObject = out;
            }
        }

        return res;
    }
	
	
    /**
     * getBenefitsDocumentUploadStatus - Get status for a previous benefits document upload
    **/
    public openapisdk.models.operations.GetBenefitsDocumentUploadStatusResponse getBenefitsDocumentUploadStatus(openapisdk.models.operations.GetBenefitsDocumentUploadStatusRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/uploads/{id}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetBenefitsDocumentUploadStatusResponse res = new openapisdk.models.operations.GetBenefitsDocumentUploadStatusResponse() {{
            getBenefitsDocumentUploadStatus200ApplicationJSONAny = null;
            getBenefitsDocumentUploadStatus401ApplicationJSONObject = null;
            getBenefitsDocumentUploadStatus403ApplicationJSONObject = null;
            getBenefitsDocumentUploadStatus404ApplicationJSONObject = null;
            getBenefitsDocumentUploadStatus429ApplicationJSONObject = null;
            getBenefitsDocumentUploadStatus500ApplicationJSONObject = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                Object out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), Object.class);
                res.getBenefitsDocumentUploadStatus200ApplicationJSONAny = out;
            }
        }
        else if (httpRes.statusCode() == 401) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.GetBenefitsDocumentUploadStatus401ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.GetBenefitsDocumentUploadStatus401ApplicationJson.class);
                res.getBenefitsDocumentUploadStatus401ApplicationJSONObject = out;
            }
        }
        else if (httpRes.statusCode() == 403) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.GetBenefitsDocumentUploadStatus403ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.GetBenefitsDocumentUploadStatus403ApplicationJson.class);
                res.getBenefitsDocumentUploadStatus403ApplicationJSONObject = out;
            }
        }
        else if (httpRes.statusCode() == 404) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.GetBenefitsDocumentUploadStatus404ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.GetBenefitsDocumentUploadStatus404ApplicationJson.class);
                res.getBenefitsDocumentUploadStatus404ApplicationJSONObject = out;
            }
        }
        else if (httpRes.statusCode() == 429) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.GetBenefitsDocumentUploadStatus429ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.GetBenefitsDocumentUploadStatus429ApplicationJson.class);
                res.getBenefitsDocumentUploadStatus429ApplicationJSONObject = out;
            }
        }
        else if (httpRes.statusCode() == 500) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.GetBenefitsDocumentUploadStatus500ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.GetBenefitsDocumentUploadStatus500ApplicationJson.class);
                res.getBenefitsDocumentUploadStatus500ApplicationJSONObject = out;
            }
        }

        return res;
    }
	
	
    /**
     * getBenefitsDocumentUploadStatusReport - Get a bulk status report for a list of previous uploads
    **/
    public openapisdk.models.operations.GetBenefitsDocumentUploadStatusReportResponse getBenefitsDocumentUploadStatusReport(openapisdk.models.operations.GetBenefitsDocumentUploadStatusReportRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/uploads/report");
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        if (serializedRequestBody == null) {
            throw new Exception("Request body is required");
        }
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetBenefitsDocumentUploadStatusReportResponse res = new openapisdk.models.operations.GetBenefitsDocumentUploadStatusReportResponse() {{
            getBenefitsDocumentUploadStatusReport200ApplicationJSONObject = null;
            getBenefitsDocumentUploadStatusReport401ApplicationJSONObject = null;
            getBenefitsDocumentUploadStatusReport403ApplicationJSONObject = null;
            getBenefitsDocumentUploadStatusReport422ApplicationJSONObject = null;
            getBenefitsDocumentUploadStatusReport429ApplicationJSONObject = null;
            getBenefitsDocumentUploadStatusReport500ApplicationJSONObject = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.GetBenefitsDocumentUploadStatusReport200ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.GetBenefitsDocumentUploadStatusReport200ApplicationJson.class);
                res.getBenefitsDocumentUploadStatusReport200ApplicationJSONObject = out;
            }
        }
        else if (httpRes.statusCode() == 400) {
        }
        else if (httpRes.statusCode() == 401) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.GetBenefitsDocumentUploadStatusReport401ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.GetBenefitsDocumentUploadStatusReport401ApplicationJson.class);
                res.getBenefitsDocumentUploadStatusReport401ApplicationJSONObject = out;
            }
        }
        else if (httpRes.statusCode() == 403) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.GetBenefitsDocumentUploadStatusReport403ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.GetBenefitsDocumentUploadStatusReport403ApplicationJson.class);
                res.getBenefitsDocumentUploadStatusReport403ApplicationJSONObject = out;
            }
        }
        else if (httpRes.statusCode() == 422) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.GetBenefitsDocumentUploadStatusReport422ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.GetBenefitsDocumentUploadStatusReport422ApplicationJson.class);
                res.getBenefitsDocumentUploadStatusReport422ApplicationJSONObject = out;
            }
        }
        else if (httpRes.statusCode() == 429) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.GetBenefitsDocumentUploadStatusReport429ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.GetBenefitsDocumentUploadStatusReport429ApplicationJson.class);
                res.getBenefitsDocumentUploadStatusReport429ApplicationJSONObject = out;
            }
        }
        else if (httpRes.statusCode() == 500) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.GetBenefitsDocumentUploadStatusReport500ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.GetBenefitsDocumentUploadStatusReport500ApplicationJson.class);
                res.getBenefitsDocumentUploadStatusReport500ApplicationJSONObject = out;
            }
        }

        return res;
    }
	
	
    /**
     * postBenefitsDocumentUpload - Get a location for subsequent document upload PUT request
    **/
    public openapisdk.models.operations.PostBenefitsDocumentUploadResponse postBenefitsDocumentUpload(openapisdk.models.operations.PostBenefitsDocumentUploadRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/uploads");
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.PostBenefitsDocumentUploadResponse res = new openapisdk.models.operations.PostBenefitsDocumentUploadResponse() {{
            postBenefitsDocumentUpload202ApplicationJSONObject = null;
            postBenefitsDocumentUpload401ApplicationJSONObject = null;
            postBenefitsDocumentUpload403ApplicationJSONObject = null;
            postBenefitsDocumentUpload422ApplicationJSONObject = null;
            postBenefitsDocumentUpload429ApplicationJSONObject = null;
            postBenefitsDocumentUpload500ApplicationJSONObject = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 202) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.PostBenefitsDocumentUpload202ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.PostBenefitsDocumentUpload202ApplicationJson.class);
                res.postBenefitsDocumentUpload202ApplicationJSONObject = out;
            }
        }
        else if (httpRes.statusCode() == 401) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.PostBenefitsDocumentUpload401ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.PostBenefitsDocumentUpload401ApplicationJson.class);
                res.postBenefitsDocumentUpload401ApplicationJSONObject = out;
            }
        }
        else if (httpRes.statusCode() == 403) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.PostBenefitsDocumentUpload403ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.PostBenefitsDocumentUpload403ApplicationJson.class);
                res.postBenefitsDocumentUpload403ApplicationJSONObject = out;
            }
        }
        else if (httpRes.statusCode() == 422) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.PostBenefitsDocumentUpload422ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.PostBenefitsDocumentUpload422ApplicationJson.class);
                res.postBenefitsDocumentUpload422ApplicationJSONObject = out;
            }
        }
        else if (httpRes.statusCode() == 429) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.PostBenefitsDocumentUpload429ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.PostBenefitsDocumentUpload429ApplicationJson.class);
                res.postBenefitsDocumentUpload429ApplicationJSONObject = out;
            }
        }
        else if (httpRes.statusCode() == 500) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.PostBenefitsDocumentUpload500ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.PostBenefitsDocumentUpload500ApplicationJson.class);
                res.postBenefitsDocumentUpload500ApplicationJSONObject = out;
            }
        }

        return res;
    }
	
	
    /**
     * putBenefitsDocumentUpload - Accepts document upload.
     *
     * Accepts document metadata, document binary, and attachment binaries.Full URL, including
     * query parameters, provided from POST `/document_uploads`.
     * 
     * ## Example Payload
     * 
     * The following demonstrates a (redacted) multipart payload suitable for submitting to the PUT
     * endpoint. Most programming languages should have provisions for assembling a multipart
     * payload like this without having to do so manually.
     * 
     * ```
     * --17de1ed8f01442b2a2d7a93506314b76
     * Content-Disposition: form-data; name="metadata"
     * Content-Type: application/json
     * 
     * {"veteranFirstName": "Jane",
     * "veteranLastName": "Doe",
     * "fileNumber": "012345678",
     * "zipCode": "97202",
     * "source": "MyVSO",
     * "docType": "21-22"
     * "businessLine": "CMP"}
     * --17de1ed8f01442b2a2d7a93506314b76
     * Content-Disposition: form-data; name="content"
     * Content-Type: application/pdf
     * 
     * <Binary PDF contents>
     * --17de1ed8f01442b2a2d7a93506314b76
     * Content-Disposition: form-data; name="attachment1"
     * Content-Type: application/pdf
     * 
     * <Binary PDF attachment contents>
     * --17de1ed8f01442b2a2d7a93506314b76--
     * ```
     * 
     * This PUT request would have an overall HTTP Content-Type header:
     * 
     * ```
     * Content-Type: multipart/form-data; boundary=17de1ed8f01442b2a2d7a93506314b76
     * ```
     * 
     * Note that the Content-Disposition parameter "name" in each part must be the expected values
     * "metadata", "content", "attachment1"..."attachmentN". The attachment attributes must be named 
     * exactly as they are listed here (case sensitive), for example: "attachment_1" or "Attachment2"
     * are invalid.
     * 
     * This is an example curl command:
     * 
     * ```
     * curl -v -L -X PUT '<Location from \ uploads>' -F 'metadata="{\"veteranFirstName\": \"Jane\",\"veteranLastName\": \"Doe\",\"fileNumber\": \"012345678\",\"zipCode\": \"97202\",\"source\": \"MyVSO\",\"docType\": \"21-22\",\"businessLine\": \"CMP\"}";type=application/json' -F 'content=@"content.pdf"' -F 'attachment1=@"file1.pdf"' -F 'attachment2=@"another_file.pdf"'
     * ```
     * 
    **/
    public openapisdk.models.operations.PutBenefitsDocumentUploadResponse putBenefitsDocumentUpload(openapisdk.models.operations.PutBenefitsDocumentUploadRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/path");
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("PUT");
        req.setURL(url);
        
        java.util.Map<String, java.util.List<String>> headers = openapisdk.utils.Utils.getHeaders(request.headers);
        if (headers != null) {
            for (java.util.Map.Entry<String, java.util.List<String>> header : headers.entrySet()) {
                for (String value : header.getValue()) {
                    req.addHeader(header.getKey(), value);
                }
            }
        }
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.PutBenefitsDocumentUploadResponse res = new openapisdk.models.operations.PutBenefitsDocumentUploadResponse() {{
            putBenefitsDocumentUpload401ApplicationJSONObject = null;
            body = null;
            putBenefitsDocumentUpload422ApplicationJSONObject = null;
            putBenefitsDocumentUpload429ApplicationJSONObject = null;
            putBenefitsDocumentUpload500ApplicationJSONObject = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
        }
        else if (httpRes.statusCode() == 401) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.PutBenefitsDocumentUpload401ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.PutBenefitsDocumentUpload401ApplicationJson.class);
                res.putBenefitsDocumentUpload401ApplicationJSONObject = out;
            }
        }
        else if (httpRes.statusCode() == 403) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }
        else if (httpRes.statusCode() == 422) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.PutBenefitsDocumentUpload422ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.PutBenefitsDocumentUpload422ApplicationJson.class);
                res.putBenefitsDocumentUpload422ApplicationJSONObject = out;
            }
        }
        else if (httpRes.statusCode() == 429) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.PutBenefitsDocumentUpload429ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.PutBenefitsDocumentUpload429ApplicationJson.class);
                res.putBenefitsDocumentUpload429ApplicationJSONObject = out;
            }
        }
        else if (httpRes.statusCode() == 500) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.PutBenefitsDocumentUpload500ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.PutBenefitsDocumentUpload500ApplicationJson.class);
                res.putBenefitsDocumentUpload500ApplicationJSONObject = out;
            }
        }

        return res;
    }
	
}