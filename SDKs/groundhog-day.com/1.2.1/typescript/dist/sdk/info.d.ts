import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Info {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Root
     *
     * @remarks
     * Returns a welcome message.
     */
    root(config?: AxiosRequestConfig): Promise<operations.RootResponse>;
    /**
     * Get JSON schema
     *
     * @remarks
     * Gets the schema for the JSON API as a yaml file.
     */
    spec(config?: AxiosRequestConfig): Promise<operations.SpecResponse>;
}
