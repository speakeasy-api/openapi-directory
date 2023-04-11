import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class AttackDetection {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Clear any user login failures for all users   This can release temporary disabled users
     */
    deleteRealmAttackDetectionBruteForceUsers(req: operations.DeleteRealmAttackDetectionBruteForceUsersRequest, config?: AxiosRequestConfig): Promise<operations.DeleteRealmAttackDetectionBruteForceUsersResponse>;
    /**
     * Clear any user login failures for the user   This can release temporary disabled user
     */
    deleteRealmAttackDetectionBruteForceUsersUserId(req: operations.DeleteRealmAttackDetectionBruteForceUsersUserIdRequest, config?: AxiosRequestConfig): Promise<operations.DeleteRealmAttackDetectionBruteForceUsersUserIdResponse>;
    /**
     * Get status of a username in brute force detection
     */
    getRealmAttackDetectionBruteForceUsersUserId(req: operations.GetRealmAttackDetectionBruteForceUsersUserIdRequest, config?: AxiosRequestConfig): Promise<operations.GetRealmAttackDetectionBruteForceUsersUserIdResponse>;
}
