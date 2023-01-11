import { AxiosInstance, AxiosRequestConfig, AxiosResponse, ParamsSerializerOptions } from "axios";
import * as operations from "./models/operations";
import * as utils from "../internal/utils";

export class Copyrights {
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
   * getMapVersionNumberCopyrightsFormat - Copyrights whole world
   *
   * The Copyrights API returns copyright information for
   * the Maps API Raster Tile Service in JSON, JSONP, or XML format.
   * This call returns copyright information for the whole world.
  **/
  getMapVersionNumberCopyrightsFormat(
    req: operations.GetMapVersionNumberCopyrightsFormatRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetMapVersionNumberCopyrightsFormatResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetMapVersionNumberCopyrightsFormatRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/map/{versionNumber}/copyrights.{format}", req.pathParams);
    
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
        const res: operations.GetMapVersionNumberCopyrightsFormatResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            break;
          case httpRes?.status == 304:
            break;
          case httpRes?.status == 400:
            break;
          case httpRes?.status == 403:
            break;
          case httpRes?.status == 410:
            break;
          case httpRes?.status == 500:
            break;
        }

        return res;
      })
  }

  
  /**
   * getMapVersionNumberCopyrightsCaptionFormat - Captions
   *
   * This API returns copyright captions for the map service.
  **/
  getMapVersionNumberCopyrightsCaptionFormat(
    req: operations.GetMapVersionNumberCopyrightsCaptionFormatRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetMapVersionNumberCopyrightsCaptionFormatResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetMapVersionNumberCopyrightsCaptionFormatRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/map/{versionNumber}/copyrights/caption.{format}", req.pathParams);
    
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
        const res: operations.GetMapVersionNumberCopyrightsCaptionFormatResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            break;
          case httpRes?.status == 304:
            break;
          case httpRes?.status == 400:
            break;
          case httpRes?.status == 403:
            break;
          case httpRes?.status == 410:
            break;
          case httpRes?.status == 500:
            break;
        }

        return res;
      })
  }

  
  /**
   * getMapVersionNumberCopyrightsMinLonMinLatMaxLonMaxLatFormat - Copyrights bounding box
   *
   * The Copyrights API returns copyright information for
   * the Maps API Raster Tile Service in JSON, JSONP, or XML format.
   * This call returns copyright information for a specific bounding box.
  **/
  getMapVersionNumberCopyrightsMinLonMinLatMaxLonMaxLatFormat(
    req: operations.GetMapVersionNumberCopyrightsMinLonMinLatMaxLonMaxLatFormatRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetMapVersionNumberCopyrightsMinLonMinLatMaxLonMaxLatFormatResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetMapVersionNumberCopyrightsMinLonMinLatMaxLonMaxLatFormatRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/map/{versionNumber}/copyrights/{minLon}/{minLat}/{maxLon}/{maxLat}.{format}", req.pathParams);
    
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
        const res: operations.GetMapVersionNumberCopyrightsMinLonMinLatMaxLonMaxLatFormatResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            break;
          case httpRes?.status == 304:
            break;
          case httpRes?.status == 400:
            break;
          case httpRes?.status == 401:
            break;
          case httpRes?.status == 403:
            break;
          case httpRes?.status == 410:
            break;
          case httpRes?.status == 500:
            break;
        }

        return res;
      })
  }

  
  /**
   * getMapVersionNumberCopyrightsZoomXYFormat - Copyrights tile
   *
   * The Copyrights API returns copyright information for
   * the Maps API Raster Tile Service in JSON, JSONP, or XML format.
   * This call returns copyright information for the a specific map tile.
  **/
  getMapVersionNumberCopyrightsZoomXYFormat(
    req: operations.GetMapVersionNumberCopyrightsZoomXyFormatRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetMapVersionNumberCopyrightsZoomXyFormatResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetMapVersionNumberCopyrightsZoomXyFormatRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/map/{versionNumber}/copyrights/{zoom}/{X}/{Y}.{format}", req.pathParams);
    
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
        const res: operations.GetMapVersionNumberCopyrightsZoomXyFormatResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            break;
          case httpRes?.status == 304:
            break;
          case httpRes?.status == 400:
            break;
          case httpRes?.status == 401:
            break;
          case httpRes?.status == 403:
            break;
          case httpRes?.status == 410:
            break;
          case httpRes?.status == 500:
            break;
        }

        return res;
      })
  }

}
