import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * You can schedule scans for the future as a one off, or on a recurring
 *
 * @remarks
 * basis.
 *
 */
export declare class Scheduled {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Delete
     */
    deleteTargetsTargetIdScheduledscansId(req: operations.DeleteTargetsTargetIdScheduledscansIdRequest, config?: AxiosRequestConfig): Promise<operations.DeleteTargetsTargetIdScheduledscansIdResponse>;
    /**
     * List scheduled scans for all targets expanding recurrence
     */
    getTargetsAllScheduledscansExpanded(req: operations.GetTargetsAllScheduledscansExpandedRequest, config?: AxiosRequestConfig): Promise<operations.GetTargetsAllScheduledscansExpandedResponse>;
    /**
     * List scheduled scans
     */
    getTargetsTargetIdScheduledscans(req: operations.GetTargetsTargetIdScheduledscansRequest, config?: AxiosRequestConfig): Promise<operations.GetTargetsTargetIdScheduledscansResponse>;
    /**
     * List scheduled scans expanding recurrence
     */
    getTargetsTargetIdScheduledscansExpanded(req: operations.GetTargetsTargetIdScheduledscansExpandedRequest, config?: AxiosRequestConfig): Promise<operations.GetTargetsTargetIdScheduledscansExpandedResponse>;
    /**
     * Retrieve a scheduled scan
     */
    getTargetsTargetIdScheduledscansId(req: operations.GetTargetsTargetIdScheduledscansIdRequest, config?: AxiosRequestConfig): Promise<operations.GetTargetsTargetIdScheduledscansIdResponse>;
    /**
     * Partial update
     */
    patchTargetsTargetIdScheduledscansId(req: operations.PatchTargetsTargetIdScheduledscansIdRequest, config?: AxiosRequestConfig): Promise<operations.PatchTargetsTargetIdScheduledscansIdResponse>;
    /**
     * Create new scheduled scan
     */
    postTargetsTargetIdScheduledscans(req: operations.PostTargetsTargetIdScheduledscansRequest, config?: AxiosRequestConfig): Promise<operations.PostTargetsTargetIdScheduledscansResponse>;
    /**
     * Update a scheduled scan
     */
    putTargetsTargetIdScheduledscansId(req: operations.PutTargetsTargetIdScheduledscansIdRequest, config?: AxiosRequestConfig): Promise<operations.PutTargetsTargetIdScheduledscansIdResponse>;
}
