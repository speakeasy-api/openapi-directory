import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class ImageRegionProposalApi {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Get region proposals for an image. Returns empty array if no proposals are found.
     *
     * @remarks
     * This API will get region proposals for an image along with confidences for the region. It returns an empty array if no proposals are found.
     */
    getImageRegionProposals(req: operations.GetImageRegionProposalsRequest, config?: AxiosRequestConfig): Promise<operations.GetImageRegionProposalsResponse>;
}
