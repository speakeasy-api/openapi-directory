import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Identities {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Returns the identity of the current user.
     *
     * @remarks
     * Returns the identity of the current user.
     */
    getAdministeredIdentitiesMe(config?: AxiosRequestConfig): Promise<operations.GetAdministeredIdentitiesMeResponse>;
}
