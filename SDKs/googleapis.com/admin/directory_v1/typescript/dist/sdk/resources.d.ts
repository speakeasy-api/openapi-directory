import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Resources {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Deletes a building.
     */
    directoryResourcesBuildingsDelete(req: operations.DirectoryResourcesBuildingsDeleteRequest, security: operations.DirectoryResourcesBuildingsDeleteSecurity, config?: AxiosRequestConfig): Promise<operations.DirectoryResourcesBuildingsDeleteResponse>;
    /**
     * Retrieves a building.
     */
    directoryResourcesBuildingsGet(req: operations.DirectoryResourcesBuildingsGetRequest, security: operations.DirectoryResourcesBuildingsGetSecurity, config?: AxiosRequestConfig): Promise<operations.DirectoryResourcesBuildingsGetResponse>;
    /**
     * Inserts a building.
     */
    directoryResourcesBuildingsInsert(req: operations.DirectoryResourcesBuildingsInsertRequest, security: operations.DirectoryResourcesBuildingsInsertSecurity, config?: AxiosRequestConfig): Promise<operations.DirectoryResourcesBuildingsInsertResponse>;
    /**
     * Retrieves a list of buildings for an account.
     */
    directoryResourcesBuildingsList(req: operations.DirectoryResourcesBuildingsListRequest, security: operations.DirectoryResourcesBuildingsListSecurity, config?: AxiosRequestConfig): Promise<operations.DirectoryResourcesBuildingsListResponse>;
    /**
     * Patches a building.
     */
    directoryResourcesBuildingsPatch(req: operations.DirectoryResourcesBuildingsPatchRequest, security: operations.DirectoryResourcesBuildingsPatchSecurity, config?: AxiosRequestConfig): Promise<operations.DirectoryResourcesBuildingsPatchResponse>;
    /**
     * Updates a building.
     */
    directoryResourcesBuildingsUpdate(req: operations.DirectoryResourcesBuildingsUpdateRequest, security: operations.DirectoryResourcesBuildingsUpdateSecurity, config?: AxiosRequestConfig): Promise<operations.DirectoryResourcesBuildingsUpdateResponse>;
    /**
     * Deletes a calendar resource.
     */
    directoryResourcesCalendarsDelete(req: operations.DirectoryResourcesCalendarsDeleteRequest, security: operations.DirectoryResourcesCalendarsDeleteSecurity, config?: AxiosRequestConfig): Promise<operations.DirectoryResourcesCalendarsDeleteResponse>;
    /**
     * Retrieves a calendar resource.
     */
    directoryResourcesCalendarsGet(req: operations.DirectoryResourcesCalendarsGetRequest, security: operations.DirectoryResourcesCalendarsGetSecurity, config?: AxiosRequestConfig): Promise<operations.DirectoryResourcesCalendarsGetResponse>;
    /**
     * Inserts a calendar resource.
     */
    directoryResourcesCalendarsInsert(req: operations.DirectoryResourcesCalendarsInsertRequest, security: operations.DirectoryResourcesCalendarsInsertSecurity, config?: AxiosRequestConfig): Promise<operations.DirectoryResourcesCalendarsInsertResponse>;
    /**
     * Retrieves a list of calendar resources for an account.
     */
    directoryResourcesCalendarsList(req: operations.DirectoryResourcesCalendarsListRequest, security: operations.DirectoryResourcesCalendarsListSecurity, config?: AxiosRequestConfig): Promise<operations.DirectoryResourcesCalendarsListResponse>;
    /**
     * Patches a calendar resource.
     */
    directoryResourcesCalendarsPatch(req: operations.DirectoryResourcesCalendarsPatchRequest, security: operations.DirectoryResourcesCalendarsPatchSecurity, config?: AxiosRequestConfig): Promise<operations.DirectoryResourcesCalendarsPatchResponse>;
    /**
     * Updates a calendar resource. This method supports patch semantics, meaning you only need to include the fields you wish to update. Fields that are not present in the request will be preserved.
     */
    directoryResourcesCalendarsUpdate(req: operations.DirectoryResourcesCalendarsUpdateRequest, security: operations.DirectoryResourcesCalendarsUpdateSecurity, config?: AxiosRequestConfig): Promise<operations.DirectoryResourcesCalendarsUpdateResponse>;
    /**
     * Deletes a feature.
     */
    directoryResourcesFeaturesDelete(req: operations.DirectoryResourcesFeaturesDeleteRequest, security: operations.DirectoryResourcesFeaturesDeleteSecurity, config?: AxiosRequestConfig): Promise<operations.DirectoryResourcesFeaturesDeleteResponse>;
    /**
     * Retrieves a feature.
     */
    directoryResourcesFeaturesGet(req: operations.DirectoryResourcesFeaturesGetRequest, security: operations.DirectoryResourcesFeaturesGetSecurity, config?: AxiosRequestConfig): Promise<operations.DirectoryResourcesFeaturesGetResponse>;
    /**
     * Inserts a feature.
     */
    directoryResourcesFeaturesInsert(req: operations.DirectoryResourcesFeaturesInsertRequest, security: operations.DirectoryResourcesFeaturesInsertSecurity, config?: AxiosRequestConfig): Promise<operations.DirectoryResourcesFeaturesInsertResponse>;
    /**
     * Retrieves a list of features for an account.
     */
    directoryResourcesFeaturesList(req: operations.DirectoryResourcesFeaturesListRequest, security: operations.DirectoryResourcesFeaturesListSecurity, config?: AxiosRequestConfig): Promise<operations.DirectoryResourcesFeaturesListResponse>;
    /**
     * Patches a feature.
     */
    directoryResourcesFeaturesPatch(req: operations.DirectoryResourcesFeaturesPatchRequest, security: operations.DirectoryResourcesFeaturesPatchSecurity, config?: AxiosRequestConfig): Promise<operations.DirectoryResourcesFeaturesPatchResponse>;
    /**
     * Renames a feature.
     */
    directoryResourcesFeaturesRename(req: operations.DirectoryResourcesFeaturesRenameRequest, security: operations.DirectoryResourcesFeaturesRenameSecurity, config?: AxiosRequestConfig): Promise<operations.DirectoryResourcesFeaturesRenameResponse>;
    /**
     * Updates a feature.
     */
    directoryResourcesFeaturesUpdate(req: operations.DirectoryResourcesFeaturesUpdateRequest, security: operations.DirectoryResourcesFeaturesUpdateSecurity, config?: AxiosRequestConfig): Promise<operations.DirectoryResourcesFeaturesUpdateResponse>;
}
