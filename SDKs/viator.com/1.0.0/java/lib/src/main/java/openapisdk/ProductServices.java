package openapisdk;

import openapisdk.utils.HTTPClient;
import openapisdk.utils.HTTPRequest;
import java.net.http.HttpResponse;
import com.fasterxml.jackson.databind.ObjectMapper;
import java.nio.charset.StandardCharsets;
import openapisdk.utils.SerializedBody;
import org.apache.http.NameValuePair;

public class ProductServices {
	private HTTPClient _defaultClient;
	private HTTPClient _securityClient;
	private String _serverUrl;
	private String _language;
	private String _sdkVersion;
	private String _genVersion;

	public ProductServices(HTTPClient defaultClient, HTTPClient securityClient, String serverUrl, String language, String sdkVersion, String genVersion) {
		this._defaultClient = defaultClient;
		this._securityClient = securityClient;
		this._serverUrl = serverUrl;
		this._language = language;
		this._sdkVersion = sdkVersion;
		this._genVersion = genVersion;
	}
	
	
    /**
     * availableProducts - /available/products
     *
     * Find products that are available
     * 
     *  This endpoint returns available products filtered by product code, date range or number of adult travelers
     * 
     * 
     *  - **Note**: Availability data is limited to a period of **12 months** into the future from the present time on the production server and **6 months** on the sandbox server. 
     *  
     * 
    **/
    public openapisdk.models.operations.AvailableProductsResponse availableProducts(openapisdk.models.operations.AvailableProductsRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/available/products");
        
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

        openapisdk.models.operations.AvailableProductsResponse res = new openapisdk.models.operations.AvailableProductsResponse() {{
            availableProducts200ApplicationJSONObject = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.AvailableProducts200ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.AvailableProducts200ApplicationJson.class);
                res.availableProducts200ApplicationJSONObject = out;
            }
        }

