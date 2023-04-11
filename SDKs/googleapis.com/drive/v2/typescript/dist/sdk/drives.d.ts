import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Drives {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Permanently deletes a shared drive for which the user is an organizer. The shared drive cannot contain any untrashed items.
     */
    driveDrivesDelete(req: operations.DriveDrivesDeleteRequest, security: operations.DriveDrivesDeleteSecurity, config?: AxiosRequestConfig): Promise<operations.DriveDrivesDeleteResponse>;
    /**
     * Gets a shared drive's metadata by ID.
     */
    driveDrivesGet(req: operations.DriveDrivesGetRequest, security: operations.DriveDrivesGetSecurity, config?: AxiosRequestConfig): Promise<operations.DriveDrivesGetResponse>;
    /**
     * Hides a shared drive from the default view.
     */
    driveDrivesHide(req: operations.DriveDrivesHideRequest, security: operations.DriveDrivesHideSecurity, config?: AxiosRequestConfig): Promise<operations.DriveDrivesHideResponse>;
    /**
     * Creates a new shared drive.
     */
    driveDrivesInsert(req: operations.DriveDrivesInsertRequest, security: operations.DriveDrivesInsertSecurity, config?: AxiosRequestConfig): Promise<operations.DriveDrivesInsertResponse>;
    /**
     * Lists the user's shared drives.
     */
    driveDrivesList(req: operations.DriveDrivesListRequest, security: operations.DriveDrivesListSecurity, config?: AxiosRequestConfig): Promise<operations.DriveDrivesListResponse>;
    /**
     * Restores a shared drive to the default view.
     */
    driveDrivesUnhide(req: operations.DriveDrivesUnhideRequest, security: operations.DriveDrivesUnhideSecurity, config?: AxiosRequestConfig): Promise<operations.DriveDrivesUnhideResponse>;
    /**
     * Updates the metadata for a shared drive.
     */
    driveDrivesUpdate(req: operations.DriveDrivesUpdateRequest, security: operations.DriveDrivesUpdateSecurity, config?: AxiosRequestConfig): Promise<operations.DriveDrivesUpdateResponse>;
}
