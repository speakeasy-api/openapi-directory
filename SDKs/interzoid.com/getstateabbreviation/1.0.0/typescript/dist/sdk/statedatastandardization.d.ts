import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class StateDataStandardization {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Gets a two-letter abbreviation for a state or province name data
     *
     * @remarks
     * Gets a two-letter abbreviation for a state or province given a permutation of state or province data.
     */
    getstateabbreviation(req: operations.GetstateabbreviationRequest, config?: AxiosRequestConfig): Promise<operations.GetstateabbreviationResponse>;
}