        return res;
    }
	
	
    /**
     * product - /product
     *
     * Get product information
     * This service provides all product details required for a product display page, as well as information required for price checks and booking, such as: 
     * - age bands
     * - tour grades
     * - language options 
     * - booking questions
     * - hotel pickup flags
     * 
     * **currencyCode (in query):** 
     * - use this parameter to specify the currency in which product pricing should be displayed
     * - the default currency is the currency of your account; or, if you have multi-currency enabled, US dollars
     * - "multi-currency" allows pricing and booking in various currencies - please speak to the business development team if you'd like this enabled
     * - **Note**: you will be billed in the currency in which the booking was made
     * 
     * **Product photos**
     * 
     * &lt;mark&gt;**&lt;u&gt;Update 13 Feb 2020&lt;/u&gt;**: All supplier-provided photos for the selected product are now available in the `productPhotos` array in this endpoint's response. Previously, only two supplier-provided photos were available – one in the `productPhotos` array and one in `thumbnailHiResURL`. &lt;/mark&gt;
     * 
     * **Videos**
     * 
     * - Videos are no longer provided via this API
     * 
    **/
    public openapisdk.models.operations.ProductResponse product(openapisdk.models.operations.ProductRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/product");
        
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

        openapisdk.models.operations.ProductResponse res = new openapisdk.models.operations.ProductResponse() {{
            product200ApplicationJSONObject = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.Product200ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.Product200ApplicationJson.class);
                res.product200ApplicationJSONObject = out;
            }
        }

        return res;
    }
	
	
    /**
     * productPhotos - /product/photos
     *
     * Get photos of a product submitted by users
    **/
    public openapisdk.models.operations.ProductPhotosResponse productPhotos(openapisdk.models.operations.ProductPhotosRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/product/photos");
        
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

        openapisdk.models.operations.ProductPhotosResponse res = new openapisdk.models.operations.ProductPhotosResponse() {{
            productPhotos200ApplicationJSONObject = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.ProductPhotos200ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.ProductPhotos200ApplicationJson.class);
                res.productPhotos200ApplicationJSONObject = out;
            }
        }

        return res;
    }
	
	
    /**
     * productReviews - /product/reviews
     *
     * Get user-submitted reviews of a product
     * 
     * **Note**: 
     * - The number of reviews that you can obtain via this service will depend on whether your account is limited in terms of the number of reviews you are entitled to receive. 
     * - The number of reviews available through this service is given in the `reviewCount` element in the response from [/product](#operation/product)
     * - Please speak to your account manager if you wish to receive more reviews. If your account is not limited, you will be able to receive all available reviews for this product.
     * - Only reviews in the language specified in the Accept-Language request header will be returned
     * 
     * **Example:** "Get the first three reviews for product `5010SYDNEY` sorted by rating in ascending order":
     * 
     * ```javascript
     * https://viatorapi.sandbox.viator.com/service/product/reviews?sortOrder=REVIEW_RATING_A&amp;topX=1-3&amp;code=5010SYDNEY&amp;showUnavailable=false
     * ```
     * 
    **/
    public openapisdk.models.operations.ProductReviewsResponse productReviews(openapisdk.models.operations.ProductReviewsRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/product/reviews");
        
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

        openapisdk.models.operations.ProductReviewsResponse res = new openapisdk.models.operations.ProductReviewsResponse() {{
            productReviews200ApplicationJSONObject = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.ProductReviews200ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.ProductReviews200ApplicationJson.class);
                res.productReviews200ApplicationJSONObject = out;
            }
        }

        return res;
    }
	
	
    /**
     * searchFreetext - /search/freetext
     *
     * Free text search
     * - This service provides a **free text search across all products and destinations**
     * - The `text` parameter is required
     * - **Note:** results include a type indicator (`type`) that you can use to display each result appropriately based on its content
     * 
    **/
    public openapisdk.models.operations.SearchFreetextResponse searchFreetext(openapisdk.models.operations.SearchFreetextRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/search/freetext");
        
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

        openapisdk.models.operations.SearchFreetextResponse res = new openapisdk.models.operations.SearchFreetextResponse() {{
            searchFreetext200ApplicationJSONObject = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.SearchFreetext200ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.SearchFreetext200ApplicationJson.class);
                res.searchFreetext200ApplicationJSONObject = out;
            }
        }

        return res;
    }
	
	
    /**
     * searchProducts - /search/products
     *
     * Search for products
     * This service is used to search for products based on various criteria; such as:
     * * the destination (locale) in which it operates
     * * its association with a tourist attraction
     * * its category and/or subcategory
     * * the time period during which it operates
     * The fields you include in the request body for this service determine the kind of search that will be performed.
     * 
     * **&lt;u&gt;Note&lt;/u&gt;**: 
     * 
     * * You can search **EITHER** by destination (`destId`) **OR** by attraction-link (`seoId`), but not both.
     * * The destination identifier (`destId`) can be retrieved from the [/taxonomy/destinations](#operation/taxonomyDestinations) service.
     * * The category (`catId`) and subcategory (`subCatId`) identifiers can be retrieved from the [/taxonomy/categories](#operation/taxonomyCategories) service.
     * * The attraction identifier (`seoId`) can be retrieved from the [/taxonomy/attractions](#operation/taxonomyAttractions) service.
     * 
     * **&lt;u&gt;Examples&lt;/u&gt;**:
     * 
     * **Search by destination**:
     * 
     * * E.g., "Top ten highest-rated yoga classes operating in Las Vegas:
     * ```javascript
     * {
     *     "destId": 684,
     *     "subCatId": 26052,
     *     "sortOrder": "REVIEW_AVG_RATING_D",
     *     "topX": "1-3"
     * }
     * ```
     * 
     * **Search by attraction-link**:
     * 
     * * E.g., "Products related to Everglades National Park operating 21-26 May 2019 in order of descending price":
     * ```javascript
     * {
     *     "seoId": 1115,
     *     "sortOrder": "PRICE_FROM_D",
     *     "topX": "1-3"
     * }
     * ```
     * 
     * **&lt;u&gt;'Freesale-only' merchants&lt;/u&gt;**:
     * - Merchants with a "freesale only" key *must* pass `startDate` and `endDate` to this service to retrieve a list of all available 'freesale' products (and 'freesale/on-request' products that are currently 'freesale') in the destination. 
     * - E.g., the following request body will result in 'freesale/on-request' products within their on-request period not appearing in the results from this service. 
     * ```javascript
     * {
     *     "destId": 684,
     *     "startDate": "2020-02-21",
     *     "endDate": "2020-03-21",
     *     "sortOrder": "PRICE_FROM_D",
     *     "topX": "1-3"
     * }
     * ```
     * 
     * - If `startDate` and `endDate` are omitted, 'freesale/on-request' products that are presently within their on-request period may appear to be available to customers, but won't be available at the time of booking.
     * 
    **/
    public openapisdk.models.operations.SearchProductsResponse searchProducts(openapisdk.models.operations.SearchProductsRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/search/products");
        
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

        openapisdk.models.operations.SearchProductsResponse res = new openapisdk.models.operations.SearchProductsResponse() {{
            searchProducts200ApplicationJSONObject = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.SearchProducts200ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.SearchProducts200ApplicationJson.class);
                res.searchProducts200ApplicationJSONObject = out;
            }
        }

        return res;
    }
	
	
    /**
     * searchProductsCodes - /search/products/codes
     *
     * Search by product code
     * - This service returns an array of products given an array of product identifiers that is useful for wishlist / shopping cart / user account display 
     * - **Note**: requesting an inactive or non-existent product code will return `0`, `null` and blank values (as per the 'invalid_product' example).
     * 
    **/
    public openapisdk.models.operations.SearchProductsCodesResponse searchProductsCodes(openapisdk.models.operations.SearchProductsCodesRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/search/products/codes");
        
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

        openapisdk.models.operations.SearchProductsCodesResponse res = new openapisdk.models.operations.SearchProductsCodesResponse() {{
            searchProductsCodes200ApplicationJSONObject = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.SearchProductsCodes200ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.SearchProductsCodes200ApplicationJson.class);
                res.searchProductsCodes200ApplicationJSONObject = out;
            }
        }

        return res;
    }
	
}