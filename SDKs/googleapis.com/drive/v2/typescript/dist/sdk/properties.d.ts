import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Properties {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Deletes a property.
     */
    drivePropertiesDelete(req: operations.DrivePropertiesDeleteRequest, security: operations.DrivePropertiesDeleteSecurity, config?: AxiosRequestConfig): Promise<operations.DrivePropertiesDeleteResponse>;
    /**
     * Gets a property by its key.
     */
    drivePropertiesGet(req: operations.DrivePropertiesGetRequest, security: operations.DrivePropertiesGetSecurity, config?: AxiosRequestConfig): Promise<operations.DrivePropertiesGetResponse>;
    /**
     * Adds a property to a file, or updates it if it already exists.
     */
    drivePropertiesInsert(req: operations.DrivePropertiesInsertRequest, security: operations.DrivePropertiesInsertSecurity, config?: AxiosRequestConfig): Promise<operations.DrivePropertiesInsertResponse>;
    /**
     * Lists a file's properties.
     */
    drivePropertiesList(req: operations.DrivePropertiesListRequest, security: operations.DrivePropertiesListSecurity, config?: AxiosRequestConfig): Promise<operations.DrivePropertiesListResponse>;
    /**
     * Updates a property.
     */
    drivePropertiesPatch(req: operations.DrivePropertiesPatchRequest, security: operations.DrivePropertiesPatchSecurity, config?: AxiosRequestConfig): Promise<operations.DrivePropertiesPatchResponse>;
    /**
     * Updates a property.
     */
    drivePropertiesUpdate(req: operations.DrivePropertiesUpdateRequest, security: operations.DrivePropertiesUpdateSecurity, config?: AxiosRequestConfig): Promise<operations.DrivePropertiesUpdateResponse>;
}
