import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class DevelopersFindAndModifyDevelopers {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * deleteDevelopersDeveloperId - Removes a single developer
    **/
    deleteDevelopersDeveloperId(req: operations.DeleteDevelopersDeveloperIdRequest, config?: AxiosRequestConfig): Promise<operations.DeleteDevelopersDeveloperIdResponse>;
    /**
     * getDevelopers - Returns a paginated list of developers
     *
     * - Results are paginated and the default is value is 100 if no limit is provided
     *
    **/
    getDevelopers(req: operations.GetDevelopersRequest, config?: AxiosRequestConfig): Promise<operations.GetDevelopersResponse>;
    /**
     * getDevelopersDeveloperId - Returns a single developer
    **/
    getDevelopersDeveloperId(req: operations.GetDevelopersDeveloperIdRequest, config?: AxiosRequestConfig): Promise<operations.GetDevelopersDeveloperIdResponse>;
    /**
     * patchDevelopersDeveloperId - Updates the developer fields
    **/
    patchDevelopersDeveloperId(req: operations.PatchDevelopersDeveloperIdRequest, config?: AxiosRequestConfig): Promise<operations.PatchDevelopersDeveloperIdResponse>;
    /**
     * postDevelopersDeveloperId - Updates the developer record or adds the developer if it doesn't exist
    **/
    postDevelopersDeveloperId(req: operations.PostDevelopersDeveloperIdRequest, config?: AxiosRequestConfig): Promise<operations.PostDevelopersDeveloperIdResponse>;
}
