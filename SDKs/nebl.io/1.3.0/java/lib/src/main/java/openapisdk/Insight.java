package openapisdk;

import openapisdk.utils.HTTPClient;
import openapisdk.utils.HTTPRequest;
import java.net.http.HttpResponse;
import com.fasterxml.jackson.databind.ObjectMapper;
import java.nio.charset.StandardCharsets;
import openapisdk.utils.SerializedBody;
import org.apache.http.NameValuePair;

public class Insight {
	private HTTPClient _defaultClient;
	private HTTPClient _securityClient;
	private String _serverUrl;
	private String _language;
	private String _sdkVersion;
	private String _genVersion;

	public Insight(HTTPClient defaultClient, HTTPClient securityClient, String serverUrl, String language, String sdkVersion, String genVersion) {
		this._defaultClient = defaultClient;
		this._securityClient = securityClient;
		this._serverUrl = serverUrl;
		this._language = language;
		this._sdkVersion = sdkVersion;
		this._genVersion = genVersion;
	}
	
	
    /**
     * getAddress - Returns address object
     *
     * Returns NEBL address object containing information on a specific address
    **/
    public openapisdk.models.operations.GetAddressResponse getAddress(openapisdk.models.operations.GetAddressRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/ins/addr/{address}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetAddressResponse res = new openapisdk.models.operations.GetAddressResponse() {{
            getAddressResponse = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.GetAddressResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.GetAddressResponse.class);
                res.getAddressResponse = out;
            }
        }

