import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Receive slack notifications on Probely events.
 *
 * @remarks
 *
 */
export declare class SlackIntegration {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Retrieve slack integration data
     */
    getTargetsTargetIdIntegrationsSlack(req: operations.GetTargetsTargetIdIntegrationsSlackRequest, config?: AxiosRequestConfig): Promise<operations.GetTargetsTargetIdIntegrationsSlackResponse>;
    /**
     * Update slack integration data
     */
    patchTargetsTargetIdIntegrationsSlack(req: operations.PatchTargetsTargetIdIntegrationsSlackRequest, config?: AxiosRequestConfig): Promise<operations.PatchTargetsTargetIdIntegrationsSlackResponse>;
    /**
     * Update slack integration data
     */
    putTargetsTargetIdIntegrationsSlack(req: operations.PutTargetsTargetIdIntegrationsSlackRequest, config?: AxiosRequestConfig): Promise<operations.PutTargetsTargetIdIntegrationsSlackResponse>;
}
