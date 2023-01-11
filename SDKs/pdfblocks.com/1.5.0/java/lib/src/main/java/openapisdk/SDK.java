

package openapisdk;

import openapisdk.utils.HTTPClient;
import openapisdk.utils.SpeakeasyHTTPClient;
import openapisdk.utils.HTTPRequest;
import java.net.http.HttpResponse;
import com.fasterxml.jackson.databind.ObjectMapper;
import java.nio.charset.StandardCharsets;
import openapisdk.utils.SerializedBody;

/** SDK Documentation: https://www.pdfblocks.com/docs/api/v1 - Documentation and examples**/
public class SDK {
	public static final String[] SERVERS = {
		"https://api.pdfblocks.com",
		"https://eu.api.pdfblocks.com",
	};
  		

	private HTTPClient _defaultClient;
	private HTTPClient _securityClient;
	private openapisdk.models.shared.Security _security;
	private String _serverUrl;
	private String _language = "java";
	private String _sdkVersion = "0.0.1";
	private String _genVersion = "internal";

	public static class Builder {
		private HTTPClient client;
		private openapisdk.models.shared.Security security;
		private String serverUrl;
		private java.util.Map<String, String> params = new java.util.HashMap<String, String>();

		private Builder() {
		}

		public Builder setClient(HTTPClient client) {
			this.client = client;
			return this;
		}
		
		public Builder setSecurity(openapisdk.models.shared.Security security) {
			this.security = security;
			return this;
		}
		
		public Builder setServerURL(String serverUrl) {
			this.serverUrl = serverUrl;
			return this;
		}
		
		public Builder setServerURL(String serverUrl, java.util.Map<String, String> params) {
			this.serverUrl = serverUrl;
			this.params = params;
			return this;
		}
		
		public SDK build() throws Exception {
			return new SDK(this.client, this.security, this.serverUrl, this.params);
		}
	}

	public static Builder builder() {
		return new Builder();
	}

	private SDK(HTTPClient client, openapisdk.models.shared.Security security, String serverUrl, java.util.Map<String, String> params) throws Exception {
		this._defaultClient = client;
		
		if (this._defaultClient == null) {
			this._defaultClient = new SpeakeasyHTTPClient();
		}
		
		if (security != null) {
			this._security = security;
			this._securityClient = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, this._security);
		}
		
		if (this._securityClient == null) {
			this._securityClient = this._defaultClient;
		}

		if (serverUrl != null && !serverUrl.isBlank()) {
			this._serverUrl = openapisdk.utils.Utils.replaceParameters(serverUrl, params);
		}
		
