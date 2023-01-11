import { AxiosInstance, AxiosRequestConfig, AxiosResponse, ParamsSerializerOptions } from "axios";
import * as operations from "./models/operations";
import * as utils from "../internal/utils";

export class Insight {
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
   * getAddress - Returns address object
   *
   * Returns NEBL address object containing information on a specific address
  **/
  getAddress(
    req: operations.GetAddressRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetAddressResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetAddressRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/ins/addr/{address}", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    
    const r = client.request({
      url: url,
      method: "get",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetAddressResponse = {statusCode: httpRes.status, contentType: contentType};
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
   * getAddressBalance - Returns address balance in sats
   *
   * Returns NEBL address balance in satoshis
  **/
  getAddressBalance(
    req: operations.GetAddressBalanceRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetAddressBalanceResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetAddressBalanceRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/ins/addr/{address}/balance", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    
    const r = client.request({
      url: url,
      method: "get",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetAddressBalanceResponse = {statusCode: httpRes.status, contentType: contentType};
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
   * getAddressTotalReceived - Returns total received by address in sats
   *
   * Returns total NEBL received by address in satoshis
  **/
  getAddressTotalReceived(
    req: operations.GetAddressTotalReceivedRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetAddressTotalReceivedResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetAddressTotalReceivedRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/ins/addr/{address}/totalReceived", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    
    const r = client.request({
      url: url,
      method: "get",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetAddressTotalReceivedResponse = {statusCode: httpRes.status, contentType: contentType};
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
   * getAddressTotalSent - Returns total sent by address in sats
   *
   * Returns total NEBL sent by address in satoshis
  **/
  getAddressTotalSent(
    req: operations.GetAddressTotalSentRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetAddressTotalSentResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetAddressTotalSentRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/ins/addr/{address}/totalSent", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    
    const r = client.request({
      url: url,
      method: "get",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetAddressTotalSentResponse = {statusCode: httpRes.status, contentType: contentType};
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
   * getAddressUnconfirmedBalance - Returns address unconfirmed balance in sats
   *
   * Returns NEBL address unconfirmed balance in satoshis
  **/
  getAddressUnconfirmedBalance(
    req: operations.GetAddressUnconfirmedBalanceRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetAddressUnconfirmedBalanceResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetAddressUnconfirmedBalanceRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/ins/addr/{address}/unconfirmedBalance", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    
    const r = client.request({
      url: url,
      method: "get",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetAddressUnconfirmedBalanceResponse = {statusCode: httpRes.status, contentType: contentType};
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
   * getAddressUtxos - Returns all UTXOs at a given address
   *
   * Returns information on each Unspent Transaction Output contained at an address
  **/
  getAddressUtxos(
    req: operations.GetAddressUtxosRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetAddressUtxosResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetAddressUtxosRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/ins/addr/{address}/utxo", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    
    const r = client.request({
      url: url,
      method: "get",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetAddressUtxosResponse = {statusCode: httpRes.status, contentType: contentType};
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
   * getBlock - Returns information regarding a Neblio block
   *
   * Returns blockchain data for a given block based upon the block hash
  **/
  getBlock(
    req: operations.GetBlockRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetBlockResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetBlockRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/ins/block/{blockhash}", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    
    const r = client.request({
      url: url,
      method: "get",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetBlockResponse = {statusCode: httpRes.status, contentType: contentType};
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
   * getBlockIndex - Returns block hash of block
   *
   * Returns the block hash of a block at a given block index
  **/
  getBlockIndex(
    req: operations.GetBlockIndexRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetBlockIndexResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetBlockIndexRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/ins/block-index/{blockindex}", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    
    const r = client.request({
      url: url,
      method: "get",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetBlockIndexResponse = {statusCode: httpRes.status, contentType: contentType};
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
   * getRawTx - Returns raw transaction hex
   *
   * Returns raw transaction hex representing a NEBL transaction
  **/
  getRawTx(
    req: operations.GetRawTxRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetRawTxResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetRawTxRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/ins/rawtx/{txid}", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    
    const r = client.request({
      url: url,
      method: "get",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetRawTxResponse = {statusCode: httpRes.status, contentType: contentType};
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
   * getStatus - Utility API for calling several blockchain node functions
   *
   * Utility API for calling several blockchain node functions - getInfo, getDifficulty, getBestBlockHash, getLastBlockHash
  **/
  getStatus(
    req: operations.GetStatusRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetStatusResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetStatusRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/ins/status";
    
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
        const res: operations.GetStatusResponse = {statusCode: httpRes.status, contentType: contentType};
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
   * getSync - Get node sync status
   *
   * Returns information on the node's sync progress
  **/
  getSync(
    config?: AxiosRequestConfig
  ): Promise<operations.GetSyncResponse> {
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/ins/sync";
    
    const client: AxiosInstance = this._defaultClient!;
    
    const r = client.request({
      url: url,
      method: "get",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetSyncResponse = {statusCode: httpRes.status, contentType: contentType};
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
   * getTx - Returns transaction object
   *
   * Returns NEBL transaction object representing a NEBL transaction
  **/
  getTx(
    req: operations.GetTxRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetTxResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetTxRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/ins/tx/{txid}", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    
    const r = client.request({
      url: url,
      method: "get",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetTxResponse = {statusCode: httpRes.status, contentType: contentType};
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
   * getTxs - Get transactions by block or address
   *
   * Returns all transactions by block or address
  **/
  getTxs(
    req: operations.GetTxsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetTxsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetTxsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/ins/txs";
    
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
        const res: operations.GetTxsResponse = {statusCode: httpRes.status, contentType: contentType};
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
   * sendTx - Broadcasts a signed raw transaction to the network (not NTP1 specific)
   *
   * Broadcasts a signed raw transaction to the network. If successful returns the txid of the broadcast trasnaction.
   * 
  **/
  sendTx(
    req: operations.SendTxRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.SendTxResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.SendTxRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/ins/tx/send";

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
        const res: operations.SendTxResponse = {statusCode: httpRes.status, contentType: contentType};
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
