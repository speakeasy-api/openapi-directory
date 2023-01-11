package openapisdk;

import openapisdk.utils.HTTPClient;
import openapisdk.utils.HTTPRequest;
import java.net.http.HttpResponse;
import com.fasterxml.jackson.databind.ObjectMapper;
import java.nio.charset.StandardCharsets;
import org.apache.http.NameValuePair;

public class Keys {
	private HTTPClient _defaultClient;
	private HTTPClient _securityClient;
	private String _serverUrl;
	private String _language;
	private String _sdkVersion;
	private String _genVersion;

	public Keys(HTTPClient defaultClient, HTTPClient securityClient, String serverUrl, String language, String sdkVersion, String genVersion) {
		this._defaultClient = defaultClient;
		this._securityClient = securityClient;
		this._serverUrl = serverUrl;
		this._language = language;
		this._sdkVersion = sdkVersion;
		this._genVersion = genVersion;
	}
	
	
    /**
     * checkKeyUsability - checkKeyUsability
     *
     * Currently returns whether the key is useable via the `available` property.
     * You may Use this method to discover if the key is useable before making
     * further requests.
     * 
     * When the `user_token` is not provided, this API returns public information on key. 
     * 
     * ### Testing
     * 
     * To test your implementation of our API, you may use the following test keys.
     * 
     * - **iddqd** Availability will return as `true`
     * - **idkfa** Availability will return as `false`
     * 
    **/
    public openapisdk.models.operations.CheckKeyUsabilityResponse checkKeyUsability(openapisdk.models.operations.CheckKeyUsabilityRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/keys/{key}", request.pathParams);
        
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

        openapisdk.models.operations.CheckKeyUsabilityResponse res = new openapisdk.models.operations.CheckKeyUsabilityResponse() {{
            keyUsabilityResponseSchema = null;
            addressLookupResponseSchema = null;
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
                openapisdk.models.shared.KeyUsabilityResponseSchema out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.KeyUsabilityResponseSchema.class);
                res.keyUsabilityResponseSchema = out;
            }
        }
        else if (httpRes.statusCode() == 400) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.AddressLookupResponseSchema out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.AddressLookupResponseSchema.class);
                res.addressLookupResponseSchema = out;
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
	
	
    /**
     * downloadUsageHistory - downloadUsageHistory
     *
     * Returns a CSV download of lookups performed and associated information.
     * 
     * Note that the `Content-Type` returned will be CSV (text/csv). For a non 200
     * response, the `Content-Type` will revert to JSON with the error code and
     * message embedded.
     * 
     * This method requires a `user_token`, which can be found on your [accounts page](https://ideal-postcodes.co.uk/account).
     * 
     * A maximum interval of 90 days can be provided for analysis. If no start or end date is provided, the last 21 days will be used as the default interval.
     * 
     * ### GDPR Update
     * 
     * After May 2018, the API will begin to redact IP Address, Search Term and URL data that is older than 28 days from our stores on a weekly basis as part of our new data protection strategy. This means the aforementioned data points will no longer be retrievable from this API if it is more than 28 days old.
     * 
     * Reach out to us by [mail](<mailto:support@ideal-postcodes.co.uk>) or [chat](https://chat.ideal-postcodes.co.uk) if you would like to modify this 28 day window or prefer this data not be collected at all.
     * 
    **/
    public openapisdk.models.operations.DownloadUsageHistoryResponse downloadUsageHistory(openapisdk.models.operations.DownloadUsageHistoryRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/keys/{key}/lookups", request.pathParams);
        
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

        openapisdk.models.operations.DownloadUsageHistoryResponse res = new openapisdk.models.operations.DownloadUsageHistoryResponse() {{
            downloadUsageHistory200TextCsvString = null;
            errorResponseSchema = null;
            errorResponseSchema = null;
            errorResponseSchema = null;
            errorResponseSchema = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/csv")) {
                String out = new String(httpRes.body(), StandardCharsets.UTF_8);
                res.downloadUsageHistory200TextCsvString = out;
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
     * monitorKeyUsage - monitorKeyUsage
     *
     * Reports the number of lookups consumed on a key for a range of days.
     * 
     * This method requires a `user_token`, which can be found on your [accounts page](https://ideal-postcodes.co.uk/account).
     * 
     * A maximum interval of 90 days can be provided for analysis. If no start or
     * end date is provided, the last 21 days will be used as the default interval.
     * 
    **/
    public openapisdk.models.operations.MonitorKeyUsageResponse monitorKeyUsage(openapisdk.models.operations.MonitorKeyUsageRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/keys/{key}/usage", request.pathParams);
        
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

        openapisdk.models.operations.MonitorKeyUsageResponse res = new openapisdk.models.operations.MonitorKeyUsageResponse() {{
            keyUsageResponseSchema = null;
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
                openapisdk.models.shared.KeyUsageResponseSchema out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.KeyUsageResponseSchema.class);
                res.keyUsageResponseSchema = out;
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