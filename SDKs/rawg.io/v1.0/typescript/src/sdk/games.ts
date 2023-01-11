import { AxiosInstance, AxiosRequestConfig, AxiosResponse, ParamsSerializerOptions } from "axios";
import * as operations from "./models/operations";
import * as utils from "../internal/utils";

export class Games {
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
   * gamesAchievementsRead - Get a list of game achievements.
  **/
  gamesAchievementsRead(
    req: operations.GamesAchievementsReadRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GamesAchievementsReadResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GamesAchievementsReadRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/games/{id}/achievements", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    
    const r = client.request({
      url: url,
      method: "get",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GamesAchievementsReadResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.parentAchievement = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * gamesAdditionsList - Get a list of DLC's for the game, GOTY and other editions, companion apps, etc.
  **/
  gamesAdditionsList(
    req: operations.GamesAdditionsListRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GamesAdditionsListResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GamesAdditionsListRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/games/{game_pk}/additions", req.pathParams);
    
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
        const res: operations.GamesAdditionsListResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.gamesAdditionsList200ApplicationJSONObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * gamesDevelopmentTeamList - Get a list of individual creators that were part of the development team.
  **/
  gamesDevelopmentTeamList(
    req: operations.GamesDevelopmentTeamListRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GamesDevelopmentTeamListResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GamesDevelopmentTeamListRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/games/{game_pk}/development-team", req.pathParams);
    
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
        const res: operations.GamesDevelopmentTeamListResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.gamesDevelopmentTeamList200ApplicationJSONObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * gamesGameSeriesList - Get a list of games that are part of the same series.
  **/
  gamesGameSeriesList(
    req: operations.GamesGameSeriesListRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GamesGameSeriesListResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GamesGameSeriesListRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/games/{game_pk}/game-series", req.pathParams);
    
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
        const res: operations.GamesGameSeriesListResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.gamesGameSeriesList200ApplicationJSONObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * gamesList - Get a list of games.
  **/
  gamesList(
    req: operations.GamesListRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GamesListResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GamesListRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/games";
    
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
        const res: operations.GamesListResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.gamesList200ApplicationJSONObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * gamesMoviesRead - Get a list of game trailers.
  **/
  gamesMoviesRead(
    req: operations.GamesMoviesReadRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GamesMoviesReadResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GamesMoviesReadRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/games/{id}/movies", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    
    const r = client.request({
      url: url,
      method: "get",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GamesMoviesReadResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.movie = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * gamesParentGamesList - Get a list of parent games for DLC's and editions.
  **/
  gamesParentGamesList(
    req: operations.GamesParentGamesListRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GamesParentGamesListResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GamesParentGamesListRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/games/{game_pk}/parent-games", req.pathParams);
    
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
        const res: operations.GamesParentGamesListResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.gamesParentGamesList200ApplicationJSONObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * gamesRead - Get details of the game.
  **/
  gamesRead(
    req: operations.GamesReadRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GamesReadResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GamesReadRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/games/{id}", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    
    const r = client.request({
      url: url,
      method: "get",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GamesReadResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.gameSingle = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * gamesRedditRead - Get a list of most recent posts from the game's subreddit.
  **/
  gamesRedditRead(
    req: operations.GamesRedditReadRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GamesRedditReadResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GamesRedditReadRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/games/{id}/reddit", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    
    const r = client.request({
      url: url,
      method: "get",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GamesRedditReadResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.reddit = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * gamesScreenshotsList - Get screenshots for the game.
  **/
  gamesScreenshotsList(
    req: operations.GamesScreenshotsListRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GamesScreenshotsListResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GamesScreenshotsListRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/games/{game_pk}/screenshots", req.pathParams);
    
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
        const res: operations.GamesScreenshotsListResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.gamesScreenshotsList200ApplicationJSONObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * gamesStoresList - Get links to the stores that sell the game.
  **/
  gamesStoresList(
    req: operations.GamesStoresListRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GamesStoresListResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GamesStoresListRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/games/{game_pk}/stores", req.pathParams);
    
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
        const res: operations.GamesStoresListResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.gamesStoresList200ApplicationJSONObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * gamesSuggestedRead - Get a list of visually similar games, available only for business and enterprise API users.
  **/
  gamesSuggestedRead(
    req: operations.GamesSuggestedReadRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GamesSuggestedReadResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GamesSuggestedReadRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/games/{id}/suggested", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    
    const r = client.request({
      url: url,
      method: "get",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GamesSuggestedReadResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.gameSingle = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * gamesTwitchRead - Get streams on Twitch associated with the game, available only for business and enterprise API users.
  **/
  gamesTwitchRead(
    req: operations.GamesTwitchReadRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GamesTwitchReadResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GamesTwitchReadRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/games/{id}/twitch", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    
    const r = client.request({
      url: url,
      method: "get",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GamesTwitchReadResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.twitch = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * gamesYoutubeRead - Get videos from YouTube associated with the game, available only for business and enterprise API users.
  **/
  gamesYoutubeRead(
    req: operations.GamesYoutubeReadRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GamesYoutubeReadResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GamesYoutubeReadRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/games/{id}/youtube", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    
    const r = client.request({
      url: url,
      method: "get",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GamesYoutubeReadResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.youtube = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

}
