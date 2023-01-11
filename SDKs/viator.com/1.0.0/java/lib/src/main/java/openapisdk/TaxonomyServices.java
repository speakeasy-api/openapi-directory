package openapisdk;

import openapisdk.utils.HTTPClient;
import openapisdk.utils.HTTPRequest;
import java.net.http.HttpResponse;
import com.fasterxml.jackson.databind.ObjectMapper;
import java.nio.charset.StandardCharsets;
import openapisdk.utils.SerializedBody;
import org.apache.http.NameValuePair;

public class TaxonomyServices {
	private HTTPClient _defaultClient;
	private HTTPClient _securityClient;
	private String _serverUrl;
	private String _language;
	private String _sdkVersion;
	private String _genVersion;

	public TaxonomyServices(HTTPClient defaultClient, HTTPClient securityClient, String serverUrl, String language, String sdkVersion, String genVersion) {
		this._defaultClient = defaultClient;
		this._securityClient = securityClient;
		this._serverUrl = serverUrl;
		this._language = language;
		this._sdkVersion = sdkVersion;
		this._genVersion = genVersion;
	}
	
	
    /**
     * taxonomyAttractions - /taxonomy/attractions
     *
     * Get attractions
     * - Retrieves a list of attractions (things like the Eiffel Tower or Empire State Building) and their associated unique numeric identifiers
     * - The attraction's identifier (`seoId`) can be used as a means of searching for available products; for example, in the [/search/products](#operation/searchProducts) service.
     * 
    **/
    public openapisdk.models.operations.TaxonomyAttractionsResponse taxonomyAttractions(openapisdk.models.operations.TaxonomyAttractionsRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/taxonomy/attractions");
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        java.util.Map<String, java.util.List<String>> headers = openapisdk.utils.Utils.getHeaders(request.headers);
        if (headers != null) {
            for (java.util.Map.Entry<String, java.util.List<String>> header : headers.entrySet()) {
                for (String value : header.getValue()) {
                    req.addHeader(header.getKey(), value);
                }
            }
        }
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.TaxonomyAttractionsResponse res = new openapisdk.models.operations.TaxonomyAttractionsResponse() {{
            taxonomyAttractions200ApplicationJSONObject = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.TaxonomyAttractions200ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.TaxonomyAttractions200ApplicationJson.class);
                res.taxonomyAttractions200ApplicationJSONObject = out;
            }
        }

        return res;
    }
	
	
    /**
     * taxonomyCategories - /taxonomy/categories
     *
     * Get all product categories
     * - Retrieves a list of product categories for a destination that can be used as a means of filtering when searching for products using the [/search/products](/#operation/searchProducts) service
     * - This service can be used to get a list of all categories and subcategories for a destination by including its `destId`, or you can omit the `destId` to get a list of all categories and subcategories
     * - **Note:** If no `destId` is passed, `productCount` and `thumbnailURL` will be `null` as they are destination-specific fields
     * 
    **/
    public openapisdk.models.operations.TaxonomyCategoriesResponse taxonomyCategories(openapisdk.models.operations.TaxonomyCategoriesRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/taxonomy/categories");
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        java.util.List<NameValuePair> queryParams = openapisdk.utils.Utils.getQueryParams(request.queryParams);
        if (queryParams != null) {
            for (NameValuePair queryParam : queryParams) {
                req.addQueryParam(queryParam);
            }
        }
        java.util.Map<String, java.util.List<String>> headers = openapisdk.utils.Utils.getHeaders(request.headers);
        if (headers != null) {
            for (java.util.Map.Entry<String, java.util.List<String>> header : headers.entrySet()) {
                for (String value : header.getValue()) {
                    req.addHeader(header.getKey(), value);
                }
            }
        }
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.TaxonomyCategoriesResponse res = new openapisdk.models.operations.TaxonomyCategoriesResponse() {{
            taxonomyCategories200ApplicationJSONObject = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.TaxonomyCategories200ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.TaxonomyCategories200ApplicationJson.class);
                res.taxonomyCategories200ApplicationJSONObject = out;
            }
        }

        return res;
    }
	
	
    /**
     * taxonomyDestinations - /taxonomy/destinations
     *
     * Get details of all destinations supported by this API
     * - Retrieves all the country taxonomy/city nodes as a flat list
     * - Returns a complete list of Viator destinations, including destination names and parent identifiers
     * - Used to provide navigation through drill down lists or combo boxes
     * 
    **/
    public openapisdk.models.operations.TaxonomyDestinationsResponse taxonomyDestinations(openapisdk.models.operations.TaxonomyDestinationsRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/taxonomy/destinations");
        
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
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.TaxonomyDestinationsResponse res = new openapisdk.models.operations.TaxonomyDestinationsResponse() {{
            taxonomyDestinations200ApplicationJSONObject = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.TaxonomyDestinations200ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.TaxonomyDestinations200ApplicationJson.class);
                res.taxonomyDestinations200ApplicationJSONObject = out;
            }
        }

        return res;
    }
	
}