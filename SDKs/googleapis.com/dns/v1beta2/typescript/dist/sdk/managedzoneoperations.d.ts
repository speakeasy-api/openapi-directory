import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class ManagedZoneOperations {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Fetches the representation of an existing Operation.
     */
    dnsManagedZoneOperationsGet(req: operations.DnsManagedZoneOperationsGetRequest, security: operations.DnsManagedZoneOperationsGetSecurity, config?: AxiosRequestConfig): Promise<operations.DnsManagedZoneOperationsGetResponse>;
    /**
     * Enumerates Operations for the given ManagedZone.
     */
    dnsManagedZoneOperationsList(req: operations.DnsManagedZoneOperationsListRequest, security: operations.DnsManagedZoneOperationsListSecurity, config?: AxiosRequestConfig): Promise<operations.DnsManagedZoneOperationsListResponse>;
}
