import { AxiosInstance, AxiosRequestConfig, AxiosResponse, ParamsSerializerOptions } from "axios";
import * as operations from "./models/operations";
import * as utils from "../internal/utils";

export class WmsWmts {
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
   * getCapabilities - GetCapabilities
   *
   * The GetCapabilities call is part of TomTom's implementation of version 1.1.1
   * the Web Map Service (WMS). It provides descriptions of the other calls
   * that are available in the implementation.
  **/
  getCapabilities(
    req: operations.GetCapabilitiesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetCapabilitiesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetCapabilitiesRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/map/{versionNumber}/wms//", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
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
        const res: operations.GetCapabilitiesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            break;
          case httpRes?.status == 202:
            break;
          case httpRes?.status == 401:
            break;
          case httpRes?.status == 500:
            break;
        }

        return res;
      })
  }

  
  /**
   * getMap - GetMap
   *
   * The GetMap call implements the Web Map Service 1.1.1 standard
   * to access TomTom raster map tiles. This service is described
   * in the response to the GetCapabilities API call.
  **/
  getMap(
    req: operations.GetMapRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetMapResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetMapRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/map/{versionNumber}/wms/", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
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
        const res: operations.GetMapResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            break;
          case httpRes?.status == 202:
            break;
          case httpRes?.status == 401:
            break;
          case httpRes?.status == 500:
            break;
        }

        return res;
      })
  }

  
  /**
   * getMapVersionNumberWmtsKeyWmtsVersionWmtsCapabilitiesXml - WMTS
   *
   * The WMTS GetCapabilities call implements version 1.0.0 of
   * the <a href="http://www.opengeospatial.org/standards/wmts">Web Map Tile Service</a>
   * (WMTS) standard. It returns metadata that allows compatible calling systems to construct
   * calls to TomTom's raster map tile service. See the
   * <a href="/maps-api/maps-api-documentation-raster/wmts">documentation</a>
   * for more information on WMTS.
  **/
  getMapVersionNumberWmtsKeyWmtsVersionWmtsCapabilitiesXml(
    req: operations.GetMapVersionNumberWmtsKeyWmtsVersionWmtsCapabilitiesXmlRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetMapVersionNumberWmtsKeyWmtsVersionWmtsCapabilitiesXmlResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetMapVersionNumberWmtsKeyWmtsVersionWmtsCapabilitiesXmlRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/map/{versionNumber}/wmts/{key}/{wmtsVersion}/WMTSCapabilities.xml", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    
    const r = client.request({
      url: url,
      method: "get",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetMapVersionNumberWmtsKeyWmtsVersionWmtsCapabilitiesXmlResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            break;
          case httpRes?.status == 400:
            break;
          case httpRes?.status == 401:
            break;
          case httpRes?.status == 500:
            break;
        }

        return res;
      })
  }

}
