import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class SlackIntegration {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * getTargetsTargetIdIntegrationsSlack - Retrieve slack integration data
    **/
    getTargetsTargetIdIntegrationsSlack(req: operations.GetTargetsTargetIdIntegrationsSlackRequest, config?: AxiosRequestConfig): Promise<operations.GetTargetsTargetIdIntegrationsSlackResponse>;
    /**
     * patchTargetsTargetIdIntegrationsSlack - Update slack integration data
    **/
    patchTargetsTargetIdIntegrationsSlack(req: operations.PatchTargetsTargetIdIntegrationsSlackRequest, config?: AxiosRequestConfig): Promise<operations.PatchTargetsTargetIdIntegrationsSlackResponse>;
    /**
     * putTargetsTargetIdIntegrationsSlack - Update slack integration data
    **/
    putTargetsTargetIdIntegrationsSlack(req: operations.PutTargetsTargetIdIntegrationsSlackRequest, config?: AxiosRequestConfig): Promise<operations.PutTargetsTargetIdIntegrationsSlackResponse>;
}
