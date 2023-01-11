import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Scheduled {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * deleteTargetsTargetIdScheduledscansId - Delete
    **/
    deleteTargetsTargetIdScheduledscansId(req: operations.DeleteTargetsTargetIdScheduledscansIdRequest, config?: AxiosRequestConfig): Promise<operations.DeleteTargetsTargetIdScheduledscansIdResponse>;
    /**
     * getTargetsAllScheduledscansExpanded - List scheduled scans for all targets expanding recurrence
    **/
    getTargetsAllScheduledscansExpanded(req: operations.GetTargetsAllScheduledscansExpandedRequest, config?: AxiosRequestConfig): Promise<operations.GetTargetsAllScheduledscansExpandedResponse>;
    /**
     * getTargetsTargetIdScheduledscans - List scheduled scans
    **/
    getTargetsTargetIdScheduledscans(req: operations.GetTargetsTargetIdScheduledscansRequest, config?: AxiosRequestConfig): Promise<operations.GetTargetsTargetIdScheduledscansResponse>;
    /**
     * getTargetsTargetIdScheduledscansExpanded - List scheduled scans expanding recurrence
    **/
    getTargetsTargetIdScheduledscansExpanded(req: operations.GetTargetsTargetIdScheduledscansExpandedRequest, config?: AxiosRequestConfig): Promise<operations.GetTargetsTargetIdScheduledscansExpandedResponse>;
    /**
     * getTargetsTargetIdScheduledscansId - Retrieve a scheduled scan
    **/
    getTargetsTargetIdScheduledscansId(req: operations.GetTargetsTargetIdScheduledscansIdRequest, config?: AxiosRequestConfig): Promise<operations.GetTargetsTargetIdScheduledscansIdResponse>;
    /**
     * patchTargetsTargetIdScheduledscansId - Partial update
    **/
    patchTargetsTargetIdScheduledscansId(req: operations.PatchTargetsTargetIdScheduledscansIdRequest, config?: AxiosRequestConfig): Promise<operations.PatchTargetsTargetIdScheduledscansIdResponse>;
    /**
     * postTargetsTargetIdScheduledscans - Create new scheduled scan
    **/
    postTargetsTargetIdScheduledscans(req: operations.PostTargetsTargetIdScheduledscansRequest, config?: AxiosRequestConfig): Promise<operations.PostTargetsTargetIdScheduledscansResponse>;
    /**
     * putTargetsTargetIdScheduledscansId - Update a scheduled scan
    **/
    putTargetsTargetIdScheduledscansId(req: operations.PutTargetsTargetIdScheduledscansIdRequest, config?: AxiosRequestConfig): Promise<operations.PutTargetsTargetIdScheduledscansIdResponse>;
}
