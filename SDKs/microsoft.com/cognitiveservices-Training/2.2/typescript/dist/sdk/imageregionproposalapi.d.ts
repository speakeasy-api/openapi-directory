import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class ImageRegionProposalApi {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * getImageRegionProposals - Get region proposals for an image. Returns empty array if no proposals are found.
     *
     * This API will get region proposals for an image along with confidences for the region. It returns an empty array if no proposals are found.
    **/
    getImageRegionProposals(req: operations.GetImageRegionProposalsRequest, config?: AxiosRequestConfig): Promise<operations.GetImageRegionProposalsResponse>;
}
