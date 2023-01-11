package openapisdk;

import openapisdk.utils.HTTPClient;
import openapisdk.utils.HTTPRequest;
import java.net.http.HttpResponse;
import com.fasterxml.jackson.databind.ObjectMapper;
import java.nio.charset.StandardCharsets;

public class Cargo {
	private HTTPClient _defaultClient;
	private HTTPClient _securityClient;
	private String _serverUrl;
	private String _language;
	private String _sdkVersion;
	private String _genVersion;

	public Cargo(HTTPClient defaultClient, HTTPClient securityClient, String serverUrl, String language, String sdkVersion, String genVersion) {
		this._defaultClient = defaultClient;
		this._securityClient = securityClient;
		this._serverUrl = serverUrl;
		this._language = language;
		this._sdkVersion = sdkVersion;
		this._genVersion = genVersion;
	}
	
	
    /**
     * cargoGetRouteFromDateProductCodeByOriginAndDestinationGet - Retrieve all flights
     *
     * Retrieve a list of all possible flights (both direct and connecting) between two airports on a given date. Routes are available for today and up to days in the future.
    **/
    public openapisdk.models.operations.CargoGetRouteFromDateProductCodeByOriginAndDestinationGetResponse cargoGetRouteFromDateProductCodeByOriginAndDestinationGet(openapisdk.models.operations.CargoGetRouteFromDateProductCodeByOriginAndDestinationGetRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/cargo/getRoute/{origin}-{destination}/{fromDate}/{productCode}", request.pathParams);
        
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

        openapisdk.models.operations.CargoGetRouteFromDateProductCodeByOriginAndDestinationGetResponse res = new openapisdk.models.operations.CargoGetRouteFromDateProductCodeByOriginAndDestinationGetResponse() {{
            cargoGetRouteFromDateProductCodeByOriginAndDestinationGet200ApplicationJSONObject = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                java.util.Map<String, Object> out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), java.util.Map.class);
                res.cargoGetRouteFromDateProductCodeByOriginAndDestinationGet200ApplicationJSONObject = out;
            }
        }

        return res;
    }
	
	
    /**
     * cargoShipmentTrackingByAwbPrefixAndAwbNumberGet - Shipment Tracking
     *
     * With this tracking service you can easily retrieve your shipment or flight status information.
    **/
    public openapisdk.models.operations.CargoShipmentTrackingByAwbPrefixAndAwbNumberGetResponse cargoShipmentTrackingByAwbPrefixAndAwbNumberGet(openapisdk.models.operations.CargoShipmentTrackingByAwbPrefixAndAwbNumberGetRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/cargo/shipmentTracking/{aWBPrefix}-{aWBNumber}", request.pathParams);
        
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

        openapisdk.models.operations.CargoShipmentTrackingByAwbPrefixAndAwbNumberGetResponse res = new openapisdk.models.operations.CargoShipmentTrackingByAwbPrefixAndAwbNumberGetResponse() {{
            cargoShipmentTrackingByAWBPrefixAndAWBNumberGet200ApplicationJSONObject = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                java.util.Map<String, Object> out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), java.util.Map.class);
                res.cargoShipmentTrackingByAWBPrefixAndAWBNumberGet200ApplicationJSONObject = out;
            }
        }

        return res;
    }
	
}