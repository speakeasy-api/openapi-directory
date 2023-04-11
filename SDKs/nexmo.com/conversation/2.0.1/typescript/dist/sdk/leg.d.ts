import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * A leg can be a video call, IP call, or PSTN call that users participate in using multiple platforms. With this endpoint you can retrieve the details about all of the legs that took place in your application.
 */
export declare class Leg {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Delete a leg
     */
    deleteLeg(req: operations.DeleteLegRequest, config?: AxiosRequestConfig): Promise<operations.DeleteLegResponse>;
    /**
     * List legs
     */
    listLegs(config?: AxiosRequestConfig): Promise<operations.ListLegsResponse>;
}
