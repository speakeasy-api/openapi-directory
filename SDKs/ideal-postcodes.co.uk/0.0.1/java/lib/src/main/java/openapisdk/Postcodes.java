package openapisdk;

import openapisdk.utils.HTTPClient;
import openapisdk.utils.HTTPRequest;
import java.net.http.HttpResponse;
import com.fasterxml.jackson.databind.ObjectMapper;
import java.nio.charset.StandardCharsets;
import org.apache.http.NameValuePair;

public class Postcodes {
	private HTTPClient _defaultClient;
	private HTTPClient _securityClient;
	private String _serverUrl;
	private String _language;
	private String _sdkVersion;
	private String _genVersion;

	public Postcodes(HTTPClient defaultClient, HTTPClient securityClient, String serverUrl, String language, String sdkVersion, String genVersion) {
		this._defaultClient = defaultClient;
		this._securityClient = securityClient;
		this._serverUrl = serverUrl;
		this._language = language;
		this._sdkVersion = sdkVersion;
		this._genVersion = genVersion;
	}
	
	
    /**
     * postcodeToAddresses - postcodeToAddresses
     *
     * Returns the complete list of addresses for a postcode.
     * 
     * Postcode searches are space and case insensitive.
     * 
     * ### Postcode not found
     * 
     * Please note: For postcodes that do not exist, your key is not charged, the API returns a 404 response with a response body
     * 
     * ```
     * {
     *   "code": 4040,
     *   "message": "Postcode not found"
     * }
     * ```
     * 
     * ### Testing
     * 
     * To test your implementation of our API we have a range of test postcodes that yield both successful and unsuccessful responses to your request. They are the following:
     * 
     * - `ID1 1QD` Returns a successful postcode lookup response `2000`
     * - `ID1 KFA` Returns "postcode not found", error `4040`
     * - `ID1 CLIP` Returns "no lookups remaining", error `4020`
     * - `ID1 CHOP` Returns "daily (or individual) lookup limit breached", error `4021`
     * 
     * Test requests will undergo usual authentication and restriction rules (individual and daily lookup limits) to surface any problems you may have during implementation. However, it will not count towards a postcode lookup on your key.
     * 
     * ### Multiple Residence Dataset & Pagination
     * 
     * For keys which use the Multiple Residence dataset, there are a small number of postcodes which yield more than Royal Mail's maximum allowed return (of 100 addresses) per request. Multiple Residence data users have the option of paginating postcode queries if the limit is reached.
     * 
     * #### Multiple Residence: Additional Query Parameters
     * 
     * | Property | Description                                                                          |
     * | -------- | ------------------------------------------------------------------------------------ |
     * | `page`   | 0 indexed indicator of the page of results to receive. Defaults to `0`               |
     * 
     * #### Multiple Residence: Additional Response Fields
     * 
     * | Property | Description                                                                               |
     * | -------- | ----------------------------------------------------------------------------------------- |
     * | `page`   | `number` Indicates current page number                                                    |
     * | `total`  | `number` Indicates the maximum number of delivery points plus residences at this postcode |
     * | `limit`  | `number` Maximum number of results per request. Fixed at 100 for this method              |
     * 
     * ### Pricing
     * 
     * Per lookup charges are applied. Empty responses are not charged.
     * 
     * ### Data Source
     * 
     * Royal Mail (Postcode Address File), Ordnance Survey (Code-Point Open).
     * 
    **/
    public openapisdk.models.operations.PostcodeToAddressesResponse postcodeToAddresses(openapisdk.models.operations.PostcodeToAddressesRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/postcodes/{postcode}", request.pathParams);
        
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

        openapisdk.models.operations.PostcodeToAddressesResponse res = new openapisdk.models.operations.PostcodeToAddressesResponse() {{
            postcodeToAddressResponseSchema = null;
            errorResponseSchema = null;
            addressLookupResponseSchema = null;
            addressLookupResponseSchema = null;
            addressLookupResponseSchema = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.PostcodeToAddressResponseSchema out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.PostcodeToAddressResponseSchema.class);
                res.postcodeToAddressResponseSchema = out;
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
                openapisdk.models.shared.AddressLookupResponseSchema out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.AddressLookupResponseSchema.class);
                res.addressLookupResponseSchema = out;
            }
        }
        else if (httpRes.statusCode() == 404) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.AddressLookupResponseSchema out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.AddressLookupResponseSchema.class);
                res.addressLookupResponseSchema = out;
            }
        }
        else if (httpRes.statusCode() == 500) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.AddressLookupResponseSchema out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.AddressLookupResponseSchema.class);
                res.addressLookupResponseSchema = out;
            }
        }
        else if (httpRes.statusCode() == 503) {
        }

        return res;
    }
	
}