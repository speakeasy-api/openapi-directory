package openapisdk;

import openapisdk.utils.HTTPClient;
import openapisdk.utils.HTTPRequest;
import java.net.http.HttpResponse;
import com.fasterxml.jackson.databind.ObjectMapper;
import java.nio.charset.StandardCharsets;
import openapisdk.utils.SerializedBody;

public class MarketData {
	private HTTPClient _defaultClient;
	private HTTPClient _securityClient;
	private String _serverUrl;
	private String _language;
	private String _sdkVersion;
	private String _genVersion;

	public MarketData(HTTPClient defaultClient, HTTPClient securityClient, String serverUrl, String language, String sdkVersion, String genVersion) {
		this._defaultClient = defaultClient;
		this._securityClient = securityClient;
		this._serverUrl = serverUrl;
		this._language = language;
		this._sdkVersion = sdkVersion;
		this._genVersion = genVersion;
	}
	
	
    /**
     * getMarketdataExchangeComponents - Exchange Components
     *
     * This endpoint provides a bit mapping for the bid/ask/last 'market' values in the snapshot response. 
    **/
    public openapisdk.models.operations.GetMarketdataExchangeComponentsResponse getMarketdataExchangeComponents() throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/marketdata/exchange_components");
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetMarketdataExchangeComponentsResponse res = new openapisdk.models.operations.GetMarketdataExchangeComponentsResponse() {{
            getMarketdataExchangeComponents200ApplicationJSONObjects = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.GetMarketdataExchangeComponents200ApplicationJson[] out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.GetMarketdataExchangeComponents200ApplicationJson[].class);
                res.getMarketdataExchangeComponents200ApplicationJSONObjects = out;
            }
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
     * getMarketdataSnapshot - Market Data Snapshot
     *
     * This endpoint allows the consumer to request a market data snapshot for one or more trading products. 
     * Consumers need to provide unique identifiers (conids) for the products in the IB product database (retrievable using the /secdef endpoint). The 'market' values are integers whose bits indicate the exchange(s) making up the quote. 
     * 
     * The mapping of bit to exchange is obtained from the marketdata/exchange_component endpoint. For example, if a bid has a 'market' value of 5 and the exchange_component result has the map 
     * 0 => NYSE, 1 => ISLAND, 2 => ARCA then the exchanges contributing to the bid size are NYSE and ARCA. 
     * 
     * Similarly, if market=2, then only ISLAND is contributing.
     * 
    **/
    public openapisdk.models.operations.GetMarketdataSnapshotResponse getMarketdataSnapshot(openapisdk.models.operations.GetMarketdataSnapshotRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/marketdata/snapshot");
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        if (serializedRequestBody == null) {
            throw new Exception("Request body is required");
        }
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetMarketdataSnapshotResponse res = new openapisdk.models.operations.GetMarketdataSnapshotResponse() {{
            getMarketdataSnapshot200ApplicationJSONObjects = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.GetMarketdataSnapshot200ApplicationJson[] out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.GetMarketdataSnapshot200ApplicationJson[].class);
                res.getMarketdataSnapshot200ApplicationJSONObjects = out;
            }
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