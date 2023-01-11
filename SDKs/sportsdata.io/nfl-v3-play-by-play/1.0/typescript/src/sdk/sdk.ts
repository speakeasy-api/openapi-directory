import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import * as operations from "./models/operations";
import * as utils from "../internal/utils";
import { Security } from "./models/shared";




export const ServerList = [
	"http://api.sportsdata.io",
	"https://api.sportsdata.io",
	"http://azure-api.sportsdata.io",
	"https://azure-api.sportsdata.io",
] as const;



export type SDKProps = {
  defaultClient?: AxiosInstance;

  security?: Security;

  serverUrl?: string;
}


export class SDK {

  public _defaultClient: AxiosInstance;
  public _securityClient: AxiosInstance;
  public _serverURL: string;
  private _language = "typescript";
  private _sdkVersion = "0.0.1";
  private _genVersion = "internal";

  constructor(props: SDKProps) {
    this._serverURL = props.serverUrl ?? ServerList[0];

    this._defaultClient = props.defaultClient ?? axios.create({ baseURL: this._serverURL });
    if (props.security) {
      let security: Security = props.security;
      if (!(props.security instanceof utils.SpeakeasyBase))
        security = new Security(props.security);
      this._securityClient = utils.createSecurityClient(
        this._defaultClient,
        security
      );
    } else {
      this._securityClient = this._defaultClient;
    }
    
  }
  
  /**
   * playByPlay - Play By Play
  **/
  playByPlay(
    req: operations.PlayByPlayRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PlayByPlayResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PlayByPlayRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/{format}/PlayByPlay/{season}/{week}/{hometeam}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    
    const r = client.request({
      url: url,
      method: "get",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.PlayByPlayResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.playByPlay = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * playByPlayDelta - Play By Play Delta
  **/
  playByPlayDelta(
    req: operations.PlayByPlayDeltaRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PlayByPlayDeltaResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PlayByPlayDeltaRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/{format}/PlayByPlayDelta/{season}/{week}/{minutes}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    
    const r = client.request({
      url: url,
      method: "get",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.PlayByPlayDeltaResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.playByPlays = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * playByPlaySimulation - Play By Play Simulation
   *
   * Gets simulated live play-by-play of NFL games, covering the Conference Championship games on January 21, 2018.
  **/
  playByPlaySimulation(
    req: operations.PlayByPlaySimulationRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PlayByPlaySimulationResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PlayByPlaySimulationRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/{format}/SimulatedPlayByPlay/{numberofplays}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    
    const r = client.request({
      url: url,
      method: "get",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.PlayByPlaySimulationResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.playByPlays = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

}