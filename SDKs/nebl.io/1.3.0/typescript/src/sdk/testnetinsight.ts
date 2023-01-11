import { AxiosInstance, AxiosRequestConfig, AxiosResponse, ParamsSerializerOptions } from "axios";
import * as operations from "./models/operations";
import * as utils from "../internal/utils";

export class TestnetInsight {
  _defaultClient: AxiosInstance;
  _securityClient: AxiosInstance;
  _serverURL: string;
  _language: string;
  _sdkVersion: string;
  _genVersion: string;

  constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string) {
    this._defaultClient = defaultClient;
    this._securityClient = securityClient;
    this._serverURL = serverURL;
    this._language = language;
    this._sdkVersion = sdkVersion;
    this._genVersion = genVersion;
  }
  
  /**
   * testnetGetAddress - Returns address object
   *
   * Returns NEBL address object containing information on a specific address
  **/
  testnetGetAddress(
    req: operations.TestnetGetAddressRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.TestnetGetAddressResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.TestnetGetAddressRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/testnet/ins/addr/{address}", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    
    const r = client.request({
      url: url,
      method: "get",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.TestnetGetAddressResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.getAddressResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * testnetGetAddressBalance - Returns address balance in sats
   *
   * Returns NEBL address balance in satoshis
  **/
  testnetGetAddressBalance(
    req: operations.TestnetGetAddressBalanceRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.TestnetGetAddressBalanceResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.TestnetGetAddressBalanceRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/testnet/ins/addr/{address}/balance", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    
    const r = client.request({
      url: url,
      method: "get",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.TestnetGetAddressBalanceResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.getAddressBalanceResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * testnetGetAddressTotalReceived - Returns total received by address in sats
   *
   * Returns total NEBL received by address in satoshis
  **/
  testnetGetAddressTotalReceived(
    req: operations.TestnetGetAddressTotalReceivedRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.TestnetGetAddressTotalReceivedResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.TestnetGetAddressTotalReceivedRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/testnet/ins/addr/{address}/totalReceived", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    
    const r = client.request({
      url: url,
      method: "get",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.TestnetGetAddressTotalReceivedResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.getAddressTotalReceivedResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * testnetGetAddressTotalSent - Returns total sent by address in sats
   *
   * Returns total NEBL sent by address in satoshis
  **/
  testnetGetAddressTotalSent(
    req: operations.TestnetGetAddressTotalSentRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.TestnetGetAddressTotalSentResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.TestnetGetAddressTotalSentRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/testnet/ins/addr/{address}/totalSent", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    
    const r = client.request({
      url: url,
      method: "get",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.TestnetGetAddressTotalSentResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.getAddressTotalSentResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * testnetGetAddressUnconfirmedBalance - Returns address unconfirmed balance in sats
   *
   * Returns NEBL address unconfirmed balance in satoshis
  **/
  testnetGetAddressUnconfirmedBalance(
    req: operations.TestnetGetAddressUnconfirmedBalanceRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.TestnetGetAddressUnconfirmedBalanceResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.TestnetGetAddressUnconfirmedBalanceRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/testnet/ins/addr/{address}/unconfirmedBalance", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    
    const r = client.request({
      url: url,
      method: "get",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.TestnetGetAddressUnconfirmedBalanceResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.getAddressUnconfirmedBalanceResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * testnetGetAddressUtxos - Returns all UTXOs at a given address
   *
   * Returns information on each Unspent Transaction Output contained at an address
  **/
  testnetGetAddressUtxos(
    req: operations.TestnetGetAddressUtxosRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.TestnetGetAddressUtxosResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.TestnetGetAddressUtxosRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/testnet/ins/addr/{address}/utxo", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    
    const r = client.request({
      url: url,
      method: "get",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.TestnetGetAddressUtxosResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.getAddressUtxosResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * testnetGetBlock - Returns information regarding a Neblio block
   *
   * Returns blockchain data for a given block based upon the block hash
  **/
  testnetGetBlock(
    req: operations.TestnetGetBlockRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.TestnetGetBlockResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.TestnetGetBlockRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/testnet/ins/block/{blockhash}", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    
    const r = client.request({
      url: url,
      method: "get",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.TestnetGetBlockResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.getBlockResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * testnetGetBlockIndex - Returns block hash of block
   *
   * Returns the block hash of a block at a given block index
  **/
  testnetGetBlockIndex(
    req: operations.TestnetGetBlockIndexRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.TestnetGetBlockIndexResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.TestnetGetBlockIndexRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/testnet/ins/block-index/{blockindex}", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    
    const r = client.request({
      url: url,
      method: "get",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.TestnetGetBlockIndexResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.getBlockIndexResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * testnetGetRawTx - Returns raw transaction hex
   *
   * Returns raw transaction hex representing a NEBL transaction
  **/
  testnetGetRawTx(
    req: operations.TestnetGetRawTxRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.TestnetGetRawTxResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.TestnetGetRawTxRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/testnet/ins/rawtx/{txid}", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    
    const r = client.request({
      url: url,
      method: "get",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.TestnetGetRawTxResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.getRawTxResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * testnetGetStatus - Utility API for calling several blockchain node functions
   *
   * Utility API for calling several blockchain node functions - getInfo, getDifficulty, getBestBlockHash, getLastBlockHash
  **/
  testnetGetStatus(
    req: operations.TestnetGetStatusRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.TestnetGetStatusResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.TestnetGetStatusRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/testnet/ins/status";
    
    const client: AxiosInstance = this._defaultClient!;
    const qpSerializer: ParamsSerializerOptions = utils.getQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    
    const r = client.request({
      url: url,
      method: "get",
      ...requestConfig,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.TestnetGetStatusResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.getStatusResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * testnetGetSync - Get node sync status
   *
   * Returns information on the node's sync progress
  **/
  testnetGetSync(
    config?: AxiosRequestConfig
  ): Promise<operations.TestnetGetSyncResponse> {
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/testnet/ins/sync";
    
    const client: AxiosInstance = this._defaultClient!;
    
    const r = client.request({
      url: url,
      method: "get",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.TestnetGetSyncResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.getSyncResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * testnetGetTx - Returns transaction object
   *
   * Returns NEBL transaction object representing a NEBL transaction
  **/
  testnetGetTx(
    req: operations.TestnetGetTxRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.TestnetGetTxResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.TestnetGetTxRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/testnet/ins/tx/{txid}", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    
    const r = client.request({
      url: url,
      method: "get",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.TestnetGetTxResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.getTxResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * testnetGetTxs - Get transactions by block or address
   *
   * Returns all transactions by block or address
  **/
  testnetGetTxs(
    req: operations.TestnetGetTxsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.TestnetGetTxsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.TestnetGetTxsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/testnet/ins/txs";
    
    const client: AxiosInstance = this._defaultClient!;
    const qpSerializer: ParamsSerializerOptions = utils.getQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    
    const r = client.request({
      url: url,
      method: "get",
      ...requestConfig,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.TestnetGetTxsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.getTxsResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * testnetSendTx - Broadcasts a signed raw transaction to the network (not NTP1 specific)
   *
   * Broadcasts a signed raw transaction to the network. If successful returns the txid of the broadcast trasnaction.
   * 
  **/
  testnetSendTx(
    req: operations.TestnetSendTxRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.TestnetSendTxResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.TestnetSendTxRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/testnet/ins/tx/send";

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.serializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._defaultClient!;
    const headers = {...reqBodyHeaders, ...config?.headers};
    if (reqBody == null || Object.keys(reqBody).length === 0) throw new Error("request body is required");
    
    const r = client.request({
      url: url,
      method: "post",
      headers: headers,
      data: reqBody, 
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.TestnetSendTxResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.broadcastTxResponse = httpRes?.data;
            }
            break;
          default:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

}
