import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class OwnershipFindOwnership {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Returns a paginated list of app licenses
     *
     * @remarks
     *  - Results are returned for the market provided within the basic authentication credentials
     */
    getOwnership(req: operations.GetOwnershipRequest, config?: AxiosRequestConfig): Promise<operations.GetOwnershipResponse>;
    /**
     * Returns an ownership record
     *
     * @remarks
     *  - Results are returned for the market provided within the basic authentication credentials
     */
    getOwnershipOwnershipId(req: operations.GetOwnershipOwnershipIdRequest, config?: AxiosRequestConfig): Promise<operations.GetOwnershipOwnershipIdResponse>;
    /**
     * Updates ownership fields
     *
     * @remarks
     *  - Results are returned for the market provided within the basic authentication credentials
     */
    patchOwnershipOwnershipId(req: operations.PatchOwnershipOwnershipIdRequest, config?: AxiosRequestConfig): Promise<operations.PatchOwnershipOwnershipIdResponse>;
    /**
     * Aquires an app license for a user (installs app)
     *
     * @remarks
     *  - This method is called on behalf of a user - This method requires either a modelId from the app or a custom model - User data and statistics are recorded when this method is called
     */
    postOwnershipInstall(req: operations.PostOwnershipInstallRequest, config?: AxiosRequestConfig): Promise<operations.PostOwnershipInstallResponse>;
    /**
     * Uninstalls a license for a particular user and app (uninstalls app)
     *
     * @remarks
     *  - This method is called on behalf of a user - User data and statistics are recorded when this method is called
     */
    postOwnershipUninstallOwnershipId(req: operations.PostOwnershipUninstallOwnershipIdRequest, config?: AxiosRequestConfig): Promise<operations.PostOwnershipUninstallOwnershipIdResponse>;
    /**
     * Updates an ownership record
     *
     * @remarks
     *  - Results are returned for the market provided within the basic authentication credentials
     */
    postOwnershipOwnershipId(req: operations.PostOwnershipOwnershipIdRequest, config?: AxiosRequestConfig): Promise<operations.PostOwnershipOwnershipIdResponse>;
}
