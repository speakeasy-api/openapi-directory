import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import * as operations from "./models/operations";
import * as utils from "../internal/utils";

export class ImageRegionProposalApi {
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
   * getImageRegionProposals - Get region proposals for an image. Returns empty array if no proposals are found.
   *
   * This API will get region proposals for an image along with confidences for the region. It returns an empty array if no proposals are found.
  **/
  getImageRegionProposals(
    req: operations.GetImageRegionProposalsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetImageRegionProposalsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetImageRegionProposalsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/{projectId}/images/{imageId}/regionproposals", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    const headers = {...utils.getHeadersFromRequest(req.headers), ...config?.headers};
    
    const r = client.request({
      url: url,
      method: "post",
      headers: headers,
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetImageRegionProposalsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.imageRegionProposal = httpRes?.data;
            }
            if (utils.matchContentType(contentType, `text/json`)) {
                res.imageRegionProposal = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

}
