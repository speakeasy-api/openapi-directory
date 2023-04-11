import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class TravelTime {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Gets the TravelTime overlay.
     */
    travelTimeGetCompareOverlay(req: operations.TravelTimeGetCompareOverlayRequest, config?: AxiosRequestConfig): Promise<operations.TravelTimeGetCompareOverlayResponse>;
    /**
     * Gets the TravelTime overlay.
     */
    travelTimeGetOverlay(req: operations.TravelTimeGetOverlayRequest, config?: AxiosRequestConfig): Promise<operations.TravelTimeGetOverlayResponse>;
}
