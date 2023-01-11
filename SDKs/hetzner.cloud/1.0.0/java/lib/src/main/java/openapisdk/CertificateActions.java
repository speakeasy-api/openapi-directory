package openapisdk;

import openapisdk.utils.HTTPClient;
import openapisdk.utils.HTTPRequest;
import java.net.http.HttpResponse;
import com.fasterxml.jackson.databind.ObjectMapper;
import java.nio.charset.StandardCharsets;
import org.apache.http.NameValuePair;

public class CertificateActions {
	private HTTPClient _defaultClient;
	private HTTPClient _securityClient;
	private String _serverUrl;
	private String _language;
	private String _sdkVersion;
	private String _genVersion;

	public CertificateActions(HTTPClient defaultClient, HTTPClient securityClient, String serverUrl, String language, String sdkVersion, String genVersion) {
		this._defaultClient = defaultClient;
		this._securityClient = securityClient;
		this._serverUrl = serverUrl;
		this._language = language;
		this._sdkVersion = sdkVersion;
		this._genVersion = genVersion;
	}
	
	
    /**
     * getCertificatesIdActions - Get all Actions for a Certificate
     *
     * Returns all Action objects for a Certificate. You can sort the results by using the `sort` URI parameter, and filter them with the `status` parameter.
     * 
     * Only type `managed` Certificates can have Actions. For type `uploaded` Certificates the `actions` key will always contain an empty array.
     * 
    **/
    public openapisdk.models.operations.GetCertificatesIdActionsResponse getCertificatesIdActions(openapisdk.models.operations.GetCertificatesIdActionsRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/certificates/{id}/actions", request.pathParams);
        
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

        openapisdk.models.operations.GetCertificatesIdActionsResponse res = new openapisdk.models.operations.GetCertificatesIdActionsResponse() {{
            actionsResponse = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.GetCertificatesIdActionsActionsResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.GetCertificatesIdActionsActionsResponse.class);
                res.actionsResponse = out;
            }
        }

        return res;
    }
	
	
    /**
     * getCertificatesIdActionsActionId - Get an Action for a Certificate
     *
     * Returns a specific Action for a Certificate. Only type `managed` Certificates have Actions.
    **/
    public openapisdk.models.operations.GetCertificatesIdActionsActionIdResponse getCertificatesIdActionsActionId(openapisdk.models.operations.GetCertificatesIdActionsActionIdRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/certificates/{id}/actions/{action_id}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetCertificatesIdActionsActionIdResponse res = new openapisdk.models.operations.GetCertificatesIdActionsActionIdResponse() {{
            actionResponse = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.GetCertificatesIdActionsActionIdActionResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.GetCertificatesIdActionsActionIdActionResponse.class);
                res.actionResponse = out;
            }
        }

        return res;
    }
	
	
    /**
     * postCertificatesIdActionsRetry - Retry Issuance or Renewal
     *
     * Retry a failed Certificate issuance or renewal.
     * 
     * Only applicable if the type of the Certificate is `managed` and the issuance or renewal status is `failed`.
     * 
     * #### Call specific error codes
     * 
     * | Code                                                    | Description                                                               |
     * |---------------------------------------------------------|---------------------------------------------------------------------------|
     * | `caa_record_does_not_allow_ca`                          | CAA record does not allow certificate authority                           |
     * | `ca_dns_validation_failed`                              | Certificate Authority: DNS validation failed                              |
     * | `ca_too_many_authorizations_failed_recently`            | Certificate Authority: Too many authorizations failed recently            |
     * | `ca_too_many_certificates_issued_for_registered_domain` | Certificate Authority: Too many certificates issued for registered domain |
     * | `ca_too_many_duplicate_certificates`                    | Certificate Authority: Too many duplicate certificates                    |
     * | `could_not_verify_domain_delegated_to_zone`             | Could not verify domain delegated to zone                                 |
     * | `dns_zone_not_found`                                    | DNS zone not found                                                        |
     * | `dns_zone_is_secondary_zone`                            | DNS zone is a secondary zone                                              |
     * 
    **/
    public openapisdk.models.operations.PostCertificatesIdActionsRetryResponse postCertificatesIdActionsRetry(openapisdk.models.operations.PostCertificatesIdActionsRetryRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/certificates/{id}/actions/retry", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.PostCertificatesIdActionsRetryResponse res = new openapisdk.models.operations.PostCertificatesIdActionsRetryResponse() {{
            actionResponse = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 201) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.PostCertificatesIdActionsRetryActionResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.PostCertificatesIdActionsRetryActionResponse.class);
                res.actionResponse = out;
            }
        }

        return res;
    }
	
}