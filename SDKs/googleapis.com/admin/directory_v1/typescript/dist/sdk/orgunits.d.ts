import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Orgunits {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Removes an organizational unit.
     */
    directoryOrgunitsDelete(req: operations.DirectoryOrgunitsDeleteRequest, security: operations.DirectoryOrgunitsDeleteSecurity, config?: AxiosRequestConfig): Promise<operations.DirectoryOrgunitsDeleteResponse>;
    /**
     * Retrieves an organizational unit.
     */
    directoryOrgunitsGet(req: operations.DirectoryOrgunitsGetRequest, security: operations.DirectoryOrgunitsGetSecurity, config?: AxiosRequestConfig): Promise<operations.DirectoryOrgunitsGetResponse>;
    /**
     * Adds an organizational unit.
     */
    directoryOrgunitsInsert(req: operations.DirectoryOrgunitsInsertRequest, security: operations.DirectoryOrgunitsInsertSecurity, config?: AxiosRequestConfig): Promise<operations.DirectoryOrgunitsInsertResponse>;
    /**
     * Retrieves a list of all organizational units for an account.
     */
    directoryOrgunitsList(req: operations.DirectoryOrgunitsListRequest, security: operations.DirectoryOrgunitsListSecurity, config?: AxiosRequestConfig): Promise<operations.DirectoryOrgunitsListResponse>;
    /**
     * Updates an organizational unit. This method supports [patch semantics](/admin-sdk/directory/v1/guides/performance#patch)
     */
    directoryOrgunitsPatch(req: operations.DirectoryOrgunitsPatchRequest, security: operations.DirectoryOrgunitsPatchSecurity, config?: AxiosRequestConfig): Promise<operations.DirectoryOrgunitsPatchResponse>;
    /**
     * Updates an organizational unit.
     */
    directoryOrgunitsUpdate(req: operations.DirectoryOrgunitsUpdateRequest, security: operations.DirectoryOrgunitsUpdateSecurity, config?: AxiosRequestConfig): Promise<operations.DirectoryOrgunitsUpdateResponse>;
}
