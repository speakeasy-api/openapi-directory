package openapisdk;

import openapisdk.utils.HTTPClient;
import openapisdk.utils.HTTPRequest;
import java.net.http.HttpResponse;
import com.fasterxml.jackson.databind.ObjectMapper;
import java.nio.charset.StandardCharsets;
import openapisdk.utils.SerializedBody;
import org.apache.http.NameValuePair;

public class BookingServices {
	private HTTPClient _defaultClient;
	private HTTPClient _securityClient;
	private String _serverUrl;
	private String _language;
	private String _sdkVersion;
	private String _genVersion;

	public BookingServices(HTTPClient defaultClient, HTTPClient securityClient, String serverUrl, String language, String sdkVersion, String genVersion) {
		this._defaultClient = defaultClient;
		this._securityClient = securityClient;
		this._serverUrl = serverUrl;
		this._language = language;
		this._sdkVersion = sdkVersion;
		this._genVersion = genVersion;
	}
	
	
    /**
     * bookingAvailability - /booking/availability
     *
     * Get the tour-grade with the lowest price that is available for a product on each day of the specified month
     * 
     * This service:
     * - returns 
     * - useful when displaying a calendar of available tours
     * - For more information, see: [Availability services](#section/Key-concepts/Availability-services)
     * - **Notes:** 
     *   - [/booking/availability/dates](#operation/bookingAvailabilityDates) provides all availability in one call and is more suitable for calendars, etc.
     * 
     *   - Availability data is limited to a period of **12 months** into the future from the present time on the production server and **6 months** on the sandbox server. 
     * 
    **/
    public openapisdk.models.operations.BookingAvailabilityResponse bookingAvailability(openapisdk.models.operations.BookingAvailabilityRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/booking/availability");
        
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

        openapisdk.models.operations.BookingAvailabilityResponse res = new openapisdk.models.operations.BookingAvailabilityResponse() {{
            bookingAvailability200ApplicationJSONObject = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.BookingAvailability200ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.BookingAvailability200ApplicationJson.class);
                res.bookingAvailability200ApplicationJSONObject = out;
            }
        }

