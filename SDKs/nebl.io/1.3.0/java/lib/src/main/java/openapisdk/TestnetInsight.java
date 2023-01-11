package openapisdk;

import openapisdk.utils.HTTPClient;
import openapisdk.utils.HTTPRequest;
import java.net.http.HttpResponse;
import com.fasterxml.jackson.databind.ObjectMapper;
import java.nio.charset.StandardCharsets;
import openapisdk.utils.SerializedBody;
import org.apache.http.NameValuePair;

public class TestnetInsight {
	private HTTPClient _defaultClient;
	private HTTPClient _securityClient;
	private String _serverUrl;
	private String _language;
	private String _sdkVersion;
	private String _genVersion;

	public TestnetInsight(HTTPClient defaultClient, HTTPClient securityClient, String serverUrl, String language, String sdkVersion, String genVersion) {
		this._defaultClient = defaultClient;
		this._securityClient = securityClient;
		this._serverUrl = serverUrl;
		this._language = language;
		this._sdkVersion = sdkVersion;
		this._genVersion = genVersion;
	}
	
	
    /**
     * testnetGetAddress - Returns address object
     *
     * Returns NEBL address object containing information on a specific address
    **/
    public openapisdk.models.operations.TestnetGetAddressResponse testnetGetAddress(openapisdk.models.operations.TestnetGetAddressRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/testnet/ins/addr/{address}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.TestnetGetAddressResponse res = new openapisdk.models.operations.TestnetGetAddressResponse() {{
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
     * testnetGetAddressBalance - Returns address balance in sats
     *
     * Returns NEBL address balance in satoshis
    **/
    public openapisdk.models.operations.TestnetGetAddressBalanceResponse testnetGetAddressBalance(openapisdk.models.operations.TestnetGetAddressBalanceRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/testnet/ins/addr/{address}/balance", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.TestnetGetAddressBalanceResponse res = new openapisdk.models.operations.TestnetGetAddressBalanceResponse() {{
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
     * testnetGetAddressTotalReceived - Returns total received by address in sats
     *
     * Returns total NEBL received by address in satoshis
    **/
    public openapisdk.models.operations.TestnetGetAddressTotalReceivedResponse testnetGetAddressTotalReceived(openapisdk.models.operations.TestnetGetAddressTotalReceivedRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/testnet/ins/addr/{address}/totalReceived", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.TestnetGetAddressTotalReceivedResponse res = new openapisdk.models.operations.TestnetGetAddressTotalReceivedResponse() {{
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
     * testnetGetAddressTotalSent - Returns total sent by address in sats
     *
     * Returns total NEBL sent by address in satoshis
    **/
    public openapisdk.models.operations.TestnetGetAddressTotalSentResponse testnetGetAddressTotalSent(openapisdk.models.operations.TestnetGetAddressTotalSentRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/testnet/ins/addr/{address}/totalSent", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.TestnetGetAddressTotalSentResponse res = new openapisdk.models.operations.TestnetGetAddressTotalSentResponse() {{
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
     * testnetGetAddressUnconfirmedBalance - Returns address unconfirmed balance in sats
     *
     * Returns NEBL address unconfirmed balance in satoshis
    **/
    public openapisdk.models.operations.TestnetGetAddressUnconfirmedBalanceResponse testnetGetAddressUnconfirmedBalance(openapisdk.models.operations.TestnetGetAddressUnconfirmedBalanceRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/testnet/ins/addr/{address}/unconfirmedBalance", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.TestnetGetAddressUnconfirmedBalanceResponse res = new openapisdk.models.operations.TestnetGetAddressUnconfirmedBalanceResponse() {{
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
     * testnetGetAddressUtxos - Returns all UTXOs at a given address
     *
     * Returns information on each Unspent Transaction Output contained at an address
    **/
    public openapisdk.models.operations.TestnetGetAddressUtxosResponse testnetGetAddressUtxos(openapisdk.models.operations.TestnetGetAddressUtxosRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/testnet/ins/addr/{address}/utxo", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.TestnetGetAddressUtxosResponse res = new openapisdk.models.operations.TestnetGetAddressUtxosResponse() {{
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
     * testnetGetBlock - Returns information regarding a Neblio block
     *
     * Returns blockchain data for a given block based upon the block hash
    **/
    public openapisdk.models.operations.TestnetGetBlockResponse testnetGetBlock(openapisdk.models.operations.TestnetGetBlockRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/testnet/ins/block/{blockhash}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.TestnetGetBlockResponse res = new openapisdk.models.operations.TestnetGetBlockResponse() {{
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
     * testnetGetBlockIndex - Returns block hash of block
     *
     * Returns the block hash of a block at a given block index
    **/
    public openapisdk.models.operations.TestnetGetBlockIndexResponse testnetGetBlockIndex(openapisdk.models.operations.TestnetGetBlockIndexRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/testnet/ins/block-index/{blockindex}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.TestnetGetBlockIndexResponse res = new openapisdk.models.operations.TestnetGetBlockIndexResponse() {{
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
     * testnetGetRawTx - Returns raw transaction hex
     *
     * Returns raw transaction hex representing a NEBL transaction
    **/
    public openapisdk.models.operations.TestnetGetRawTxResponse testnetGetRawTx(openapisdk.models.operations.TestnetGetRawTxRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/testnet/ins/rawtx/{txid}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.TestnetGetRawTxResponse res = new openapisdk.models.operations.TestnetGetRawTxResponse() {{
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
     * testnetGetStatus - Utility API for calling several blockchain node functions
     *
     * Utility API for calling several blockchain node functions - getInfo, getDifficulty, getBestBlockHash, getLastBlockHash
    **/
    public openapisdk.models.operations.TestnetGetStatusResponse testnetGetStatus(openapisdk.models.operations.TestnetGetStatusRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/testnet/ins/status");
        
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

        openapisdk.models.operations.TestnetGetStatusResponse res = new openapisdk.models.operations.TestnetGetStatusResponse() {{
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
     * testnetGetSync - Get node sync status
     *
     * Returns information on the node's sync progress
    **/
    public openapisdk.models.operations.TestnetGetSyncResponse testnetGetSync() throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/testnet/ins/sync");
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.TestnetGetSyncResponse res = new openapisdk.models.operations.TestnetGetSyncResponse() {{
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
     * testnetGetTx - Returns transaction object
     *
     * Returns NEBL transaction object representing a NEBL transaction
    **/
    public openapisdk.models.operations.TestnetGetTxResponse testnetGetTx(openapisdk.models.operations.TestnetGetTxRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/testnet/ins/tx/{txid}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.TestnetGetTxResponse res = new openapisdk.models.operations.TestnetGetTxResponse() {{
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
     * testnetGetTxs - Get transactions by block or address
     *
     * Returns all transactions by block or address
    **/
    public openapisdk.models.operations.TestnetGetTxsResponse testnetGetTxs(openapisdk.models.operations.TestnetGetTxsRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/testnet/ins/txs");
        
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

        openapisdk.models.operations.TestnetGetTxsResponse res = new openapisdk.models.operations.TestnetGetTxsResponse() {{
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
     * testnetSendTx - Broadcasts a signed raw transaction to the network (not NTP1 specific)
     *
     * Broadcasts a signed raw transaction to the network. If successful returns the txid of the broadcast trasnaction.
     * 
    **/
    public openapisdk.models.operations.TestnetSendTxResponse testnetSendTx(openapisdk.models.operations.TestnetSendTxRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/testnet/ins/tx/send");
        
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

        openapisdk.models.operations.TestnetSendTxResponse res = new openapisdk.models.operations.TestnetSendTxResponse() {{
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