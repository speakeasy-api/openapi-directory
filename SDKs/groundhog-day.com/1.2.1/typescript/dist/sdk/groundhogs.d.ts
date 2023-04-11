import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Groundhogs {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Get a groundhog by slug
     *
     * @remarks
     * Returns a prognosticating animal and its known predictions.
     */
    groundhog(req: operations.GroundhogRequest, config?: AxiosRequestConfig): Promise<operations.GroundhogResponse>;
    /**
     * Get all groundhogs
     *
     * @remarks
     * Returns all prognosticating animals with their known predictions.
     */
    groundhogs(req: operations.GroundhogsRequest, config?: AxiosRequestConfig): Promise<operations.GroundhogsResponse>;
}