        return res;
    }
	
	
    /**
     * bookingAvailabilityDates - /booking/availability/dates
     *
     * Get dates on which a product is available
     * 
     * This service:
     * - retrieves all available dates for a product, excluding days it does not operate and blocked-out dates
     * - returns a multi-dimensional array of year-month -&gt; days that have any availabile tour grade or traveler mix
     * - useful to present the user with a list of dates for selection on which *this* product is available for booking
     * - **Notes**: 
     * 
     *   - The user's desired traveler mix may not be eligible for booking; these details can be displayed when you retrieve its list of tour grades
     *   - Availability data is limited to a period of **12 months** into the future from the present time on the production server and **6 months** on the sandbox server. 
     * 
    **/
    public openapisdk.models.operations.BookingAvailabilityDatesResponse bookingAvailabilityDates(openapisdk.models.operations.BookingAvailabilityDatesRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/booking/availability/dates");
        
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

        openapisdk.models.operations.BookingAvailabilityDatesResponse res = new openapisdk.models.operations.BookingAvailabilityDatesResponse() {{
            bookingAvailabilityDates200ApplicationJSONObject = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.BookingAvailabilityDates200ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.BookingAvailabilityDates200ApplicationJson.class);
                res.bookingAvailabilityDates200ApplicationJSONObject = out;
            }
        }

        return res;
    }
	
	
    /**
     * bookingAvailabilityTourgrades - /booking/availability/tourgrades
     *
     * Get the tour grades of a product that are currently available
     * 
     * This service reports:
     * - all tour grades for the specified product, on the specified day, that are available for the specified age bands
     * - the pricing breakdown and the total depending on the travel date and traveler mix
     * 
     * **Note**: Availability data is limited to a period of **12 months** into the future from the present time on the production server and **6 months** on the sandbox server. 
     * 
    **/
    public openapisdk.models.operations.BookingAvailabilityTourgradesResponse bookingAvailabilityTourgrades(openapisdk.models.operations.BookingAvailabilityTourgradesRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/booking/availability/tourgrades");
        
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

        openapisdk.models.operations.BookingAvailabilityTourgradesResponse res = new openapisdk.models.operations.BookingAvailabilityTourgradesResponse() {{
            bookingAvailabilityTourgrades200ApplicationJSONObject = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.BookingAvailabilityTourgrades200ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.BookingAvailabilityTourgrades200ApplicationJson.class);
                res.bookingAvailabilityTourgrades200ApplicationJSONObject = out;
            }
        }

        return res;
    }
	
	
    /**
     * bookingAvailabilityTourgradesPricingmatrix - /booking/availability/tourgrades/pricingmatrix
     *
     * Get a pricing matrix that includes availability and tour-grades for a product
     * 
     * Given a month, this service returns days with available tour grades only (i.e., days which have at least one tourgrade available), and the pricing matrix for that tour grade for that day.
     * 
     * - **Note**: Availability data is limited to a period of **12 months** into the future from the present time on the production server and **6 months** on the sandbox server. 
     * 
    **/
    public openapisdk.models.operations.BookingAvailabilityTourgradesPricingmatrixResponse bookingAvailabilityTourgradesPricingmatrix(openapisdk.models.operations.BookingAvailabilityTourgradesPricingmatrixRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/booking/availability/tourgrades/pricingmatrix");
        
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

        openapisdk.models.operations.BookingAvailabilityTourgradesPricingmatrixResponse res = new openapisdk.models.operations.BookingAvailabilityTourgradesPricingmatrixResponse() {{
            bookingAvailabilityTourgradesPricingmatrix200ApplicationJSONObject = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.BookingAvailabilityTourgradesPricingmatrix200ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.BookingAvailabilityTourgradesPricingmatrix200ApplicationJson.class);
                res.bookingAvailabilityTourgradesPricingmatrix200ApplicationJSONObject = out;
            }
        }

        return res;
    }
	
	
    /**
     * bookingBook - /booking/book
     *
     * Make a booking
     * 
     * For more information, see: 
     * 
     *   - [Cancellation policy](#section/Key-concepts/Cancellation-policy)
     *   - [Booking concepts](#section/Key-concepts/Booking-concepts)
     *   - [Booking process flow](#section/Common-workflows-and-data-validation/Booking-process-flow)
     *   - [Making a booking](#section/Common-workflows-and-data-validation/Making-a-booking)
     *   - [Supplier communications](#section/Key-concepts/Supplier-communications)
     * 
    **/
    public openapisdk.models.operations.BookingBookResponse bookingBook(openapisdk.models.operations.BookingBookRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/booking/book");
        
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

        openapisdk.models.operations.BookingBookResponse res = new openapisdk.models.operations.BookingBookResponse() {{
            bookingBook200ApplicationJSONObject = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.BookingBook200ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.BookingBook200ApplicationJson.class);
                res.bookingBook200ApplicationJSONObject = out;
            }
        }

        return res;
    }
	
	
    /**
     * bookingCalculateprice - /booking/calculateprice
     *
     * Confirm the price of a tour / activity prior to booking
     * 
     * For more information, see: [Calculating prices](#section/Common-workflows-and-data-validation/Calculating-prices)  
     * 
     * - **Note**: Availability and pricing data is limited to a period of **six months** into the future from the present time
     * 
    **/
    public openapisdk.models.operations.BookingCalculatepriceResponse bookingCalculateprice(openapisdk.models.operations.BookingCalculatepriceRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/booking/calculateprice");
        
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

        openapisdk.models.operations.BookingCalculatepriceResponse res = new openapisdk.models.operations.BookingCalculatepriceResponse() {{
            bookingCalculateprice200ApplicationJSONObject = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.BookingCalculateprice200ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.BookingCalculateprice200ApplicationJson.class);
                res.bookingCalculateprice200ApplicationJSONObject = out;
            }
        }

        return res;
    }
	
	
    /**
     * bookingHotels - /booking/hotels
     *
     * Get hotel pick-ups
     * Lists the hotel pickups available for either a product or a destination
     * 
    **/
    public openapisdk.models.operations.BookingHotelsResponse bookingHotels(openapisdk.models.operations.BookingHotelsRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/booking/hotels");
        
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

        openapisdk.models.operations.BookingHotelsResponse res = new openapisdk.models.operations.BookingHotelsResponse() {{
            bookingHotels200ApplicationJSONObject = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.BookingHotels200ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.BookingHotels200ApplicationJson.class);
                res.bookingHotels200ApplicationJSONObject = out;
            }
        }

        return res;
    }
	
	
    /**
     * bookingMybookings - /booking/mybookings
     *
     * Get a user's bookings with travel dates in the future. 
     * 
     * This service can also be used to check the status of a booking. 
     * 
     * **Provide either:** 
     * - A `voucherKey`, **or...** 
     * - An email address (`email`) and a booking reference (`itineraryOrItemId`) ([Booking Reference](#section/Key-concepts/Booking-references))
     * 
    **/
    public openapisdk.models.operations.BookingMybookingsResponse bookingMybookings(openapisdk.models.operations.BookingMybookingsRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/booking/mybookings");
        
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

        openapisdk.models.operations.BookingMybookingsResponse res = new openapisdk.models.operations.BookingMybookingsResponse() {{
            bookingMybookings200ApplicationJSONObject = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.BookingMybookings200ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.BookingMybookings200ApplicationJson.class);
                res.bookingMybookings200ApplicationJSONObject = out;
            }
        }

        return res;
    }
	
	
    /**
     * bookingPastbooking - /booking/pastbooking
     *
     * Get the details of a single specific past booking based on the `voucherKey` or `itemId` and email address sent in the request.
     * 
     * **Note**: this service will only return past bookings that were made with the same API key that was used to make the booking
     * 
     * **Sample query parameters**:
     * - email=apitest@viator.com&amp;itemId=580669678
     * 
     * **or**
     * - voucherKey=1005851866:4af44c13ecf3f1a7d3f9ef2fc00c2257e08fa42ae20f877f3039ff9b52aba24e:580669678
     * 
     * **email**
     * - The email address passed must match the email address associated with the booking
     * 
     * **Departure details**
     * 
     * - Departure details such as the `departurePoint`, `departurePointAddress` and `departurePointDirections` is included in the response. 
     * - These fields may contain HTML escape characters such as &amp;amp; and special characters that are escaped by a backslash. Ensure that these fields are parsed after receiving the response as it will cause your JSON to be invalid.
     * 
     * For more information, see: [Reviewing bookings](#section/Common-workflows-and-data-validation/Reviewing-bookings)
     * 
    **/
    public openapisdk.models.operations.BookingPastbookingResponse bookingPastbooking(openapisdk.models.operations.BookingPastbookingRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/booking/pastbooking");
        
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

        openapisdk.models.operations.BookingPastbookingResponse res = new openapisdk.models.operations.BookingPastbookingResponse() {{
            bookingPastbooking200ApplicationJSONObject = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.BookingPastbooking200ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.BookingPastbooking200ApplicationJson.class);
                res.bookingPastbooking200ApplicationJSONObject = out;
            }
        }

        return res;
    }
	
	
    /**
     * bookingPricingmatrix - /booking/pricingmatrix
     *
     * Get the pricing matrix for tour-grades, product age bands and pax mixes
     * 
     * For more information, see: [Get the tour-grade pricing matrix](#section/Common-workflows-and-data-validation/Get-the-tour-grade-pricing-matrix)
     * 
    **/
    public openapisdk.models.operations.BookingPricingmatrixResponse bookingPricingmatrix(openapisdk.models.operations.BookingPricingmatrixRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/booking/pricingmatrix");
        
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

        openapisdk.models.operations.BookingPricingmatrixResponse res = new openapisdk.models.operations.BookingPricingmatrixResponse() {{
            bookingPricingmatrix200ApplicationJSONObject = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.BookingPricingmatrix200ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.BookingPricingmatrix200ApplicationJson.class);
                res.bookingPricingmatrix200ApplicationJSONObject = out;
            }
        }

        return res;
    }
	
	
    /**
     * bookingStatus - /booking/status
     *
     * Get the booking status for multiple items based on different criteria
     * 
     * This service: 
     * - is ideally be used in software for bulk updates of pending bookings
     * - returns a maximum of 1000 bookings (narrow your search if you expect a greater number of results)
     * - will return &lt;u&gt;both&lt;/u&gt; live &lt;u&gt;and&lt;/u&gt; test bookings
     * - rate limited to &lt;u&gt;one request every 30 minutes&lt;/u&gt;
     * - For more information, see: [Get the bookiing status for multiple items](#section/Common-workflows-and-data-validation/Get-the-booking-status-for-multiple-items)
     * 
     * **Exceeding the rate limit**
     * - You will receive the following error message if you exceed the rate limit allowed for this service. Set `test` to `true` to bypass this limit:
     * ```javascript
     * {
     *     "data": null
     *     "vmid": 221002
     *     "errorMessage": ["Access allowed every 30 minutes"]
     *     "errorType": "EXCEPTION"
     *     "dateStamp": "2013-03-26T10:28:51+0000"
     *     "errorReference": 55315512721712161381352771
     *     "errorMessageText": ["Access allowed every 30 minutes"]
     *     "success": false
     *     "totalCount": 1
     *     "errorName": "PollingDeniedException"  
     * }
     * ```
     * 
    **/
    public openapisdk.models.operations.BookingStatusResponse bookingStatus(openapisdk.models.operations.BookingStatusRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/booking/status");
        
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

        openapisdk.models.operations.BookingStatusResponse res = new openapisdk.models.operations.BookingStatusResponse() {{
            bookingStatus200ApplicationJSONObject = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.BookingStatus200ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.BookingStatus200ApplicationJson.class);
                res.bookingStatus200ApplicationJSONObject = out;
            }
        }

        return res;
    }
	
	
    /**
     * bookingStatusItems - /booking/status/items
     *
     * Get brief booking statuses
     * 
     * This service is similar to [/booking/status](#operation/bookingStatus) in that it:
     * - retrieves the booking status for multiple items based on different criteria
     * - has the same request parameters as [/booking/status](#operation/bookingStatus)
     * 
     * However, it differs in that it returns a multi-item array of booking items with less detail than what would be received from [/booking/status](#operation/bookingStatus).
     * 
    **/
    public openapisdk.models.operations.BookingStatusItemsResponse bookingStatusItems(openapisdk.models.operations.BookingStatusItemsRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/booking/status/items");
        
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

        openapisdk.models.operations.BookingStatusItemsResponse res = new openapisdk.models.operations.BookingStatusItemsResponse() {{
            bookingStatusItems200ApplicationJSONObject = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.BookingStatusItems200ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.BookingStatusItems200ApplicationJson.class);
                res.bookingStatusItems200ApplicationJSONObject = out;
            }
        }

        return res;
    }
	
	
    /**
     * bookingVoucher - /booking/voucher
     *
     * Get voucher details
     * - Use this service to retrieve the voucher details of a booked item.
     * - The data returned is HTML-formatted and can be wrapped in a header and/or footer.
     * 
     * **Sample query parameters**
     * - leadLastName=Simpson test&amp;itemId=580669678
     * 
     * **or** 
     * - voucherKey=1005851866:4af44c13ecf3f1a7d3f9ef2fc00c2257e08fa42ae20f877f3039ff9b52aba24e:580669678&amp;fullHTML=true&amp;mobileVoucher=true
     * 
    **/
    public openapisdk.models.operations.BookingVoucherResponse bookingVoucher(openapisdk.models.operations.BookingVoucherRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/booking/voucher");
        
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

        openapisdk.models.operations.BookingVoucherResponse res = new openapisdk.models.operations.BookingVoucherResponse() {{
            bookingVoucher200ApplicationJSONObject = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.BookingVoucher200ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.BookingVoucher200ApplicationJson.class);
                res.bookingVoucher200ApplicationJSONObject = out;
            }
        }

        return res;
    }
	
	
    /**
     * cancelBooking - /bookings/{booking-reference}/cancel
     *
     * Submits a cancellation request for the specified booking
     * 
     * For information on how to use this service, see: [Cancellation API workflow](#section/Common-workflows-and-data-validation/Cancellation-API-workflow)
     * 
     * **Note**: 
     * 
     *   * This service &lt;u&gt;requires&lt;/u&gt; [exp-api-key](#section/Authentication/exp-api-key) to be included as a header parameter. Please speak to your account manager if you have not yet been issued an exp-api-key.
     *   * The base URL for the server for this endpoint is different from the older endpoints described in this document. Use `https://api.sandbox.viator.com/partner/bookings/{booking-reference}/cancel`
     * 
    **/
    public openapisdk.models.operations.CancelBookingResponse cancelBooking(openapisdk.models.operations.CancelBookingRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.CancelBookingRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/bookings/{booking-reference}/cancel", request.pathParams);
        
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

        openapisdk.models.operations.CancelBookingResponse res = new openapisdk.models.operations.CancelBookingResponse() {{
            cancelBookingResponse = null;
            cancelBooking400ApplicationJSONObject = null;
            fourHundredAndOneUNAUTHORIZED = null;
            cancelBooking404ApplicationJSONObject = null;
            fourHundredAndSixNOTACCEPTABLE = null;
            fiveHundredINTERNALSERVERERROR = null;
            fiveHundredAndThreeSERVICEUNAVAILABLE = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.CancelBookingResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.CancelBookingResponse.class);
                res.cancelBookingResponse = out;
            }
        }
        else if (httpRes.statusCode() == 400) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.CancelBooking400ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.CancelBooking400ApplicationJson.class);
                res.cancelBooking400ApplicationJSONObject = out;
            }
        }
        else if (httpRes.statusCode() == 401) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.FourHundredAndOneUnauthorized out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.FourHundredAndOneUnauthorized.class);
                res.fourHundredAndOneUNAUTHORIZED = out;
            }
        }
        else if (httpRes.statusCode() == 404) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.CancelBooking404ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.CancelBooking404ApplicationJson.class);
                res.cancelBooking404ApplicationJSONObject = out;
            }
        }
        else if (httpRes.statusCode() == 406) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.FourHundredAndSixNotAcceptable out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.FourHundredAndSixNotAcceptable.class);
                res.fourHundredAndSixNOTACCEPTABLE = out;
            }
        }
        else if (httpRes.statusCode() == 500) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.FiveHundredInternalServerError out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.FiveHundredInternalServerError.class);
                res.fiveHundredINTERNALSERVERERROR = out;
            }
        }
        else if (httpRes.statusCode() == 503) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.FiveHundredAndThreeServiceUnavailable out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.FiveHundredAndThreeServiceUnavailable.class);
                res.fiveHundredAndThreeSERVICEUNAVAILABLE = out;
            }
        }

        return res;
    }
	
	
    /**
     * cancelBookingQuote - /bookings/{booking-reference}/cancel-quote
     *
     * Retrieves a quote for the cancellation of a booking
     * 
     * For information on how to use this service, see: [Cancellation API workflow](#section/Common-workflows-and-data-validation/Cancellation-API-workflow)
     * 
     * **Note**: 
     * 
     *   * This service &lt;u&gt;requires&lt;/u&gt; [exp-api-key](#section/Authentication/exp-api-key) to be included as a header parameter. Please speak to your account manager if you have not yet been issued an exp-api-key.
     *   * The base URL for the server for this endpoint is different from the older endpoints described in this document. Use `https://api.sandbox.viator.com/partner/bookings/{booking-reference}/cancel-quote`
     * 
    **/
    public openapisdk.models.operations.CancelBookingQuoteResponse cancelBookingQuote(openapisdk.models.operations.CancelBookingQuoteRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.CancelBookingQuoteRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/bookings/{booking-reference}/cancel-quote", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.CancelBookingQuoteResponse res = new openapisdk.models.operations.CancelBookingQuoteResponse() {{
            cancelBookingQuoteResponse = null;
            fourHundredAndOneUNAUTHORIZED = null;
            fourHundredAndSixNOTACCEPTABLE = null;
            fiveHundredINTERNALSERVERERROR = null;
            fiveHundredAndThreeSERVICEUNAVAILABLE = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.CancelBookingQuoteResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.CancelBookingQuoteResponse.class);
                res.cancelBookingQuoteResponse = out;
            }
        }
        else if (httpRes.statusCode() == 401) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.FourHundredAndOneUnauthorized out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.FourHundredAndOneUnauthorized.class);
                res.fourHundredAndOneUNAUTHORIZED = out;
            }
        }
        else if (httpRes.statusCode() == 406) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.FourHundredAndSixNotAcceptable out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.FourHundredAndSixNotAcceptable.class);
                res.fourHundredAndSixNOTACCEPTABLE = out;
            }
        }
        else if (httpRes.statusCode() == 500) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.FiveHundredInternalServerError out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.FiveHundredInternalServerError.class);
                res.fiveHundredINTERNALSERVERERROR = out;
            }
        }
        else if (httpRes.statusCode() == 503) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.FiveHundredAndThreeServiceUnavailable out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.FiveHundredAndThreeServiceUnavailable.class);
                res.fiveHundredAndThreeSERVICEUNAVAILABLE = out;
            }
        }

        return res;
    }
	
	
    /**
     * cancellationReasons - /bookings/cancel-reasons
     *
     * Retrieves a dictionary of unique identification codes (`cancellationReasonCode`) and their associated natural-language descriptions (`cancellationReasonText`).
     * 
     * For information on how to use this service, see: [Cancellation API workflow](#section/Common-workflows-and-data-validation/Cancellation-API-workflow)
     * 
     * **Note**: 
     * 
     *   * This service &lt;u&gt;requires&lt;/u&gt; [exp-api-key](#section/Authentication/exp-api-key) to be included as a header parameter. Please speak to your account manager if you have not yet been issued an exp-api-key.
     *   * The base URL for the server for this endpoint is different from the older endpoints described in this document. Use `https://api.sandbox.viator.com/partner/cancel-reasons`
     * 
    **/
    public openapisdk.models.operations.CancellationReasonsResponse cancellationReasons(openapisdk.models.operations.CancellationReasonsRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.CancellationReasonsRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/bookings/cancel-reasons");
        
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

        openapisdk.models.operations.CancellationReasonsResponse res = new openapisdk.models.operations.CancellationReasonsResponse() {{
            cancellationReasonsResponses = null;
            fourHundredAndOneUNAUTHORIZED = null;
            fourHundredAndSixNOTACCEPTABLE = null;
            fiveHundredINTERNALSERVERERROR = null;
            fiveHundredAndThreeSERVICEUNAVAILABLE = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.CancellationReasonsResponse[] out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.CancellationReasonsResponse[].class);
                res.cancellationReasonsResponses = out;
            }
        }
        else if (httpRes.statusCode() == 401) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.FourHundredAndOneUnauthorized out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.FourHundredAndOneUnauthorized.class);
                res.fourHundredAndOneUNAUTHORIZED = out;
            }
        }
        else if (httpRes.statusCode() == 406) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.FourHundredAndSixNotAcceptable out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.FourHundredAndSixNotAcceptable.class);
                res.fourHundredAndSixNOTACCEPTABLE = out;
            }
        }
        else if (httpRes.statusCode() == 500) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.FiveHundredInternalServerError out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.FiveHundredInternalServerError.class);
                res.fiveHundredINTERNALSERVERERROR = out;
            }
        }
        else if (httpRes.statusCode() == 503) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.FiveHundredAndThreeServiceUnavailable out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.FiveHundredAndThreeServiceUnavailable.class);
                res.fiveHundredAndThreeSERVICEUNAVAILABLE = out;
            }
        }

        return res;
    }
	
}