import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class StreetsInAWard {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Returns all streets in a ward
     *
     * @remarks
     * Returns all streets in a specified ward and ward postcode
     */
    streetsInAWard(req: operations.StreetsInAWardRequest, config?: AxiosRequestConfig): Promise<operations.StreetsInAWardResponse>;
}
