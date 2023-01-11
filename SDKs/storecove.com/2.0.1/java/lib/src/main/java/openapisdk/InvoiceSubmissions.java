package openapisdk;

import openapisdk.utils.HTTPClient;
import openapisdk.utils.HTTPRequest;
import java.net.http.HttpResponse;
import com.fasterxml.jackson.databind.ObjectMapper;
import java.nio.charset.StandardCharsets;
import openapisdk.utils.SerializedBody;

public class InvoiceSubmissions {
	private HTTPClient _defaultClient;
	private HTTPClient _securityClient;
	private String _serverUrl;
	private String _language;
	private String _sdkVersion;
	private String _genVersion;

	public InvoiceSubmissions(HTTPClient defaultClient, HTTPClient securityClient, String serverUrl, String language, String sdkVersion, String genVersion) {
		this._defaultClient = defaultClient;
		this._securityClient = securityClient;
		this._serverUrl = serverUrl;
		this._language = language;
		this._sdkVersion = sdkVersion;
		this._genVersion = genVersion;
	}
	
	
    /**
     * createInvoiceSubmission - Submit a new invoice
     *
     * Submit an invoice for delivery.
    **/
    public openapisdk.models.operations.CreateInvoiceSubmissionResponse createInvoiceSubmission(openapisdk.models.operations.CreateInvoiceSubmissionRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/invoice_submissions");
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        if (serializedRequestBody == null) {
            throw new Exception("Request body is required");
        }
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.CreateInvoiceSubmissionResponse res = new openapisdk.models.operations.CreateInvoiceSubmissionResponse() {{
            invoiceSubmissionResult = null;
            errorModels = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.InvoiceSubmissionResult out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.InvoiceSubmissionResult.class);
                res.invoiceSubmissionResult = out;
            }
        }
        else if (httpRes.statusCode() == 401) {
        }
        else if (httpRes.statusCode() == 403) {
        }
        else if (httpRes.statusCode() == 422) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                Object[] out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), Object[].class);
                res.errorModels = out;
            }
        }

        return res;
    }
	
	
    /**
     * preflightInvoiceRecipient - Preflight an invoice recipient
     *
     * Check whether Storecove can deliver an invoice for a list of ids.
    **/
    public openapisdk.models.operations.PreflightInvoiceRecipientResponse preflightInvoiceRecipient(openapisdk.models.operations.PreflightInvoiceRecipientRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/invoice_submissions/preflight");
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        if (serializedRequestBody == null) {
            throw new Exception("Request body is required");
        }
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.PreflightInvoiceRecipientResponse res = new openapisdk.models.operations.PreflightInvoiceRecipientResponse() {{
            preflightInvoiceRecipientResult = null;
            errorModels = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.PreflightInvoiceRecipientResult out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.PreflightInvoiceRecipientResult.class);
                res.preflightInvoiceRecipientResult = out;
            }
        }
        else if (httpRes.statusCode() == 401) {
        }
        else if (httpRes.statusCode() == 403) {
        }
        else if (httpRes.statusCode() == 422) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                Object[] out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), Object[].class);
                res.errorModels = out;
            }
        }

        return res;
    }
	
	
    /**
     * showInvoiceSubmissionEvidence - Get InvoiceSubmission Evidence
     *
     * Get evidence for an InvoiceSubmission by GUID with corresponding status
    **/
    public openapisdk.models.operations.ShowInvoiceSubmissionEvidenceResponse showInvoiceSubmissionEvidence(openapisdk.models.operations.ShowInvoiceSubmissionEvidenceRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/invoice_submissions/{guid}/evidence", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.ShowInvoiceSubmissionEvidenceResponse res = new openapisdk.models.operations.ShowInvoiceSubmissionEvidenceResponse() {{
            invoiceSubmissionEvidence = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                Object out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), Object.class);
                res.invoiceSubmissionEvidence = out;
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