import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import * as operations from "./models/operations";
import * as utils from "../internal/utils";

export class OwlOntology {
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
   * getDlQuery - Placeholder - use OWLery for now
  **/
  getDlQuery(
    req: operations.GetDlQueryRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetDlQueryResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetDlQueryRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/owl/ontology/dlquery/{query}", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    
    const r = client.request({
      url: url,
      method: "get",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetDlQueryResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.associations = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * getSparqlQuery - Placeholder - use direct SPARQL endpoint for now
  **/
  getSparqlQuery(
    req: operations.GetSparqlQueryRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetSparqlQueryResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetSparqlQueryRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/owl/ontology/sparql/{query}", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    
    const r = client.request({
      url: url,
      method: "get",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetSparqlQueryResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.associations = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

}
