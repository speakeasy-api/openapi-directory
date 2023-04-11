import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Get Business Unit information.
 */
export declare class BusinessUnit {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Get Business Units for a user
     *
     * @remarks
     * Get Business Units identified by `userId`. The `userId` refers to the user’s ID.
     */
    getBusinessUnitsV3BusinessUnitsUserUserId(req: operations.GetBusinessUnitsV3BusinessUnitsUserUserIdRequest, security: operations.GetBusinessUnitsV3BusinessUnitsUserUserIdSecurity, config?: AxiosRequestConfig): Promise<operations.GetBusinessUnitsV3BusinessUnitsUserUserIdResponse>;
}
