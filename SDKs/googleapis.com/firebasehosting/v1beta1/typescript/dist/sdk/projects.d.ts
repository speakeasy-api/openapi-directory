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
     * Creates a new Hosting Site in the specified parent Firebase project. Note that Hosting sites can take several minutes to propagate through Firebase systems.
     */
    firebasehostingProjectsSitesCreate(req: operations.FirebasehostingProjectsSitesCreateRequest, security: operations.FirebasehostingProjectsSitesCreateSecurity, config?: AxiosRequestConfig): Promise<operations.FirebasehostingProjectsSitesCreateResponse>;
    /**
     * Lists each Hosting Site associated with the specified parent Firebase project.
     */
    firebasehostingProjectsSitesList(req: operations.FirebasehostingProjectsSitesListRequest, security: operations.FirebasehostingProjectsSitesListSecurity, config?: AxiosRequestConfig): Promise<operations.FirebasehostingProjectsSitesListResponse>;
}
