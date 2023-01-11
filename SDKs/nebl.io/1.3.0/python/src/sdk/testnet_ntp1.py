import requests
from typing import Optional
from sdk.models import shared, operations
from . import utils

class TestnetNtp1:
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

    
    def testnet_broadcast_tx(self, request: operations.TestnetBroadcastTxRequest) -> operations.TestnetBroadcastTxResponse:
        r"""Broadcasts a signed raw transaction to the network
        Broadcasts a signed raw transaction to the network. If successful returns the txid of the broadcast trasnaction.
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/testnet/ntp1/broadcast"
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._client
        
        r = client.request("POST", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.TestnetBroadcastTxResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BroadcastTxResponse])
                res.broadcast_tx_response = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error])
                res.error = out

        return res

    
    def testnet_burn_token(self, request: operations.TestnetBurnTokenRequest) -> operations.TestnetBurnTokenResponse:
        r"""Builds a transaction that burns an NTP1 Token
        Builds an unsigned raw transaction that burns an NTP1 token on the Neblio blockchain.
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/testnet/ntp1/burntoken"
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._client
        
        r = client.request("POST", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.TestnetBurnTokenResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BurnTokenResponse])
                res.burn_token_response = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error])
                res.error = out

        return res

    
    def testnet_get_address_info(self, request: operations.TestnetGetAddressInfoRequest) -> operations.TestnetGetAddressInfoResponse:
        r"""Information On a Neblio Address
        Returns both NEBL and NTP1 token UTXOs held at the given address.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/testnet/ntp1/addressinfo/{address}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.TestnetGetAddressInfoResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GetAddressInfoResponse])
                res.get_address_info_response = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error])
                res.error = out

        return res

    
    def testnet_get_token_holders(self, request: operations.TestnetGetTokenHoldersRequest) -> operations.TestnetGetTokenHoldersResponse:
        r"""Get Addresses Holding a Token
        Returns the the the addresses holding a token and how many tokens are held
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/testnet/ntp1/stakeholders/{tokenid}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.TestnetGetTokenHoldersResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GetTokenHoldersResponse])
                res.get_token_holders_response = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error])
                res.error = out

        return res

    
    def testnet_get_token_id(self, request: operations.TestnetGetTokenIDRequest) -> operations.TestnetGetTokenIDResponse:
        r"""Returns the tokenId representing a token
        Translates a token symbol to a tokenId if a token exists with that symbol on the network
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/testnet/ntp1/tokenid/{tokensymbol}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.TestnetGetTokenIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GetTokenIDResponse])
                res.get_token_id_response = out

        return res

    
    def testnet_get_token_metadata(self, request: operations.TestnetGetTokenMetadataRequest) -> operations.TestnetGetTokenMetadataResponse:
        r"""Get Metadata of Token
        Returns the metadata associated with a token.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/testnet/ntp1/tokenmetadata/{tokenid}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.TestnetGetTokenMetadataResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GetTokenMetadataResponse])
                res.get_token_metadata_response = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error])
                res.error = out

        return res

    
    def testnet_get_token_metadata_of_utxo(self, request: operations.TestnetGetTokenMetadataOfUtxoRequest) -> operations.TestnetGetTokenMetadataOfUtxoResponse:
        r"""Get UTXO Metadata of Token
        Returns the metadata associated with a token for that specific utxo instead of the issuance transaction.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/testnet/ntp1/tokenmetadata/{tokenid}/{utxo}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.TestnetGetTokenMetadataOfUtxoResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GetTokenMetadataResponse])
                res.get_token_metadata_response = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error])
                res.error = out

        return res

    
    def testnet_get_transaction_info(self, request: operations.TestnetGetTransactionInfoRequest) -> operations.TestnetGetTransactionInfoResponse:
        r"""Information On an NTP1 Transaction
        Returns detailed information regarding an NTP1 transaction.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/testnet/ntp1/transactioninfo/{txid}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.TestnetGetTransactionInfoResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GetTransactionInfoResponse])
                res.get_transaction_info_response = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error])
                res.error = out

        return res

    
    def testnet_issue_token(self, request: operations.TestnetIssueTokenRequest) -> operations.TestnetIssueTokenResponse:
        r"""Builds a transaction that issues a new NTP1 Token
        Builds an unsigned raw transaction that issues a new NTP1 token on the Neblio blockchain.
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/testnet/ntp1/issue"
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._client
        
        r = client.request("POST", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.TestnetIssueTokenResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.IssueTokenResponse])
                res.issue_token_response = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error])
                res.error = out

        return res

    
    def testnet_send_token(self, request: operations.TestnetSendTokenRequest) -> operations.TestnetSendTokenResponse:
        r"""Builds a transaction that sends an NTP1 Token
        Builds an unsigned raw transaction that sends an NTP1 token on the Neblio blockchain.
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/testnet/ntp1/sendtoken"
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._client
        
        r = client.request("POST", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.TestnetSendTokenResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.SendTokenResponse])
                res.send_token_response = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error])
                res.error = out

        return res

    