		if (this._serverUrl == null) {
			this._serverUrl = SERVERS[0];
		}
		
	}
	
	
    /**
     * addImageWatermarkV1 - Add an image watermark to a PDF
     *
     * Add an image watermark to each page of a PDF document.
     *
     * https://www.pdfblocks.com/docs/api/v1/add-watermark-image - Documentation and examples
    **/
    public openapisdk.models.operations.AddImageWatermarkV1Response addImageWatermarkV1(openapisdk.models.operations.AddImageWatermarkV1Request request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/add_watermark/image");
        
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

        openapisdk.models.operations.AddImageWatermarkV1Response res = new openapisdk.models.operations.AddImageWatermarkV1Response() {{
            addImageWatermarkV1200ApplicationPdfBinaryString = null;
            addImageWatermarkV14XXApplicationProblemPlusJsonObject = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/pdf")) {
                byte[] out = httpRes.body();
                res.addImageWatermarkV1200ApplicationPdfBinaryString = out;
            }
        }
        else if (httpRes.statusCode() >= 400 && httpRes.statusCode() < 500) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/problem+json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.AddImageWatermarkV14XxApplicationProblemPlusJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.AddImageWatermarkV14XxApplicationProblemPlusJson.class);
                res.addImageWatermarkV14XXApplicationProblemPlusJsonObject = out;
            }
        }

        return res;
    }
	
	
    /**
     * addPasswordV1 - Add a password to a PDF
     *
     * Protect a PDF document with a password. Encrypt the PDF document to prevent unauthorized access.
     *
     * https://www.pdfblocks.com/docs/api/v1/add-password - Documentation and examples
    **/
    public openapisdk.models.operations.AddPasswordV1Response addPasswordV1(openapisdk.models.operations.AddPasswordV1Request request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/add_password");
        
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

        openapisdk.models.operations.AddPasswordV1Response res = new openapisdk.models.operations.AddPasswordV1Response() {{
            addPasswordV1200ApplicationPdfBinaryString = null;
            addPasswordV14XXApplicationProblemPlusJsonObject = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/pdf")) {
                byte[] out = httpRes.body();
                res.addPasswordV1200ApplicationPdfBinaryString = out;
            }
        }
        else if (httpRes.statusCode() >= 400 && httpRes.statusCode() < 500) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/problem+json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.AddPasswordV14XxApplicationProblemPlusJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.AddPasswordV14XxApplicationProblemPlusJson.class);
                res.addPasswordV14XXApplicationProblemPlusJsonObject = out;
            }
        }

        return res;
    }
	
	
    /**
     * addRestrictionsV1 - Add restrictions to a PDF
     *
     * Add restrictions to prevent copying, printing, and modifying a PDF document.
     *
     * https://www.pdfblocks.com/docs/api/v1/add-restrictions - Documentation and examples
    **/
    public openapisdk.models.operations.AddRestrictionsV1Response addRestrictionsV1(openapisdk.models.operations.AddRestrictionsV1Request request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/add_restrictions");
        
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

        openapisdk.models.operations.AddRestrictionsV1Response res = new openapisdk.models.operations.AddRestrictionsV1Response() {{
            addRestrictionsV1200ApplicationPdfBinaryString = null;
            addRestrictionsV14XXApplicationProblemPlusJsonObject = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/pdf")) {
                byte[] out = httpRes.body();
                res.addRestrictionsV1200ApplicationPdfBinaryString = out;
            }
        }
        else if (httpRes.statusCode() >= 400 && httpRes.statusCode() < 500) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/problem+json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.AddRestrictionsV14XxApplicationProblemPlusJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.AddRestrictionsV14XxApplicationProblemPlusJson.class);
                res.addRestrictionsV14XXApplicationProblemPlusJsonObject = out;
            }
        }

        return res;
    }
	
	
    /**
     * addTextWatermarkV1 - Add a text watermark to a PDF
     *
     * Add a text watermark to each page of a PDF document. Choose from several watermark templates.
     *
     * https://www.pdfblocks.com/docs/api/v1/add-watermark-text - Documentation and examples
    **/
    public openapisdk.models.operations.AddTextWatermarkV1Response addTextWatermarkV1(openapisdk.models.operations.AddTextWatermarkV1Request request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/add_watermark/text");
        
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

        openapisdk.models.operations.AddTextWatermarkV1Response res = new openapisdk.models.operations.AddTextWatermarkV1Response() {{
            addTextWatermarkV1200ApplicationPdfBinaryString = null;
            addTextWatermarkV14XXApplicationProblemPlusJsonObject = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/pdf")) {
                byte[] out = httpRes.body();
                res.addTextWatermarkV1200ApplicationPdfBinaryString = out;
            }
        }
        else if (httpRes.statusCode() >= 400 && httpRes.statusCode() < 500) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/problem+json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.AddTextWatermarkV14XxApplicationProblemPlusJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.AddTextWatermarkV14XxApplicationProblemPlusJson.class);
                res.addTextWatermarkV14XXApplicationProblemPlusJsonObject = out;
            }
        }

        return res;
    }
	
	
    /**
     * extractPagesV1 - Extract pages from a PDF
     *
     * Extract one or more pages from a PDF document.
     *
     * https://www.pdfblocks.com/docs/api/v1/extract-pages - Documentation and examples
    **/
    public openapisdk.models.operations.ExtractPagesV1Response extractPagesV1(openapisdk.models.operations.ExtractPagesV1Request request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/extract_pages");
        
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

        openapisdk.models.operations.ExtractPagesV1Response res = new openapisdk.models.operations.ExtractPagesV1Response() {{
            extractPagesV1200ApplicationPdfBinaryString = null;
            extractPagesV14XXApplicationProblemPlusJsonObject = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/pdf")) {
                byte[] out = httpRes.body();
                res.extractPagesV1200ApplicationPdfBinaryString = out;
            }
        }
        else if (httpRes.statusCode() >= 400 && httpRes.statusCode() < 500) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/problem+json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.ExtractPagesV14XxApplicationProblemPlusJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.ExtractPagesV14XxApplicationProblemPlusJson.class);
                res.extractPagesV14XXApplicationProblemPlusJsonObject = out;
            }
        }

        return res;
    }
	
	
    /**
     * mergeDocumentsV1 - Merge PDF documents
     *
     * Combine multiple PDF documents into a single PDF document.
     *
     * https://www.pdfblocks.com/docs/api/v1/merge-documents - Documentation and examples
    **/
    public openapisdk.models.operations.MergeDocumentsV1Response mergeDocumentsV1(openapisdk.models.operations.MergeDocumentsV1Request request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/merge_documents");
        
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

        openapisdk.models.operations.MergeDocumentsV1Response res = new openapisdk.models.operations.MergeDocumentsV1Response() {{
            mergeDocumentsV1200ApplicationPdfBinaryString = null;
            mergeDocumentsV14XXApplicationProblemPlusJsonObject = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/pdf")) {
                byte[] out = httpRes.body();
                res.mergeDocumentsV1200ApplicationPdfBinaryString = out;
            }
        }
        else if (httpRes.statusCode() >= 400 && httpRes.statusCode() < 500) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/problem+json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.MergeDocumentsV14XxApplicationProblemPlusJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.MergeDocumentsV14XxApplicationProblemPlusJson.class);
                res.mergeDocumentsV14XXApplicationProblemPlusJsonObject = out;
            }
        }

        return res;
    }
	
	
    /**
     * removePagesV1 - Remove pages from a PDF
     *
     * Remove one or more pages from a PDF document.
     *
     * https://www.pdfblocks.com/docs/api/v1/remove-pages - Documentation and examples
    **/
    public openapisdk.models.operations.RemovePagesV1Response removePagesV1(openapisdk.models.operations.RemovePagesV1Request request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/remove_pages");
        
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

        openapisdk.models.operations.RemovePagesV1Response res = new openapisdk.models.operations.RemovePagesV1Response() {{
            removePagesV1200ApplicationPdfBinaryString = null;
            removePagesV14XXApplicationProblemPlusJsonObject = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/pdf")) {
                byte[] out = httpRes.body();
                res.removePagesV1200ApplicationPdfBinaryString = out;
            }
        }
        else if (httpRes.statusCode() >= 400 && httpRes.statusCode() < 500) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/problem+json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.RemovePagesV14XxApplicationProblemPlusJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.RemovePagesV14XxApplicationProblemPlusJson.class);
                res.removePagesV14XXApplicationProblemPlusJsonObject = out;
            }
        }

        return res;
    }
	
	
    /**
     * removePasswordV1 - Remove the password from a PDF
     *
     * Remove the password from an encrypted PDF document. The PDF document will no longer require a password to open.
     *
     * https://www.pdfblocks.com/docs/api/v1/remove-password - Documentation and examples
    **/
    public openapisdk.models.operations.RemovePasswordV1Response removePasswordV1(openapisdk.models.operations.RemovePasswordV1Request request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/remove_password");
        
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

        openapisdk.models.operations.RemovePasswordV1Response res = new openapisdk.models.operations.RemovePasswordV1Response() {{
            removePasswordV1200ApplicationPdfBinaryString = null;
            removePasswordV14XXApplicationProblemPlusJsonObject = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/pdf")) {
                byte[] out = httpRes.body();
                res.removePasswordV1200ApplicationPdfBinaryString = out;
            }
        }
        else if (httpRes.statusCode() >= 400 && httpRes.statusCode() < 500) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/problem+json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.RemovePasswordV14XxApplicationProblemPlusJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.RemovePasswordV14XxApplicationProblemPlusJson.class);
                res.removePasswordV14XXApplicationProblemPlusJsonObject = out;
            }
        }

        return res;
    }
	
	
    /**
     * removeRestrictionsV1 - Remove the restrictions from a PDF
     *
     * Remove all the restrictions from a PDF document.
     *
     * https://www.pdfblocks.com/docs/api/v1/remove-restrictions - Documentation and examples
    **/
    public openapisdk.models.operations.RemoveRestrictionsV1Response removeRestrictionsV1(openapisdk.models.operations.RemoveRestrictionsV1Request request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/remove_restrictions");
        
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

        openapisdk.models.operations.RemoveRestrictionsV1Response res = new openapisdk.models.operations.RemoveRestrictionsV1Response() {{
            removeRestrictionsV1200ApplicationPdfBinaryString = null;
            removeRestrictionsV14XXApplicationProblemPlusJsonObject = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/pdf")) {
                byte[] out = httpRes.body();
                res.removeRestrictionsV1200ApplicationPdfBinaryString = out;
            }
        }
        else if (httpRes.statusCode() >= 400 && httpRes.statusCode() < 500) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/problem+json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.RemoveRestrictionsV14XxApplicationProblemPlusJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.RemoveRestrictionsV14XxApplicationProblemPlusJson.class);
                res.removeRestrictionsV14XXApplicationProblemPlusJsonObject = out;
            }
        }

        return res;
    }
	
	
    /**
     * removeSignaturesV1 - Remove the signatures from a PDF
     *
     * Remove the cryptographic signatures and timestamps from a PDF document.
     *
     * https://www.pdfblocks.com/docs/api/v1/remove-signatures - Documentation and examples
    **/
    public openapisdk.models.operations.RemoveSignaturesV1Response removeSignaturesV1(openapisdk.models.operations.RemoveSignaturesV1Request request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/remove_signatures");
        
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

        openapisdk.models.operations.RemoveSignaturesV1Response res = new openapisdk.models.operations.RemoveSignaturesV1Response() {{
            removeSignaturesV1200ApplicationPdfBinaryString = null;
            removeSignaturesV14XXApplicationProblemPlusJsonObject = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/pdf")) {
                byte[] out = httpRes.body();
                res.removeSignaturesV1200ApplicationPdfBinaryString = out;
            }
        }
        else if (httpRes.statusCode() >= 400 && httpRes.statusCode() < 500) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/problem+json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.RemoveSignaturesV14XxApplicationProblemPlusJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.RemoveSignaturesV14XxApplicationProblemPlusJson.class);
                res.removeSignaturesV14XXApplicationProblemPlusJsonObject = out;
            }
        }

        return res;
    }
	
	
    /**
     * reversePagesV1 - Reverse the pages of a PDF
     *
     * Reverse the order of the pages of a PDF document.
     *
     * https://www.pdfblocks.com/docs/api/v1/reverse-pages - Documentation and examples
    **/
    public openapisdk.models.operations.ReversePagesV1Response reversePagesV1(openapisdk.models.operations.ReversePagesV1Request request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/reverse_pages");
        
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

        openapisdk.models.operations.ReversePagesV1Response res = new openapisdk.models.operations.ReversePagesV1Response() {{
            reversePagesV1200ApplicationPdfBinaryString = null;
            reversePagesV14XXApplicationProblemPlusJsonObject = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/pdf")) {
                byte[] out = httpRes.body();
                res.reversePagesV1200ApplicationPdfBinaryString = out;
            }
        }
        else if (httpRes.statusCode() >= 400 && httpRes.statusCode() < 500) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/problem+json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.ReversePagesV14XxApplicationProblemPlusJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.ReversePagesV14XxApplicationProblemPlusJson.class);
                res.reversePagesV14XXApplicationProblemPlusJsonObject = out;
            }
        }

        return res;
    }
	
	
    /**
     * rotatePagesV1 - Rotate pages in a PDF
     *
     * Rotate one or more pages in a PDF document.
     *
     * https://www.pdfblocks.com/docs/api/v1/rotate-pages - Documentation and examples
    **/
    public openapisdk.models.operations.RotatePagesV1Response rotatePagesV1(openapisdk.models.operations.RotatePagesV1Request request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/rotate_pages");
        
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

        openapisdk.models.operations.RotatePagesV1Response res = new openapisdk.models.operations.RotatePagesV1Response() {{
            rotatePagesV1200ApplicationPdfBinaryString = null;
            rotatePagesV14XXApplicationProblemPlusJsonObject = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/pdf")) {
                byte[] out = httpRes.body();
                res.rotatePagesV1200ApplicationPdfBinaryString = out;
            }
        }
        else if (httpRes.statusCode() >= 400 && httpRes.statusCode() < 500) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/problem+json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.RotatePagesV14XxApplicationProblemPlusJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.RotatePagesV14XxApplicationProblemPlusJson.class);
                res.rotatePagesV14XXApplicationProblemPlusJsonObject = out;
            }
        }

        return res;
    }
	
}