import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Projects {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Creates a new API key. NOTE: Key is a global resource; hence the only supported value for location is `global`.
     */
    apikeysProjectsLocationsKeysCreate(req: operations.ApikeysProjectsLocationsKeysCreateRequest, security: operations.ApikeysProjectsLocationsKeysCreateSecurity, config?: AxiosRequestConfig): Promise<operations.ApikeysProjectsLocationsKeysCreateResponse>;
    /**
     * Deletes an API key. Deleted key can be retrieved within 30 days of deletion. Afterward, key will be purged from the project. NOTE: Key is a global resource; hence the only supported value for location is `global`.
     */
    apikeysProjectsLocationsKeysDelete(req: operations.ApikeysProjectsLocationsKeysDeleteRequest, security: operations.ApikeysProjectsLocationsKeysDeleteSecurity, config?: AxiosRequestConfig): Promise<operations.ApikeysProjectsLocationsKeysDeleteResponse>;
    /**
     * Gets the metadata for an API key. The key string of the API key isn't included in the response. NOTE: Key is a global resource; hence the only supported value for location is `global`.
     */
    apikeysProjectsLocationsKeysGet(req: operations.ApikeysProjectsLocationsKeysGetRequest, security: operations.ApikeysProjectsLocationsKeysGetSecurity, config?: AxiosRequestConfig): Promise<operations.ApikeysProjectsLocationsKeysGetResponse>;
    /**
     * Get the key string for an API key. NOTE: Key is a global resource; hence the only supported value for location is `global`.
     */
    apikeysProjectsLocationsKeysGetKeyString(req: operations.ApikeysProjectsLocationsKeysGetKeyStringRequest, security: operations.ApikeysProjectsLocationsKeysGetKeyStringSecurity, config?: AxiosRequestConfig): Promise<operations.ApikeysProjectsLocationsKeysGetKeyStringResponse>;
    /**
     * Lists the API keys owned by a project. The key string of the API key isn't included in the response. NOTE: Key is a global resource; hence the only supported value for location is `global`.
     */
    apikeysProjectsLocationsKeysList(req: operations.ApikeysProjectsLocationsKeysListRequest, security: operations.ApikeysProjectsLocationsKeysListSecurity, config?: AxiosRequestConfig): Promise<operations.ApikeysProjectsLocationsKeysListResponse>;
    /**
     * Patches the modifiable fields of an API key. The key string of the API key isn't included in the response. NOTE: Key is a global resource; hence the only supported value for location is `global`.
     */
    apikeysProjectsLocationsKeysPatch(req: operations.ApikeysProjectsLocationsKeysPatchRequest, security: operations.ApikeysProjectsLocationsKeysPatchSecurity, config?: AxiosRequestConfig): Promise<operations.ApikeysProjectsLocationsKeysPatchResponse>;
    /**
     * Undeletes an API key which was deleted within 30 days. NOTE: Key is a global resource; hence the only supported value for location is `global`.
     */
    apikeysProjectsLocationsKeysUndelete(req: operations.ApikeysProjectsLocationsKeysUndeleteRequest, security: operations.ApikeysProjectsLocationsKeysUndeleteSecurity, config?: AxiosRequestConfig): Promise<operations.ApikeysProjectsLocationsKeysUndeleteResponse>;
}
