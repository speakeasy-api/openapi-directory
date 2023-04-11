import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Webapps {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Deletes an existing web app.
     */
    androidenterpriseWebappsDelete(req: operations.AndroidenterpriseWebappsDeleteRequest, security: operations.AndroidenterpriseWebappsDeleteSecurity, config?: AxiosRequestConfig): Promise<operations.AndroidenterpriseWebappsDeleteResponse>;
    /**
     * Gets an existing web app.
     */
    androidenterpriseWebappsGet(req: operations.AndroidenterpriseWebappsGetRequest, security: operations.AndroidenterpriseWebappsGetSecurity, config?: AxiosRequestConfig): Promise<operations.AndroidenterpriseWebappsGetResponse>;
    /**
     * Creates a new web app for the enterprise.
     */
    androidenterpriseWebappsInsert(req: operations.AndroidenterpriseWebappsInsertRequest, security: operations.AndroidenterpriseWebappsInsertSecurity, config?: AxiosRequestConfig): Promise<operations.AndroidenterpriseWebappsInsertResponse>;
    /**
     * Retrieves the details of all web apps for a given enterprise.
     */
    androidenterpriseWebappsList(req: operations.AndroidenterpriseWebappsListRequest, security: operations.AndroidenterpriseWebappsListSecurity, config?: AxiosRequestConfig): Promise<operations.AndroidenterpriseWebappsListResponse>;
    /**
     * Updates an existing web app.
     */
    androidenterpriseWebappsUpdate(req: operations.AndroidenterpriseWebappsUpdateRequest, security: operations.AndroidenterpriseWebappsUpdateSecurity, config?: AxiosRequestConfig): Promise<operations.AndroidenterpriseWebappsUpdateResponse>;
}
