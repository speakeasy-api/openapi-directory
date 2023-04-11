import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Settings {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Creates a datasource. **Note:** This API requires an admin account to execute.
     */
    cloudsearchSettingsDatasourcesCreate(req: operations.CloudsearchSettingsDatasourcesCreateRequest, security: operations.CloudsearchSettingsDatasourcesCreateSecurity, config?: AxiosRequestConfig): Promise<operations.CloudsearchSettingsDatasourcesCreateResponse>;
    /**
     * Lists datasources. **Note:** This API requires an admin account to execute.
     */
    cloudsearchSettingsDatasourcesList(req: operations.CloudsearchSettingsDatasourcesListRequest, security: operations.CloudsearchSettingsDatasourcesListSecurity, config?: AxiosRequestConfig): Promise<operations.CloudsearchSettingsDatasourcesListResponse>;
    /**
     * Get customer settings. **Note:** This API requires an admin account to execute.
     */
    cloudsearchSettingsGetCustomer(req: operations.CloudsearchSettingsGetCustomerRequest, security: operations.CloudsearchSettingsGetCustomerSecurity, config?: AxiosRequestConfig): Promise<operations.CloudsearchSettingsGetCustomerResponse>;
    /**
     * Creates a search application. **Note:** This API requires an admin account to execute.
     */
    cloudsearchSettingsSearchapplicationsCreate(req: operations.CloudsearchSettingsSearchapplicationsCreateRequest, security: operations.CloudsearchSettingsSearchapplicationsCreateSecurity, config?: AxiosRequestConfig): Promise<operations.CloudsearchSettingsSearchapplicationsCreateResponse>;
    /**
     * Deletes a search application. **Note:** This API requires an admin account to execute.
     */
    cloudsearchSettingsSearchapplicationsDelete(req: operations.CloudsearchSettingsSearchapplicationsDeleteRequest, security: operations.CloudsearchSettingsSearchapplicationsDeleteSecurity, config?: AxiosRequestConfig): Promise<operations.CloudsearchSettingsSearchapplicationsDeleteResponse>;
    /**
     * Gets the specified search application. **Note:** This API requires an admin account to execute.
     */
    cloudsearchSettingsSearchapplicationsGet(req: operations.CloudsearchSettingsSearchapplicationsGetRequest, security: operations.CloudsearchSettingsSearchapplicationsGetSecurity, config?: AxiosRequestConfig): Promise<operations.CloudsearchSettingsSearchapplicationsGetResponse>;
    /**
     * Lists all search applications. **Note:** This API requires an admin account to execute.
     */
    cloudsearchSettingsSearchapplicationsList(req: operations.CloudsearchSettingsSearchapplicationsListRequest, security: operations.CloudsearchSettingsSearchapplicationsListSecurity, config?: AxiosRequestConfig): Promise<operations.CloudsearchSettingsSearchapplicationsListResponse>;
    /**
     * Updates a search application. **Note:** This API requires an admin account to execute.
     */
    cloudsearchSettingsSearchapplicationsPatch(req: operations.CloudsearchSettingsSearchapplicationsPatchRequest, security: operations.CloudsearchSettingsSearchapplicationsPatchSecurity, config?: AxiosRequestConfig): Promise<operations.CloudsearchSettingsSearchapplicationsPatchResponse>;
    /**
     * Resets a search application to default settings. This will return an empty response. **Note:** This API requires an admin account to execute.
     */
    cloudsearchSettingsSearchapplicationsReset(req: operations.CloudsearchSettingsSearchapplicationsResetRequest, security: operations.CloudsearchSettingsSearchapplicationsResetSecurity, config?: AxiosRequestConfig): Promise<operations.CloudsearchSettingsSearchapplicationsResetResponse>;
    /**
     * Updates a search application. **Note:** This API requires an admin account to execute.
     */
    cloudsearchSettingsSearchapplicationsUpdate(req: operations.CloudsearchSettingsSearchapplicationsUpdateRequest, security: operations.CloudsearchSettingsSearchapplicationsUpdateSecurity, config?: AxiosRequestConfig): Promise<operations.CloudsearchSettingsSearchapplicationsUpdateResponse>;
    /**
     * Update customer settings. **Note:** This API requires an admin account to execute.
     */
    cloudsearchSettingsUpdateCustomer(req: operations.CloudsearchSettingsUpdateCustomerRequest, security: operations.CloudsearchSettingsUpdateCustomerSecurity, config?: AxiosRequestConfig): Promise<operations.CloudsearchSettingsUpdateCustomerResponse>;
}
