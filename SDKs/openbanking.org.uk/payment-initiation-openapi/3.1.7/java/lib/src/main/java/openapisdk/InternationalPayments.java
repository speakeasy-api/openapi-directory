package openapisdk;

import openapisdk.utils.HTTPClient;
import java.util.function.Function;
import java.util.stream.Collectors;
import openapisdk.utils.HTTPRequest;
import java.net.http.HttpResponse;
import com.fasterxml.jackson.databind.ObjectMapper;
import java.nio.charset.StandardCharsets;
import openapisdk.utils.SerializedBody;

public class InternationalPayments {
	private HTTPClient _defaultClient;
	private HTTPClient _securityClient;
	private String _serverUrl;
	private String _language;
	private String _sdkVersion;
	private String _genVersion;

	public InternationalPayments(HTTPClient defaultClient, HTTPClient securityClient, String serverUrl, String language, String sdkVersion, String genVersion) {
		this._defaultClient = defaultClient;
		this._securityClient = securityClient;
		this._serverUrl = serverUrl;
		this._language = language;
		this._sdkVersion = sdkVersion;
		this._genVersion = genVersion;
	}
	
	
    /**
     * createInternationalPaymentConsents - Create International Payment Consents
    **/
    public openapisdk.models.operations.CreateInternationalPaymentConsentsResponse createInternationalPaymentConsents(openapisdk.models.operations.CreateInternationalPaymentConsentsRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/international-payment-consents");
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        if (serializedRequestBody == null) {
            throw new Exception("Request body is required");
        }
        req.setBody(serializedRequestBody);
        
        java.util.Map<String, java.util.List<String>> headers = openapisdk.utils.Utils.getHeaders(request.headers);
        if (headers != null) {
            for (java.util.Map.Entry<String, java.util.List<String>> header : headers.entrySet()) {
                for (String value : header.getValue()) {
                    req.addHeader(header.getKey(), value);
                }
            }
        }
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.CreateInternationalPaymentConsentsResponse res = new openapisdk.models.operations.CreateInternationalPaymentConsentsResponse() {{
            body = null;
            obWriteInternationalConsentResponse6 = null;
            obWriteInternationalConsentResponse6 = null;
            body = null;
            obErrorResponse1 = null;
            obErrorResponse1 = null;
            body = null;
            obErrorResponse1 = null;
            obErrorResponse1 = null;
            body = null;
            obErrorResponse1 = null;
            obErrorResponse1 = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 201) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/jose+jwe")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.ObWriteInternationalConsentResponse6 out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.ObWriteInternationalConsentResponse6.class);
                res.obWriteInternationalConsentResponse6 = out;
            }
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json; charset=utf-8")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.ObWriteInternationalConsentResponse6 out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.ObWriteInternationalConsentResponse6.class);
                res.obWriteInternationalConsentResponse6 = out;
            }
        }
        else if (httpRes.statusCode() == 400) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/jose+jwe")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.ObErrorResponse1 out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.ObErrorResponse1.class);
                res.obErrorResponse1 = out;
            }
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json; charset=utf-8")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.ObErrorResponse1 out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.ObErrorResponse1.class);
                res.obErrorResponse1 = out;
            }
        }
        else if (httpRes.statusCode() == 401) {
        }
        else if (httpRes.statusCode() == 403) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/jose+jwe")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.ObErrorResponse1 out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.ObErrorResponse1.class);
                res.obErrorResponse1 = out;
            }
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json; charset=utf-8")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.ObErrorResponse1 out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.ObErrorResponse1.class);
                res.obErrorResponse1 = out;
            }
        }
        else if (httpRes.statusCode() == 404) {
        }
        else if (httpRes.statusCode() == 405) {
        }
        else if (httpRes.statusCode() == 406) {
        }
        else if (httpRes.statusCode() == 415) {
        }
        else if (httpRes.statusCode() == 429) {
            res.headers = httpRes.headers().map().keySet().stream().collect(Collectors.toMap(Function.identity(), k -> httpRes.headers().allValues(k).toArray(new String[0])));
            
        }
        else if (httpRes.statusCode() == 500) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/jose+jwe")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.ObErrorResponse1 out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.ObErrorResponse1.class);
                res.obErrorResponse1 = out;
            }
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json; charset=utf-8")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.ObErrorResponse1 out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.ObErrorResponse1.class);
                res.obErrorResponse1 = out;
            }
        }

        return res;
    }
	
	
    /**
     * createInternationalPayments - Create International Payments
    **/
    public openapisdk.models.operations.CreateInternationalPaymentsResponse createInternationalPayments(openapisdk.models.operations.CreateInternationalPaymentsRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/international-payments");
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        if (serializedRequestBody == null) {
            throw new Exception("Request body is required");
        }
        req.setBody(serializedRequestBody);
        
        java.util.Map<String, java.util.List<String>> headers = openapisdk.utils.Utils.getHeaders(request.headers);
        if (headers != null) {
            for (java.util.Map.Entry<String, java.util.List<String>> header : headers.entrySet()) {
                for (String value : header.getValue()) {
                    req.addHeader(header.getKey(), value);
                }
            }
        }
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.CreateInternationalPaymentsResponse res = new openapisdk.models.operations.CreateInternationalPaymentsResponse() {{
            body = null;
            obWriteInternationalResponse5 = null;
            obWriteInternationalResponse5 = null;
            body = null;
            obErrorResponse1 = null;
            obErrorResponse1 = null;
            body = null;
            obErrorResponse1 = null;
            obErrorResponse1 = null;
            body = null;
            obErrorResponse1 = null;
            obErrorResponse1 = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 201) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/jose+jwe")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.ObWriteInternationalResponse5 out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.ObWriteInternationalResponse5.class);
                res.obWriteInternationalResponse5 = out;
            }
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json; charset=utf-8")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.ObWriteInternationalResponse5 out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.ObWriteInternationalResponse5.class);
                res.obWriteInternationalResponse5 = out;
            }
        }
        else if (httpRes.statusCode() == 400) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/jose+jwe")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.ObErrorResponse1 out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.ObErrorResponse1.class);
                res.obErrorResponse1 = out;
            }
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json; charset=utf-8")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.ObErrorResponse1 out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.ObErrorResponse1.class);
                res.obErrorResponse1 = out;
            }
        }
        else if (httpRes.statusCode() == 401) {
        }
        else if (httpRes.statusCode() == 403) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/jose+jwe")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.ObErrorResponse1 out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.ObErrorResponse1.class);
                res.obErrorResponse1 = out;
            }
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json; charset=utf-8")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.ObErrorResponse1 out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.ObErrorResponse1.class);
                res.obErrorResponse1 = out;
            }
        }
        else if (httpRes.statusCode() == 404) {
        }
        else if (httpRes.statusCode() == 405) {
        }
        else if (httpRes.statusCode() == 406) {
        }
        else if (httpRes.statusCode() == 415) {
        }
        else if (httpRes.statusCode() == 429) {
            res.headers = httpRes.headers().map().keySet().stream().collect(Collectors.toMap(Function.identity(), k -> httpRes.headers().allValues(k).toArray(new String[0])));
            
        }
        else if (httpRes.statusCode() == 500) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/jose+jwe")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.ObErrorResponse1 out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.ObErrorResponse1.class);
                res.obErrorResponse1 = out;
            }
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json; charset=utf-8")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.ObErrorResponse1 out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.ObErrorResponse1.class);
                res.obErrorResponse1 = out;
            }
        }

        return res;
    }
	
	
    /**
     * getInternationalPaymentConsentsConsentId - Get International Payment Consents
    **/
    public openapisdk.models.operations.GetInternationalPaymentConsentsConsentIdResponse getInternationalPaymentConsentsConsentId(openapisdk.models.operations.GetInternationalPaymentConsentsConsentIdRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/international-payment-consents/{ConsentId}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        java.util.Map<String, java.util.List<String>> headers = openapisdk.utils.Utils.getHeaders(request.headers);
        if (headers != null) {
            for (java.util.Map.Entry<String, java.util.List<String>> header : headers.entrySet()) {
                for (String value : header.getValue()) {
                    req.addHeader(header.getKey(), value);
                }
            }
        }
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetInternationalPaymentConsentsConsentIdResponse res = new openapisdk.models.operations.GetInternationalPaymentConsentsConsentIdResponse() {{
            body = null;
            obWriteInternationalConsentResponse6 = null;
            obWriteInternationalConsentResponse6 = null;
            body = null;
            obErrorResponse1 = null;
            obErrorResponse1 = null;
            body = null;
            obErrorResponse1 = null;
            obErrorResponse1 = null;
            body = null;
            obErrorResponse1 = null;
            obErrorResponse1 = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/jose+jwe")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.ObWriteInternationalConsentResponse6 out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.ObWriteInternationalConsentResponse6.class);
                res.obWriteInternationalConsentResponse6 = out;
            }
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json; charset=utf-8")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.ObWriteInternationalConsentResponse6 out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.ObWriteInternationalConsentResponse6.class);
                res.obWriteInternationalConsentResponse6 = out;
            }
        }
        else if (httpRes.statusCode() == 400) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/jose+jwe")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.ObErrorResponse1 out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.ObErrorResponse1.class);
                res.obErrorResponse1 = out;
            }
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json; charset=utf-8")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.ObErrorResponse1 out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.ObErrorResponse1.class);
                res.obErrorResponse1 = out;
            }
        }
        else if (httpRes.statusCode() == 401) {
        }
        else if (httpRes.statusCode() == 403) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/jose+jwe")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.ObErrorResponse1 out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.ObErrorResponse1.class);
                res.obErrorResponse1 = out;
            }
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json; charset=utf-8")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.ObErrorResponse1 out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.ObErrorResponse1.class);
                res.obErrorResponse1 = out;
            }
        }
        else if (httpRes.statusCode() == 404) {
        }
        else if (httpRes.statusCode() == 405) {
        }
        else if (httpRes.statusCode() == 406) {
        }
        else if (httpRes.statusCode() == 429) {
            res.headers = httpRes.headers().map().keySet().stream().collect(Collectors.toMap(Function.identity(), k -> httpRes.headers().allValues(k).toArray(new String[0])));
            
        }
        else if (httpRes.statusCode() == 500) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/jose+jwe")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.ObErrorResponse1 out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.ObErrorResponse1.class);
                res.obErrorResponse1 = out;
            }
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json; charset=utf-8")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.ObErrorResponse1 out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.ObErrorResponse1.class);
                res.obErrorResponse1 = out;
            }
        }

        return res;
    }
	
	
    /**
     * getInternationalPaymentConsentsConsentIdFundsConfirmation - Get International Payment Consents Funds Confirmation
    **/
    public openapisdk.models.operations.GetInternationalPaymentConsentsConsentIdFundsConfirmationResponse getInternationalPaymentConsentsConsentIdFundsConfirmation(openapisdk.models.operations.GetInternationalPaymentConsentsConsentIdFundsConfirmationRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/international-payment-consents/{ConsentId}/funds-confirmation", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        java.util.Map<String, java.util.List<String>> headers = openapisdk.utils.Utils.getHeaders(request.headers);
        if (headers != null) {
            for (java.util.Map.Entry<String, java.util.List<String>> header : headers.entrySet()) {
                for (String value : header.getValue()) {
                    req.addHeader(header.getKey(), value);
                }
            }
        }
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetInternationalPaymentConsentsConsentIdFundsConfirmationResponse res = new openapisdk.models.operations.GetInternationalPaymentConsentsConsentIdFundsConfirmationResponse() {{
            body = null;
            obWriteFundsConfirmationResponse1 = null;
            obWriteFundsConfirmationResponse1 = null;
            body = null;
            obErrorResponse1 = null;
            obErrorResponse1 = null;
            body = null;
            obErrorResponse1 = null;
            obErrorResponse1 = null;
            body = null;
            obErrorResponse1 = null;
            obErrorResponse1 = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/jose+jwe")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.ObWriteFundsConfirmationResponse1 out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.ObWriteFundsConfirmationResponse1.class);
                res.obWriteFundsConfirmationResponse1 = out;
            }
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json; charset=utf-8")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.ObWriteFundsConfirmationResponse1 out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.ObWriteFundsConfirmationResponse1.class);
                res.obWriteFundsConfirmationResponse1 = out;
            }
        }
        else if (httpRes.statusCode() == 400) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/jose+jwe")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.ObErrorResponse1 out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.ObErrorResponse1.class);
                res.obErrorResponse1 = out;
            }
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json; charset=utf-8")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.ObErrorResponse1 out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.ObErrorResponse1.class);
                res.obErrorResponse1 = out;
            }
        }
        else if (httpRes.statusCode() == 401) {
        }
        else if (httpRes.statusCode() == 403) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/jose+jwe")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.ObErrorResponse1 out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.ObErrorResponse1.class);
                res.obErrorResponse1 = out;
            }
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json; charset=utf-8")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.ObErrorResponse1 out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.ObErrorResponse1.class);
                res.obErrorResponse1 = out;
            }
        }
        else if (httpRes.statusCode() == 404) {
        }
        else if (httpRes.statusCode() == 405) {
        }
        else if (httpRes.statusCode() == 406) {
        }
        else if (httpRes.statusCode() == 429) {
            res.headers = httpRes.headers().map().keySet().stream().collect(Collectors.toMap(Function.identity(), k -> httpRes.headers().allValues(k).toArray(new String[0])));
            
        }
        else if (httpRes.statusCode() == 500) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/jose+jwe")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.ObErrorResponse1 out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.ObErrorResponse1.class);
                res.obErrorResponse1 = out;
            }
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json; charset=utf-8")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.ObErrorResponse1 out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.ObErrorResponse1.class);
                res.obErrorResponse1 = out;
            }
        }

        return res;
    }
	
	
    /**
     * getInternationalPaymentsInternationalPaymentId - Get International Payments
    **/
    public openapisdk.models.operations.GetInternationalPaymentsInternationalPaymentIdResponse getInternationalPaymentsInternationalPaymentId(openapisdk.models.operations.GetInternationalPaymentsInternationalPaymentIdRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/international-payments/{InternationalPaymentId}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        java.util.Map<String, java.util.List<String>> headers = openapisdk.utils.Utils.getHeaders(request.headers);
        if (headers != null) {
            for (java.util.Map.Entry<String, java.util.List<String>> header : headers.entrySet()) {
                for (String value : header.getValue()) {
                    req.addHeader(header.getKey(), value);
                }
            }
        }
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetInternationalPaymentsInternationalPaymentIdResponse res = new openapisdk.models.operations.GetInternationalPaymentsInternationalPaymentIdResponse() {{
            body = null;
            obWriteInternationalResponse5 = null;
            obWriteInternationalResponse5 = null;
            body = null;
            obErrorResponse1 = null;
            obErrorResponse1 = null;
            body = null;
            obErrorResponse1 = null;
            obErrorResponse1 = null;
            body = null;
            obErrorResponse1 = null;
            obErrorResponse1 = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/jose+jwe")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.ObWriteInternationalResponse5 out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.ObWriteInternationalResponse5.class);
                res.obWriteInternationalResponse5 = out;
            }
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json; charset=utf-8")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.ObWriteInternationalResponse5 out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.ObWriteInternationalResponse5.class);
                res.obWriteInternationalResponse5 = out;
            }
        }
        else if (httpRes.statusCode() == 400) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/jose+jwe")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.ObErrorResponse1 out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.ObErrorResponse1.class);
                res.obErrorResponse1 = out;
            }
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json; charset=utf-8")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.ObErrorResponse1 out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.ObErrorResponse1.class);
                res.obErrorResponse1 = out;
            }
        }
        else if (httpRes.statusCode() == 401) {
        }
        else if (httpRes.statusCode() == 403) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/jose+jwe")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.ObErrorResponse1 out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.ObErrorResponse1.class);
                res.obErrorResponse1 = out;
            }
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json; charset=utf-8")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.ObErrorResponse1 out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.ObErrorResponse1.class);
                res.obErrorResponse1 = out;
            }
        }
        else if (httpRes.statusCode() == 404) {
        }
        else if (httpRes.statusCode() == 405) {
        }
        else if (httpRes.statusCode() == 406) {
        }
        else if (httpRes.statusCode() == 429) {
            res.headers = httpRes.headers().map().keySet().stream().collect(Collectors.toMap(Function.identity(), k -> httpRes.headers().allValues(k).toArray(new String[0])));
            
        }
        else if (httpRes.statusCode() == 500) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/jose+jwe")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.ObErrorResponse1 out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.ObErrorResponse1.class);
                res.obErrorResponse1 = out;
            }
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json; charset=utf-8")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.ObErrorResponse1 out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.ObErrorResponse1.class);
                res.obErrorResponse1 = out;
            }
        }

        return res;
    }
	
}