package openapisdk;

import openapisdk.utils.HTTPClient;
import openapisdk.utils.HTTPRequest;
import java.net.http.HttpResponse;
import com.fasterxml.jackson.databind.ObjectMapper;
import java.nio.charset.StandardCharsets;
import org.apache.http.NameValuePair;

public class Udprn {
	private HTTPClient _defaultClient;
	private HTTPClient _securityClient;
	private String _serverUrl;
	private String _language;
	private String _sdkVersion;
	private String _genVersion;

	public Udprn(HTTPClient defaultClient, HTTPClient securityClient, String serverUrl, String language, String sdkVersion, String genVersion) {
		this._defaultClient = defaultClient;
		this._securityClient = securityClient;
		this._serverUrl = serverUrl;
		this._language = language;
		this._sdkVersion = sdkVersion;
		this._genVersion = genVersion;
	}
	
	
    /**
     * lookupUdprn - lookupUDPRN
     *
     * Returns an address identified via its Unique Delivery Point Reference 
     * Number (UDPRN).
     * 
     * You may find it useful to store UDPRN information as it can be used to 
     * retrieve the most recent information for an address. It can also be used 
     * to test for a "decommissioned" address.
     * 
     * UDPRNs are an eight digit unique numeric code (e.g. 25962203) for any 
     * premise on the Postcode Address File. It's essentially a unique identifier 
     * for every address in the UK that Royal Mail has in its database.
     * 
     * ### Testing
     * 
     * To test your implementation of our API we have a range of test UDPRNs 
     * that yield both successful and unsuccessful responses to your request. 
     * They are the following
     * 
     * - <code>0</code> Returns a successful UDPRN lookup response <code>2000</code>
     * - <code>-1</code> Returns "UDPRN not found", error <code>4044</code>
     * - <code>-2</code> Returns "no lookups remaining", error <code>4020</code>
     * - <code>-3</code> Returns "daily (or individual) lookup limit breached", error <code>4021</code>
     * 
     * Test requests will undergo usual authentication and restriction rules (
     * individual and daily lookup limits) to surface any problems you may have 
     * during implementation. However, it will not count towards a postcode 
     * lookup on your key.
     * 
     * ### Pricing
     * 
     * Per lookup charges apply. Empty responses are not charged.
     * 
     * ### Data Source
     * 
     * Royal Mail (Postcode Address File), Ordnance Survey (Code-Point Open)
     * 
    **/
    public openapisdk.models.operations.LookupUdprnResponse lookupUdprn(openapisdk.models.operations.LookupUdprnRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/udprn/{udprn}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        java.util.List<NameValuePair> queryParams = openapisdk.utils.Utils.getQueryParams(request.queryParams);
        if (queryParams != null) {
            for (NameValuePair queryParam : queryParams) {
                req.addQueryParam(queryParam);
            }
        }
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.LookupUdprnResponse res = new openapisdk.models.operations.LookupUdprnResponse() {{
            addressLookupResponseSchema = null;
            errorResponseSchema = null;
            errorResponseSchema = null;
            errorResponseSchema = null;
            errorResponseSchema = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.AddressLookupResponseSchema out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.AddressLookupResponseSchema.class);
                res.addressLookupResponseSchema = out;
            }
        }
        else if (httpRes.statusCode() == 400) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.ErrorResponseSchema out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.ErrorResponseSchema.class);
                res.errorResponseSchema = out;
            }
        }
        else if (httpRes.statusCode() == 402) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.ErrorResponseSchema out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.ErrorResponseSchema.class);
                res.errorResponseSchema = out;
            }
        }
        else if (httpRes.statusCode() == 404) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.ErrorResponseSchema out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.ErrorResponseSchema.class);
                res.errorResponseSchema = out;
            }
        }
        else if (httpRes.statusCode() == 500) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.ErrorResponseSchema out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.ErrorResponseSchema.class);
                res.errorResponseSchema = out;
            }
        }
        else if (httpRes.statusCode() == 503) {
        }

        return res;
    }
	
}