import { AxiosInstance, AxiosRequestConfig, AxiosResponse, ParamsSerializerOptions } from "axios";
import * as operations from "./models/operations";
import * as utils from "../internal/utils";

export class Mart {
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
   * getMartCaseAssociationsResource - Bulk download of case associations
   *
   * NOTE: this route has a limiter on it, you may be restricted in the number of downloads per hour. Use carefully.
  **/
  getMartCaseAssociationsResource(
    req: operations.GetMartCaseAssociationsResourceRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetMartCaseAssociationsResourceResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetMartCaseAssociationsResourceRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/mart/case/{object_category}/{taxon}", req.pathParams);
    
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
        const res: operations.GetMartCaseAssociationsResourceResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            break;
        }

        return res;
      })
  }

  
  /**
   * getMartDiseaseAssociationsResource - Bulk download of disease associations
   *
   * NOTE: this route has a limiter on it, you may be restricted in the number of downloads per hour. Use carefully.
  **/
  getMartDiseaseAssociationsResource(
    req: operations.GetMartDiseaseAssociationsResourceRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetMartDiseaseAssociationsResourceResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetMartDiseaseAssociationsResourceRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/mart/disease/{object_category}/{taxon}", req.pathParams);
    
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
        const res: operations.GetMartDiseaseAssociationsResourceResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            break;
        }

        return res;
      })
  }

  
  /**
   * getMartGeneAssociationsResource - Bulk download of gene associations
   *
   * NOTE: this route has a limiter on it, you may be restricted in the number of downloads per hour. Use carefully.
  **/
  getMartGeneAssociationsResource(
    req: operations.GetMartGeneAssociationsResourceRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetMartGeneAssociationsResourceResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetMartGeneAssociationsResourceRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/mart/gene/{object_category}/{taxon}", req.pathParams);
    
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
        const res: operations.GetMartGeneAssociationsResourceResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            break;
        }

        return res;
      })
  }

  
  /**
   * getMartOrthologAssociationsResource - Bulk download of orthologs
  **/
  getMartOrthologAssociationsResource(
    req: operations.GetMartOrthologAssociationsResourceRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetMartOrthologAssociationsResourceResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetMartOrthologAssociationsResourceRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/mart/ortholog/{taxon1}/{taxon2}", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    
    const r = client.request({
      url: url,
      method: "get",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetMartOrthologAssociationsResourceResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            break;
        }

        return res;
      })
  }

  
  /**
   * getMartParalogAssociationsResource - Bulk download of paralogs
  **/
  getMartParalogAssociationsResource(
    req: operations.GetMartParalogAssociationsResourceRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetMartParalogAssociationsResourceResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetMartParalogAssociationsResourceRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/mart/paralog/{taxon1}/{taxon2}", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    
    const r = client.request({
      url: url,
      method: "get",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetMartParalogAssociationsResourceResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            break;
        }

        return res;
      })
  }

}
