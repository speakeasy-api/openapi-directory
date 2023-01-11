import { AxiosInstance, AxiosRequestConfig, AxiosResponse, ParamsSerializerOptions } from "axios";
import * as operations from "./models/operations";
import * as utils from "../internal/utils";

export class TestnetNtp1 {
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
   * testnetBroadcastTx - Broadcasts a signed raw transaction to the network
   *
   * Broadcasts a signed raw transaction to the network. If successful returns the txid of the broadcast trasnaction.
   * 
  **/
  testnetBroadcastTx(
    req: operations.TestnetBroadcastTxRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.TestnetBroadcastTxResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.TestnetBroadcastTxRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/testnet/ntp1/broadcast";

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
        const res: operations.TestnetBroadcastTxResponse = {statusCode: httpRes.status, contentType: contentType};
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

  
  /**
   * testnetBurnToken - Builds a transaction that burns an NTP1 Token
   *
   * Builds an unsigned raw transaction that burns an NTP1 token on the Neblio blockchain.
   * 
  **/
  testnetBurnToken(
    req: operations.TestnetBurnTokenRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.TestnetBurnTokenResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.TestnetBurnTokenRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/testnet/ntp1/burntoken";

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
        const res: operations.TestnetBurnTokenResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.burnTokenResponse = httpRes?.data;
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

  
  /**
   * testnetGetAddressInfo - Information On a Neblio Address
   *
   * Returns both NEBL and NTP1 token UTXOs held at the given address.
   * 
  **/
  testnetGetAddressInfo(
    req: operations.TestnetGetAddressInfoRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.TestnetGetAddressInfoResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.TestnetGetAddressInfoRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/testnet/ntp1/addressinfo/{address}", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    
    const r = client.request({
      url: url,
      method: "get",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.TestnetGetAddressInfoResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.getAddressInfoResponse = httpRes?.data;
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

  
  /**
   * testnetGetTokenHolders - Get Addresses Holding a Token
   *
   * Returns the the the addresses holding a token and how many tokens are held
   * 
  **/
  testnetGetTokenHolders(
    req: operations.TestnetGetTokenHoldersRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.TestnetGetTokenHoldersResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.TestnetGetTokenHoldersRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/testnet/ntp1/stakeholders/{tokenid}", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    
    const r = client.request({
      url: url,
      method: "get",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.TestnetGetTokenHoldersResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.getTokenHoldersResponse = httpRes?.data;
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

  
  /**
   * testnetGetTokenId - Returns the tokenId representing a token
   *
   * Translates a token symbol to a tokenId if a token exists with that symbol on the network
   * 
  **/
  testnetGetTokenId(
    req: operations.TestnetGetTokenIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.TestnetGetTokenIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.TestnetGetTokenIdRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/testnet/ntp1/tokenid/{tokensymbol}", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    
    const r = client.request({
      url: url,
      method: "get",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.TestnetGetTokenIdResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.getTokenIdResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * testnetGetTokenMetadata - Get Metadata of Token
   *
   * Returns the metadata associated with a token.
   * 
  **/
  testnetGetTokenMetadata(
    req: operations.TestnetGetTokenMetadataRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.TestnetGetTokenMetadataResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.TestnetGetTokenMetadataRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/testnet/ntp1/tokenmetadata/{tokenid}", req.pathParams);
    
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
        const res: operations.TestnetGetTokenMetadataResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.getTokenMetadataResponse = httpRes?.data;
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

  
  /**
   * testnetGetTokenMetadataOfUtxo - Get UTXO Metadata of Token
   *
   * Returns the metadata associated with a token for that specific utxo instead of the issuance transaction.
   * 
  **/
  testnetGetTokenMetadataOfUtxo(
    req: operations.TestnetGetTokenMetadataOfUtxoRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.TestnetGetTokenMetadataOfUtxoResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.TestnetGetTokenMetadataOfUtxoRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/testnet/ntp1/tokenmetadata/{tokenid}/{utxo}", req.pathParams);
    
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
        const res: operations.TestnetGetTokenMetadataOfUtxoResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.getTokenMetadataResponse = httpRes?.data;
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

  
  /**
   * testnetGetTransactionInfo - Information On an NTP1 Transaction
   *
   * Returns detailed information regarding an NTP1 transaction.
   * 
  **/
  testnetGetTransactionInfo(
    req: operations.TestnetGetTransactionInfoRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.TestnetGetTransactionInfoResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.TestnetGetTransactionInfoRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/testnet/ntp1/transactioninfo/{txid}", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    
    const r = client.request({
      url: url,
      method: "get",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.TestnetGetTransactionInfoResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.getTransactionInfoResponse = httpRes?.data;
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

  
  /**
   * testnetIssueToken - Builds a transaction that issues a new NTP1 Token
   *
   * Builds an unsigned raw transaction that issues a new NTP1 token on the Neblio blockchain.
   * 
  **/
  testnetIssueToken(
    req: operations.TestnetIssueTokenRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.TestnetIssueTokenResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.TestnetIssueTokenRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/testnet/ntp1/issue";

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
        const res: operations.TestnetIssueTokenResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.issueTokenResponse = httpRes?.data;
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

  
  /**
   * testnetSendToken - Builds a transaction that sends an NTP1 Token
   *
   * Builds an unsigned raw transaction that sends an NTP1 token on the Neblio blockchain.
   * 
  **/
  testnetSendToken(
    req: operations.TestnetSendTokenRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.TestnetSendTokenResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.TestnetSendTokenRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/testnet/ntp1/sendtoken";

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
        const res: operations.TestnetSendTokenResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.sendTokenResponse = httpRes?.data;
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