        return res;
    }
	
	
    /**
     * getAddressBalance - Returns address balance in sats
     *
     * Returns NEBL address balance in satoshis
    **/
    public openapisdk.models.operations.GetAddressBalanceResponse getAddressBalance(openapisdk.models.operations.GetAddressBalanceRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/ins/addr/{address}/balance", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetAddressBalanceResponse res = new openapisdk.models.operations.GetAddressBalanceResponse() {{
            getAddressBalanceResponse = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                Double out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), Double.class);
                res.getAddressBalanceResponse = out;
            }
        }

        return res;
    }
	
	
    /**
     * getAddressTotalReceived - Returns total received by address in sats
     *
     * Returns total NEBL received by address in satoshis
    **/
    public openapisdk.models.operations.GetAddressTotalReceivedResponse getAddressTotalReceived(openapisdk.models.operations.GetAddressTotalReceivedRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/ins/addr/{address}/totalReceived", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetAddressTotalReceivedResponse res = new openapisdk.models.operations.GetAddressTotalReceivedResponse() {{
            getAddressTotalReceivedResponse = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                Double out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), Double.class);
                res.getAddressTotalReceivedResponse = out;
            }
        }

        return res;
    }
	
	
    /**
     * getAddressTotalSent - Returns total sent by address in sats
     *
     * Returns total NEBL sent by address in satoshis
    **/
    public openapisdk.models.operations.GetAddressTotalSentResponse getAddressTotalSent(openapisdk.models.operations.GetAddressTotalSentRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/ins/addr/{address}/totalSent", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetAddressTotalSentResponse res = new openapisdk.models.operations.GetAddressTotalSentResponse() {{
            getAddressTotalSentResponse = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                Double out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), Double.class);
                res.getAddressTotalSentResponse = out;
            }
        }

        return res;
    }
	
	
    /**
     * getAddressUnconfirmedBalance - Returns address unconfirmed balance in sats
     *
     * Returns NEBL address unconfirmed balance in satoshis
    **/
    public openapisdk.models.operations.GetAddressUnconfirmedBalanceResponse getAddressUnconfirmedBalance(openapisdk.models.operations.GetAddressUnconfirmedBalanceRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/ins/addr/{address}/unconfirmedBalance", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetAddressUnconfirmedBalanceResponse res = new openapisdk.models.operations.GetAddressUnconfirmedBalanceResponse() {{
            getAddressUnconfirmedBalanceResponse = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                Double out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), Double.class);
                res.getAddressUnconfirmedBalanceResponse = out;
            }
        }

        return res;
    }
	
	
    /**
     * getAddressUtxos - Returns all UTXOs at a given address
     *
     * Returns information on each Unspent Transaction Output contained at an address
    **/
    public openapisdk.models.operations.GetAddressUtxosResponse getAddressUtxos(openapisdk.models.operations.GetAddressUtxosRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/ins/addr/{address}/utxo", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetAddressUtxosResponse res = new openapisdk.models.operations.GetAddressUtxosResponse() {{
            getAddressUtxosResponse = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.GetAddressUtxosResponse[] out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.GetAddressUtxosResponse[].class);
                res.getAddressUtxosResponse = out;
            }
        }

        return res;
    }
	
	
    /**
     * getBlock - Returns information regarding a Neblio block
     *
     * Returns blockchain data for a given block based upon the block hash
    **/
    public openapisdk.models.operations.GetBlockResponse getBlock(openapisdk.models.operations.GetBlockRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/ins/block/{blockhash}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetBlockResponse res = new openapisdk.models.operations.GetBlockResponse() {{
            getBlockResponse = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.GetBlockResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.GetBlockResponse.class);
                res.getBlockResponse = out;
            }
        }

        return res;
    }
	
	
    /**
     * getBlockIndex - Returns block hash of block
     *
     * Returns the block hash of a block at a given block index
    **/
    public openapisdk.models.operations.GetBlockIndexResponse getBlockIndex(openapisdk.models.operations.GetBlockIndexRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/ins/block-index/{blockindex}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetBlockIndexResponse res = new openapisdk.models.operations.GetBlockIndexResponse() {{
            getBlockIndexResponse = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.GetBlockIndexResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.GetBlockIndexResponse.class);
                res.getBlockIndexResponse = out;
            }
        }

        return res;
    }
	
	
    /**
     * getRawTx - Returns raw transaction hex
     *
     * Returns raw transaction hex representing a NEBL transaction
    **/
    public openapisdk.models.operations.GetRawTxResponse getRawTx(openapisdk.models.operations.GetRawTxRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/ins/rawtx/{txid}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetRawTxResponse res = new openapisdk.models.operations.GetRawTxResponse() {{
            getRawTxResponse = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.GetRawTxResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.GetRawTxResponse.class);
                res.getRawTxResponse = out;
            }
        }

        return res;
    }
	
	
    /**
     * getStatus - Utility API for calling several blockchain node functions
     *
     * Utility API for calling several blockchain node functions - getInfo, getDifficulty, getBestBlockHash, getLastBlockHash
    **/
    public openapisdk.models.operations.GetStatusResponse getStatus(openapisdk.models.operations.GetStatusRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/ins/status");
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        java.util.List<NameValuePair> queryParams = openapisdk.utils.Utils.getQueryParams(request.queryParams);
        if (queryParams != null) {
            for (NameValuePair queryParam : queryParams) {
                req.addQueryParam(queryParam);
            }
        }
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetStatusResponse res = new openapisdk.models.operations.GetStatusResponse() {{
            getStatusResponse = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                java.util.Map<String, Object> out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), java.util.Map.class);
                res.getStatusResponse = out;
            }
        }

        return res;
    }
	
	
    /**
     * getSync - Get node sync status
     *
     * Returns information on the node's sync progress
    **/
    public openapisdk.models.operations.GetSyncResponse getSync() throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/ins/sync");
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetSyncResponse res = new openapisdk.models.operations.GetSyncResponse() {{
            getSyncResponse = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.GetSyncResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.GetSyncResponse.class);
                res.getSyncResponse = out;
            }
        }

        return res;
    }
	
	
    /**
     * getTx - Returns transaction object
     *
     * Returns NEBL transaction object representing a NEBL transaction
    **/
    public openapisdk.models.operations.GetTxResponse getTx(openapisdk.models.operations.GetTxRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/ins/tx/{txid}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetTxResponse res = new openapisdk.models.operations.GetTxResponse() {{
            getTxResponse = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.GetTxResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.GetTxResponse.class);
                res.getTxResponse = out;
            }
        }

        return res;
    }
	
	
    /**
     * getTxs - Get transactions by block or address
     *
     * Returns all transactions by block or address
    **/
    public openapisdk.models.operations.GetTxsResponse getTxs(openapisdk.models.operations.GetTxsRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/ins/txs");
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        java.util.List<NameValuePair> queryParams = openapisdk.utils.Utils.getQueryParams(request.queryParams);
        if (queryParams != null) {
            for (NameValuePair queryParam : queryParams) {
                req.addQueryParam(queryParam);
            }
        }
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetTxsResponse res = new openapisdk.models.operations.GetTxsResponse() {{
            getTxsResponse = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.GetTxsResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.GetTxsResponse.class);
                res.getTxsResponse = out;
            }
        }

        return res;
    }
	
	
    /**
     * sendTx - Broadcasts a signed raw transaction to the network (not NTP1 specific)
     *
     * Broadcasts a signed raw transaction to the network. If successful returns the txid of the broadcast trasnaction.
     * 
    **/
    public openapisdk.models.operations.SendTxResponse sendTx(openapisdk.models.operations.SendTxRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/ins/tx/send");
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        if (serializedRequestBody == null) {
            throw new Exception("Request body is required");
        }
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.SendTxResponse res = new openapisdk.models.operations.SendTxResponse() {{
            broadcastTxResponse = null;
            error = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.BroadcastTxResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.BroadcastTxResponse.class);
                res.broadcastTxResponse = out;
            }
        }
        else {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.Error out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.Error.class);
                res.error = out;
            }
        }

        return res;
    }
	
}