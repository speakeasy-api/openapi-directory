package openapisdk;

import openapisdk.utils.HTTPClient;
import openapisdk.utils.HTTPRequest;
import java.net.http.HttpResponse;
import com.fasterxml.jackson.databind.ObjectMapper;
import java.nio.charset.StandardCharsets;
import org.apache.http.NameValuePair;

public class Addresses {
	private HTTPClient _defaultClient;
	private HTTPClient _securityClient;
	private String _serverUrl;
	private String _language;
	private String _sdkVersion;
	private String _genVersion;

	public Addresses(HTTPClient defaultClient, HTTPClient securityClient, String serverUrl, String language, String sdkVersion, String genVersion) {
		this._defaultClient = defaultClient;
		this._securityClient = securityClient;
		this._serverUrl = serverUrl;
		this._language = language;
		this._sdkVersion = sdkVersion;
		this._genVersion = genVersion;
	}
	
	
    /**
     * addressSearch - addressSearch
     *
     * Returns a list of addresses that match the query ordered by relevance score.
     * This query accepts an optional limit and page query (defaults to 10 and 0 respectively).
     * 
     * If a valid postcode is passed as the query string, the entire address list
     * for that postcode is returned as the result. Note, in these cases, limit
     * parameter is ignored and fixed at 100. If your key is configured to return
     * Multiple Residence data, you may need to query more pages to return the
     * entire list as more than 100 delivery points or residences may be returned.
     * 
     * ### Testing
     * 
     * - **ID1 1QD** Returns a successful query response `2000`
     * - **ID1 KFA** Returns an empty query response `2000`
     * - **ID1 CLIP** Returns "no lookups remaining" error `4020`
     * - **ID1 CHOP** Returns "daily (or individual) lookup limit breached" error `4021`
     * 
     * Test requests will undergo usual authentication and restriction rules (individual and daily lookup limits) to surface any problems you may have during implementation. However, it will not count towards a postcode lookup on your key.
     * 
     * ### Notes
     * 
     * This is not an address autocomplete method. Each request that returns an address incurs a lookup charge.
     * 
     * If a valid postcode is passed as the query string, the entire address list for that postcode is passed as a result. Note, in these cases, limit and page parameters are ignored.
     * 
     * ### Pricing
     * 
     * Per lookup charges apply. Queries which find no match are not charged.
     * 
     * ### Data Source
     * 
     * Royal Mail (Postcode Address File), Ordnance Survey (Code-Point Open).
     * 
    **/
    public openapisdk.models.operations.AddressSearchResponse addressSearch(openapisdk.models.operations.AddressSearchRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/addresses");
        
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

        openapisdk.models.operations.AddressSearchResponse res = new openapisdk.models.operations.AddressSearchResponse() {{
            addressSearchResponseSchema = null;
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
                openapisdk.models.shared.AddressSearchResponseSchema out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.AddressSearchResponseSchema.class);
                res.addressSearchResponseSchema = out;
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
	
	
    /**
     * updrnToAddress - updrnToAddress
     *
     * ### Returns an address identified via its UDPRN.
     * 
     * You may find it useful to store UDPRN information as it can be used to retrieve the most recent information for an address. It can also be used to test for a "decommissioned" address.
     * 
     * ### Testing
     * 
     * To test your implementation of our API we have a range of test UDPRNs that yield both successful and unsuccessful responses to your request. They are the following:
     * 
     * - `0` Returns a successful UDPRN lookup response `2000`
     * - `-1` Returns "UDPRN not found", error `4044`
     * - `-2` Returns "no lookups remaining", error `4020`
     * - `-3` Returns "daily (or individual) lookup limit breached", error `4021`
     * 
     * Test requests will undergo usual authentication and restriction rules (individual and daily lookup limits) to surface any problems you may have during implementation. However, it will not count towards a postcode lookup on your key.
     * 
     * ### Pricing
     * 
     * Per lookup charges apply. Empty responses are not charged.
     * 
     * ### Data Source
     * 
     * Royal Mail (Postcode Address File), Ordnance Survey (Code-Point Open).
     * 
    **/
    public openapisdk.models.operations.UpdrnToAddressResponse updrnToAddress(openapisdk.models.operations.UpdrnToAddressRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/addresses/{udprn}", request.pathParams);
        
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

        openapisdk.models.operations.UpdrnToAddressResponse res = new openapisdk.models.operations.UpdrnToAddressResponse() {{
            udprnToAddressResponseSchema = null;
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
                openapisdk.models.shared.UdprnToAddressResponseSchema out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.UdprnToAddressResponseSchema.class);
                res.udprnToAddressResponseSchema = out;
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