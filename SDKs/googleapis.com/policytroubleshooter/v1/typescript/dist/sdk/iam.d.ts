import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Iam {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Checks whether a principal has a specific permission for a specific resource, and explains why the principal does or does not have that permission.
     */
    policytroubleshooterIamTroubleshoot(req: operations.PolicytroubleshooterIamTroubleshootRequest, security: operations.PolicytroubleshooterIamTroubleshootSecurity, config?: AxiosRequestConfig): Promise<operations.PolicytroubleshooterIamTroubleshootResponse>;
}
