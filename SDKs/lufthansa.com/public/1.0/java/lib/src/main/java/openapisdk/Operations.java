package openapisdk;

import openapisdk.utils.HTTPClient;
import openapisdk.utils.HTTPRequest;
import java.net.http.HttpResponse;
import com.fasterxml.jackson.databind.ObjectMapper;
import java.nio.charset.StandardCharsets;
import org.apache.http.NameValuePair;

public class Operations {
	private HTTPClient _defaultClient;
	private HTTPClient _securityClient;
	private String _serverUrl;
	private String _language;
	private String _sdkVersion;
	private String _genVersion;

	public Operations(HTTPClient defaultClient, HTTPClient securityClient, String serverUrl, String language, String sdkVersion, String genVersion) {
		this._defaultClient = defaultClient;
		this._securityClient = securityClient;
		this._serverUrl = serverUrl;
		this._language = language;
		this._sdkVersion = sdkVersion;
		this._genVersion = genVersion;
	}
	
	
    /**
     * operationsFlightstatusArrivalsByAirportCodeAndFromDateTimeGet - Flight Status at Arrival Airport
     *
     * Status of all arrivals at a given airport up to 4 hours from the provided date time.
    **/
    public openapisdk.models.operations.OperationsFlightstatusArrivalsByAirportCodeAndFromDateTimeGetResponse operationsFlightstatusArrivalsByAirportCodeAndFromDateTimeGet(openapisdk.models.operations.OperationsFlightstatusArrivalsByAirportCodeAndFromDateTimeGetRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/operations/flightstatus/arrivals/{airportCode}/{fromDateTime}", request.pathParams);
        
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
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.OperationsFlightstatusArrivalsByAirportCodeAndFromDateTimeGetResponse res = new openapisdk.models.operations.OperationsFlightstatusArrivalsByAirportCodeAndFromDateTimeGetResponse() {{
            operationsFlightstatusArrivalsByAirportCodeAndFromDateTimeGet200ApplicationJSONObject = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                java.util.Map<String, Object> out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), java.util.Map.class);
                res.operationsFlightstatusArrivalsByAirportCodeAndFromDateTimeGet200ApplicationJSONObject = out;
            }
        }

        return res;
    }
	
	
    /**
     * operationsFlightstatusByFlightNumberAndDateGet - Flight Status
     *
     * Status of a particular flight (boarding, delayed, etc.).
    **/
    public openapisdk.models.operations.OperationsFlightstatusByFlightNumberAndDateGetResponse operationsFlightstatusByFlightNumberAndDateGet(openapisdk.models.operations.OperationsFlightstatusByFlightNumberAndDateGetRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/operations/flightstatus/{flightNumber}/{date}", request.pathParams);
        
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
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.OperationsFlightstatusByFlightNumberAndDateGetResponse res = new openapisdk.models.operations.OperationsFlightstatusByFlightNumberAndDateGetResponse() {{
            operationsFlightstatusByFlightNumberAndDateGet200ApplicationJSONObject = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                java.util.Map<String, Object> out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), java.util.Map.class);
                res.operationsFlightstatusByFlightNumberAndDateGet200ApplicationJSONObject = out;
            }
        }

        return res;
    }
	
	
    /**
     * operationsFlightstatusDeparturesByAirportCodeAndFromDateTimeGet - Flight Status at Departure Airport
     *
     * Status of all departures from a given airport up to 4 hours from the provided date time.
    **/
    public openapisdk.models.operations.OperationsFlightstatusDeparturesByAirportCodeAndFromDateTimeGetResponse operationsFlightstatusDeparturesByAirportCodeAndFromDateTimeGet(openapisdk.models.operations.OperationsFlightstatusDeparturesByAirportCodeAndFromDateTimeGetRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/operations/flightstatus/departures/{airportCode}/{fromDateTime}", request.pathParams);
        
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
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.OperationsFlightstatusDeparturesByAirportCodeAndFromDateTimeGetResponse res = new openapisdk.models.operations.OperationsFlightstatusDeparturesByAirportCodeAndFromDateTimeGetResponse() {{
            operationsFlightstatusDeparturesByAirportCodeAndFromDateTimeGet200ApplicationJSONObject = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                java.util.Map<String, Object> out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), java.util.Map.class);
                res.operationsFlightstatusDeparturesByAirportCodeAndFromDateTimeGet200ApplicationJSONObject = out;
            }
        }

        return res;
    }
	
	
    /**
     * operationsFlightstatusRouteDateByOriginAndDestinationGet - Flight Status by Route
     *
     * Status of flights between a given origin and destination on a given date.
    **/
    public openapisdk.models.operations.OperationsFlightstatusRouteDateByOriginAndDestinationGetResponse operationsFlightstatusRouteDateByOriginAndDestinationGet(openapisdk.models.operations.OperationsFlightstatusRouteDateByOriginAndDestinationGetRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/operations/flightstatus/route/{origin}/{destination}/{date}", request.pathParams);
        
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
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.OperationsFlightstatusRouteDateByOriginAndDestinationGetResponse res = new openapisdk.models.operations.OperationsFlightstatusRouteDateByOriginAndDestinationGetResponse() {{
            operationsFlightstatusRouteDateByOriginAndDestinationGet200ApplicationJSONObject = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                java.util.Map<String, Object> out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), java.util.Map.class);
                res.operationsFlightstatusRouteDateByOriginAndDestinationGet200ApplicationJSONObject = out;
            }
        }

        return res;
    }
	
	
    /**
     * operationsSchedulesFromDateTimeByOriginAndDestinationGet - Flight Schedules
     *
     * Scheduled flights between given airports on a given date.
    **/
    public openapisdk.models.operations.OperationsSchedulesFromDateTimeByOriginAndDestinationGetResponse operationsSchedulesFromDateTimeByOriginAndDestinationGet(openapisdk.models.operations.OperationsSchedulesFromDateTimeByOriginAndDestinationGetRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/operations/schedules/{origin}/{destination}/{fromDateTime}", request.pathParams);
        
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
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.OperationsSchedulesFromDateTimeByOriginAndDestinationGetResponse res = new openapisdk.models.operations.OperationsSchedulesFromDateTimeByOriginAndDestinationGetResponse() {{
            operationsSchedulesFromDateTimeByOriginAndDestinationGet200ApplicationJSONObject = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                java.util.Map<String, Object> out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), java.util.Map.class);
                res.operationsSchedulesFromDateTimeByOriginAndDestinationGet200ApplicationJSONObject = out;
            }
        }

        return res;
    }
	
}