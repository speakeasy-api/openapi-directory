import { AxiosInstance, AxiosRequestConfig, AxiosResponse, ParamsSerializerOptions } from "axios";
import * as operations from "./models/operations";
import * as utils from "../internal/utils";

export class Scrobbling {
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
   * getScrobbleShowsShowId - List watched and acquired episodes for a show
   *
   * This endpoint can be used by all users, even without premium
  **/
  getScrobbleShowsShowId(
    req: operations.GetScrobbleShowsShowIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetScrobbleShowsShowIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetScrobbleShowsShowIdRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/scrobble/shows/{show_id}", req.pathParams);
    
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
        const res: operations.GetScrobbleShowsShowIdResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.markedEpisodes = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * postScrobbleEpisodes - Mark episodes as acquired or watched based on their IDs
   *
   * This endpoint can be used by all users, even without premium
  **/
  postScrobbleEpisodes(
    req: operations.PostScrobbleEpisodesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostScrobbleEpisodesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostScrobbleEpisodesRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/scrobble/episodes";

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.serializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._securityClient!;
    
    const headers = {...reqBodyHeaders, ...config?.headers};
    
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
        const res: operations.PostScrobbleEpisodesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.bulkResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 207:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.bulkResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 422:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.bulkResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * postScrobbleShows - Mark episodes within a show as acquired or watched based on their attributes
   *
   * To specify a show, supply either `tvmaze_id`, `thetvdb_id` or `imdb_id`. To specify an episode, supply either both `season` and `episode`, or `airdate`.
   * 
   * This endpoint can be used by all users, even without premium.
   * 
  **/
  postScrobbleShows(
    req: operations.PostScrobbleShowsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostScrobbleShowsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostScrobbleShowsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/scrobble/shows";

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.serializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._securityClient!;
    
    const headers = {...reqBodyHeaders, ...config?.headers};
    const qpSerializer: ParamsSerializerOptions = utils.getQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    
    const r = client.request({
      url: url,
      method: "post",
      headers: headers,
      data: reqBody, 
      ...requestConfig,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.PostScrobbleShowsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.bulkResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 207:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.bulkResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 422:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.bulkResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * putScrobbleEpisodesEpisodeId - Mark an episode as acquired or watched based on its ID
   *
   * This endpoint can be used by all users, even without premium
  **/
  putScrobbleEpisodesEpisodeId(
    req: operations.PutScrobbleEpisodesEpisodeIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PutScrobbleEpisodesEpisodeIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PutScrobbleEpisodesEpisodeIdRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/scrobble/episodes/{episode_id}", req.pathParams);

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.serializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._securityClient!;
    
    const headers = {...reqBodyHeaders, ...config?.headers};
    
    const r = client.request({
      url: url,
      method: "put",
      headers: headers,
      data: reqBody, 
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.PutScrobbleEpisodesEpisodeIdResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.markedEpisode = httpRes?.data;
            }
            break;
          case httpRes?.status == 404:
            break;
          case httpRes?.status == 422:
            break;
        }

        return res;
      })
  }

}
