package openapisdk;

import openapisdk.utils.HTTPClient;
import openapisdk.utils.HTTPRequest;
import java.net.http.HttpResponse;
import com.fasterxml.jackson.databind.ObjectMapper;
import java.nio.charset.StandardCharsets;
import openapisdk.utils.SerializedBody;

public class Orders {
	private HTTPClient _defaultClient;
	private HTTPClient _securityClient;
	private String _serverUrl;
	private String _language;
	private String _sdkVersion;
	private String _genVersion;

	public Orders(HTTPClient defaultClient, HTTPClient securityClient, String serverUrl, String language, String sdkVersion, String genVersion) {
		this._defaultClient = defaultClient;
		this._securityClient = securityClient;
		this._serverUrl = serverUrl;
		this._language = language;
		this._sdkVersion = sdkVersion;
		this._genVersion = genVersion;
	}
	
	
    /**
     * deleteAccountsAccountOrdersCustomerOrderId - Cancel Order
     *
     * Cancels the order with the referenced Customer Order ID for the account passed in the URL.
    **/
    public openapisdk.models.operations.DeleteAccountsAccountOrdersCustomerOrderIdResponse deleteAccountsAccountOrdersCustomerOrderId(openapisdk.models.operations.DeleteAccountsAccountOrdersCustomerOrderIdRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/accounts/{account}/orders/{CustomerOrderId}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("DELETE");
        req.setURL(url);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.DeleteAccountsAccountOrdersCustomerOrderIdResponse res = new openapisdk.models.operations.DeleteAccountsAccountOrdersCustomerOrderIdResponse() {{
            deleteAccountsAccountOrdersCustomerOrderId200ApplicationJSONObjects = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.DeleteAccountsAccountOrdersCustomerOrderId200ApplicationJson[] out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.DeleteAccountsAccountOrdersCustomerOrderId200ApplicationJson[].class);
                res.deleteAccountsAccountOrdersCustomerOrderId200ApplicationJSONObjects = out;
            }
        }
        else if (httpRes.statusCode() == 202) {
        }
        else if (httpRes.statusCode() == 204) {
        }
        else if (httpRes.statusCode() == 400) {
        }
        else if (httpRes.statusCode() == 401) {
        }
        else if (httpRes.statusCode() == 403) {
        }
        else if (httpRes.statusCode() == 408) {
        }

        return res;
    }
	
	
    /**
     * getAccountsAccountOrders - Open Orders
     *
     * Returns a list of orders for the account passed in the URL
    **/
    public openapisdk.models.operations.GetAccountsAccountOrdersResponse getAccountsAccountOrders(openapisdk.models.operations.GetAccountsAccountOrdersRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/accounts/{account}/orders", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetAccountsAccountOrdersResponse res = new openapisdk.models.operations.GetAccountsAccountOrdersResponse() {{
            orderStates = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.OrderState[] out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.OrderState[].class);
                res.orderStates = out;
            }
        }
        else if (httpRes.statusCode() == 202) {
        }
        else if (httpRes.statusCode() == 204) {
        }
        else if (httpRes.statusCode() == 400) {
        }
        else if (httpRes.statusCode() == 401) {
        }
        else if (httpRes.statusCode() == 403) {
        }
        else if (httpRes.statusCode() == 408) {
        }

        return res;
    }
	
	
    /**
     * getAccountsAccountOrdersCustomerOrderId - Return specific order info
     *
     * Returns the order with the referenced Customer Order ID for the account passed in the URL.
    **/
    public openapisdk.models.operations.GetAccountsAccountOrdersCustomerOrderIdResponse getAccountsAccountOrdersCustomerOrderId(openapisdk.models.operations.GetAccountsAccountOrdersCustomerOrderIdRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/accounts/{account}/orders/{CustomerOrderId}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetAccountsAccountOrdersCustomerOrderIdResponse res = new openapisdk.models.operations.GetAccountsAccountOrdersCustomerOrderIdResponse() {{
            orderStates = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.OrderState[] out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.OrderState[].class);
                res.orderStates = out;
            }
        }
        else if (httpRes.statusCode() == 202) {
        }
        else if (httpRes.statusCode() == 204) {
        }
        else if (httpRes.statusCode() == 400) {
        }
        else if (httpRes.statusCode() == 401) {
        }
        else if (httpRes.statusCode() == 403) {
        }
        else if (httpRes.statusCode() == 408) {
        }

        return res;
    }
	
	
    /**
     * postAccountsAccountOrders - Place Order
     *
     * Places order
    **/
    public openapisdk.models.operations.PostAccountsAccountOrdersResponse postAccountsAccountOrders(openapisdk.models.operations.PostAccountsAccountOrdersRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/accounts/{account}/orders", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        if (serializedRequestBody == null) {
            throw new Exception("Request body is required");
        }
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.PostAccountsAccountOrdersResponse res = new openapisdk.models.operations.PostAccountsAccountOrdersResponse() {{
            orderStates = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.OrderState[] out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.OrderState[].class);
                res.orderStates = out;
            }
        }
        else if (httpRes.statusCode() == 202) {
        }
        else if (httpRes.statusCode() == 204) {
        }
        else if (httpRes.statusCode() == 400) {
        }
        else if (httpRes.statusCode() == 401) {
        }
        else if (httpRes.statusCode() == 403) {
        }
        else if (httpRes.statusCode() == 408) {
        }

        return res;
    }
	
	
    /**
     * putAccountsAccountOrdersCustomerOrderId - Modify Order
     *
     * Allows the caller to modify the order with the referenced Customer Order ID specified in the URL. A separate Customer Order ID must be provided in the request body for the modification.
    **/
    public openapisdk.models.operations.PutAccountsAccountOrdersCustomerOrderIdResponse putAccountsAccountOrdersCustomerOrderId(openapisdk.models.operations.PutAccountsAccountOrdersCustomerOrderIdRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/accounts/{account}/orders/{CustomerOrderId}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("PUT");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        if (serializedRequestBody == null) {
            throw new Exception("Request body is required");
        }
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.PutAccountsAccountOrdersCustomerOrderIdResponse res = new openapisdk.models.operations.PutAccountsAccountOrdersCustomerOrderIdResponse() {{
            putAccountsAccountOrdersCustomerOrderId200ApplicationJSONObjects = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.PutAccountsAccountOrdersCustomerOrderId200ApplicationJson[] out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.PutAccountsAccountOrdersCustomerOrderId200ApplicationJson[].class);
                res.putAccountsAccountOrdersCustomerOrderId200ApplicationJSONObjects = out;
            }
        }
        else if (httpRes.statusCode() == 202) {
        }
        else if (httpRes.statusCode() == 204) {
        }
        else if (httpRes.statusCode() == 400) {
        }
        else if (httpRes.statusCode() == 401) {
        }
        else if (httpRes.statusCode() == 403) {
        }
        else if (httpRes.statusCode() == 408) {
        }

        return res;
    }
	
}