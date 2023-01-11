import { AxiosInstance, AxiosRequestConfig, AxiosResponse, ParamsSerializerOptions } from "axios";
import * as operations from "./models/operations";
import * as utils from "../internal/utils";

export class Ontology {
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
   * getOntologySubset - Returns meta data of an ontology subset (slim)
  **/
  getOntologySubset(
    req: operations.GetOntologySubsetRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetOntologySubsetResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetOntologySubsetRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/ontology/subset/{id}", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    
    const r = client.request({
      url: url,
      method: "get",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetOntologySubsetResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            break;
        }

        return res;
      })
  }

  
  /**
   * getOntologyTerm - Returns meta data of an ontology term
  **/
  getOntologyTerm(
    req: operations.GetOntologyTermRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetOntologyTermResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetOntologyTermRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/ontology/term/{id}", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    
    const r = client.request({
      url: url,
      method: "get",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetOntologyTermResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            break;
        }

        return res;
      })
  }

  
  /**
   * getOntologyTermGraph - Returns graph of an ontology term
  **/
  getOntologyTermGraph(
    req: operations.GetOntologyTermGraphRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetOntologyTermGraphResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetOntologyTermGraphRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/ontology/term/{id}/graph", req.pathParams);
    
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
        const res: operations.GetOntologyTermGraphResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            break;
        }

        return res;
      })
  }

  
  /**
   * getOntologyTermSubgraph - Extract a subgraph from an ontology term
  **/
  getOntologyTermSubgraph(
    req: operations.GetOntologyTermSubgraphRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetOntologyTermSubgraphResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetOntologyTermSubgraphRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/ontology/term/{id}/subgraph", req.pathParams);
    
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
        const res: operations.GetOntologyTermSubgraphResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            break;
        }

        return res;
      })
  }

  
  /**
   * getOntologyTermSubsets - Returns subsets (slims) associated to an ontology term
  **/
  getOntologyTermSubsets(
    req: operations.GetOntologyTermSubsetsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetOntologyTermSubsetsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetOntologyTermSubsetsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/ontology/term/{id}/subsets", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    
    const r = client.request({
      url: url,
      method: "get",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetOntologyTermSubsetsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            break;
        }

        return res;
      })
  }

  
  /**
   * getOntologyTermsSharedAncestor - Returns the ancestor ontology terms shared by two ontology terms
  **/
  getOntologyTermsSharedAncestor(
    req: operations.GetOntologyTermsSharedAncestorRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetOntologyTermsSharedAncestorResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetOntologyTermsSharedAncestorRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/ontology/shared/{subject}/{object}", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    
    const r = client.request({
      url: url,
      method: "get",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetOntologyTermsSharedAncestorResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            break;
        }

        return res;
      })
  }

}
