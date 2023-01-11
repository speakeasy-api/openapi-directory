import requests
from typing import Any,Optional
from sdk.models import shared, operations
from . import utils

class Insight:
    _client: requests.Session
    _security_client: requests.Session
    _server_url: str
    _language: str
    _sdk_version: str
    _gen_version: str

    def __init__(self, client: requests.Session, security_client: requests.Session, server_url: str, language: str, sdk_version: str, gen_version: str) -> None:
        self._client = client
        self._security_client = security_client
        self._server_url = server_url
        self._language = language
        self._sdk_version = sdk_version
        self._gen_version = gen_version

    
    def get_address(self, request: operations.GetAddressRequest) -> operations.GetAddressResponse:
        r"""Returns address object
        Returns NEBL address object containing information on a specific address
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/ins/addr/{address}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetAddressResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GetAddressResponse])
                res.get_address_response = out

        return res

    
    def get_address_balance(self, request: operations.GetAddressBalanceRequest) -> operations.GetAddressBalanceResponse:
        r"""Returns address balance in sats
        Returns NEBL address balance in satoshis
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/ins/addr/{address}/balance", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetAddressBalanceResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[float])
                res.get_address_balance_response = out

        return res

    
    def get_address_total_received(self, request: operations.GetAddressTotalReceivedRequest) -> operations.GetAddressTotalReceivedResponse:
        r"""Returns total received by address in sats
        Returns total NEBL received by address in satoshis
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/ins/addr/{address}/totalReceived", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetAddressTotalReceivedResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[float])
                res.get_address_total_received_response = out

        return res

    
    def get_address_total_sent(self, request: operations.GetAddressTotalSentRequest) -> operations.GetAddressTotalSentResponse:
        r"""Returns total sent by address in sats
        Returns total NEBL sent by address in satoshis
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/ins/addr/{address}/totalSent", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetAddressTotalSentResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[float])
                res.get_address_total_sent_response = out

        return res

    
    def get_address_unconfirmed_balance(self, request: operations.GetAddressUnconfirmedBalanceRequest) -> operations.GetAddressUnconfirmedBalanceResponse:
        r"""Returns address unconfirmed balance in sats
        Returns NEBL address unconfirmed balance in satoshis
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/ins/addr/{address}/unconfirmedBalance", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetAddressUnconfirmedBalanceResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[float])
                res.get_address_unconfirmed_balance_response = out

        return res

    
    def get_address_utxos(self, request: operations.GetAddressUtxosRequest) -> operations.GetAddressUtxosResponse:
        r"""Returns all UTXOs at a given address
        Returns information on each Unspent Transaction Output contained at an address
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/ins/addr/{address}/utxo", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetAddressUtxosResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[list[shared.GetAddressUtxosResponse]])
                res.get_address_utxos_response = out

        return res

    
    def get_block(self, request: operations.GetBlockRequest) -> operations.GetBlockResponse:
        r"""Returns information regarding a Neblio block
        Returns blockchain data for a given block based upon the block hash
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/ins/block/{blockhash}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetBlockResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GetBlockResponse])
                res.get_block_response = out

        return res

    
    def get_block_index(self, request: operations.GetBlockIndexRequest) -> operations.GetBlockIndexResponse:
        r"""Returns block hash of block
        Returns the block hash of a block at a given block index
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/ins/block-index/{blockindex}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetBlockIndexResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GetBlockIndexResponse])
                res.get_block_index_response = out

        return res

    
    def get_raw_tx(self, request: operations.GetRawTxRequest) -> operations.GetRawTxResponse:
        r"""Returns raw transaction hex
        Returns raw transaction hex representing a NEBL transaction
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/ins/rawtx/{txid}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetRawTxResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GetRawTxResponse])
                res.get_raw_tx_response = out

        return res

    
    def get_status(self, request: operations.GetStatusRequest) -> operations.GetStatusResponse:
        r"""Utility API for calling several blockchain node functions
        Utility API for calling several blockchain node functions - getInfo, getDifficulty, getBestBlockHash, getLastBlockHash
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/ins/status"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetStatusResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_status_response = out

        return res

    
    def get_sync(self) -> operations.GetSyncResponse:
        r"""Get node sync status
        Returns information on the node's sync progress
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/ins/sync"
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetSyncResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GetSyncResponse])
                res.get_sync_response = out

        return res

    
    def get_tx(self, request: operations.GetTxRequest) -> operations.GetTxResponse:
        r"""Returns transaction object
        Returns NEBL transaction object representing a NEBL transaction
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/ins/tx/{txid}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetTxResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GetTxResponse])
                res.get_tx_response = out

        return res

    
    def get_txs(self, request: operations.GetTxsRequest) -> operations.GetTxsResponse:
        r"""Get transactions by block or address
        Returns all transactions by block or address
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/ins/txs"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetTxsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GetTxsResponse])
                res.get_txs_response = out

        return res

    
    def send_tx(self, request: operations.SendTxRequest) -> operations.SendTxResponse:
        r"""Broadcasts a signed raw transaction to the network (not NTP1 specific)
        Broadcasts a signed raw transaction to the network. If successful returns the txid of the broadcast trasnaction.
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/ins/tx/send"
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._client
        
        r = client.request("POST", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.SendTxResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BroadcastTxResponse])
                res.broadcast_tx_response = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error])
                res.error = out

        return res

    