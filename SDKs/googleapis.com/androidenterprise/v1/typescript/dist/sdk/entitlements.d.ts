import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Entitlements {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Removes an entitlement to an app for a user. **Note:** This item has been deprecated. New integrations cannot use this method and can refer to our new recommendations.
     */
    androidenterpriseEntitlementsDelete(req: operations.AndroidenterpriseEntitlementsDeleteRequest, security: operations.AndroidenterpriseEntitlementsDeleteSecurity, config?: AxiosRequestConfig): Promise<operations.AndroidenterpriseEntitlementsDeleteResponse>;
    /**
     * Retrieves details of an entitlement. **Note:** This item has been deprecated. New integrations cannot use this method and can refer to our new recommendations.
     */
    androidenterpriseEntitlementsGet(req: operations.AndroidenterpriseEntitlementsGetRequest, security: operations.AndroidenterpriseEntitlementsGetSecurity, config?: AxiosRequestConfig): Promise<operations.AndroidenterpriseEntitlementsGetResponse>;
    /**
     * Lists all entitlements for the specified user. Only the ID is set. **Note:** This item has been deprecated. New integrations cannot use this method and can refer to our new recommendations.
     */
    androidenterpriseEntitlementsList(req: operations.AndroidenterpriseEntitlementsListRequest, security: operations.AndroidenterpriseEntitlementsListSecurity, config?: AxiosRequestConfig): Promise<operations.AndroidenterpriseEntitlementsListResponse>;
    /**
     * Adds or updates an entitlement to an app for a user. **Note:** This item has been deprecated. New integrations cannot use this method and can refer to our new recommendations.
     */
    androidenterpriseEntitlementsUpdate(req: operations.AndroidenterpriseEntitlementsUpdateRequest, security: operations.AndroidenterpriseEntitlementsUpdateSecurity, config?: AxiosRequestConfig): Promise<operations.AndroidenterpriseEntitlementsUpdateResponse>;
}
