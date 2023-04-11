import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Spin {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Returns spins optionally filtered by {start} and/or {end} datetimes
     *
     * @remarks
     * Get Spins optionally filtered by a datetime range. Only past Spins will be returned.
     *
     */
    getSpins(req: operations.GetSpinsRequest, config?: AxiosRequestConfig): Promise<operations.GetSpinsResponse>;
    /**
     * Get a Spin by id
     */
    getSpinsId(req: operations.GetSpinsIdRequest, config?: AxiosRequestConfig): Promise<operations.GetSpinsIdResponse>;
    /**
     * Log a Spin
     *
     * @remarks
     * An endpoint for automation systems to log spins into the spin table.
     */
    postSpins(req: operations.PostSpinsRequestBody, config?: AxiosRequestConfig): Promise<operations.PostSpinsResponse>;
}
