import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class OwnershipFindOwnership {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * getOwnership - Returns a paginated list of app licenses
     *
     *  - Results are returned for the market provided within the basic authentication credentials
    **/
    getOwnership(req: operations.GetOwnershipRequest, config?: AxiosRequestConfig): Promise<operations.GetOwnershipResponse>;
    /**
     * getOwnershipOwnershipId - Returns an ownership record
     *
     *  - Results are returned for the market provided within the basic authentication credentials
    **/
    getOwnershipOwnershipId(req: operations.GetOwnershipOwnershipIdRequest, config?: AxiosRequestConfig): Promise<operations.GetOwnershipOwnershipIdResponse>;
    /**
     * patchOwnershipOwnershipId - Updates ownership fields
     *
     *  - Results are returned for the market provided within the basic authentication credentials
    **/
    patchOwnershipOwnershipId(req: operations.PatchOwnershipOwnershipIdRequest, config?: AxiosRequestConfig): Promise<operations.PatchOwnershipOwnershipIdResponse>;
    /**
     * postOwnershipInstall - Aquires an app license for a user (installs app)
     *
     *  - This method is called on behalf of a user - This method requires either a modelId from the app or a custom model - User data and statistics are recorded when this method is called
    **/
    postOwnershipInstall(req: operations.PostOwnershipInstallRequest, config?: AxiosRequestConfig): Promise<operations.PostOwnershipInstallResponse>;
    /**
     * postOwnershipUninstallOwnershipId - Uninstalls a license for a particular user and app (uninstalls app)
     *
     *  - This method is called on behalf of a user - User data and statistics are recorded when this method is called
    **/
    postOwnershipUninstallOwnershipId(req: operations.PostOwnershipUninstallOwnershipIdRequest, config?: AxiosRequestConfig): Promise<operations.PostOwnershipUninstallOwnershipIdResponse>;
    /**
     * postOwnershipOwnershipId - Updates an ownership record
     *
     *  - Results are returned for the market provided within the basic authentication credentials
    **/
    postOwnershipOwnershipId(req: operations.PostOwnershipOwnershipIdRequest, config?: AxiosRequestConfig): Promise<operations.PostOwnershipOwnershipIdResponse>;
}
