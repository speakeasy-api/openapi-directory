import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class ConnectionTypes {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Gets one connection type by ID.
     */
    dfareportingConnectionTypesGet(req: operations.DfareportingConnectionTypesGetRequest, security: operations.DfareportingConnectionTypesGetSecurity, config?: AxiosRequestConfig): Promise<operations.DfareportingConnectionTypesGetResponse>;
    /**
     * Retrieves a list of connection types.
     */
    dfareportingConnectionTypesList(req: operations.DfareportingConnectionTypesListRequest, security: operations.DfareportingConnectionTypesListSecurity, config?: AxiosRequestConfig): Promise<operations.DfareportingConnectionTypesListResponse>;
}
