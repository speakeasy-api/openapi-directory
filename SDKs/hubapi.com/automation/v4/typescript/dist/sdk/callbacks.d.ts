import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Operations to complete callbacks for custom workflow actions.
 */
export declare class Callbacks {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Complete a batch of callbacks
     *
     * @remarks
     * Completes the given action callbacks.
     */
    postAutomationV4ActionsCallbacksCompleteCompleteBatch(req: shared.BatchInputCallbackCompletionBatchRequest, security: operations.PostAutomationV4ActionsCallbacksCompleteCompleteBatchSecurity, config?: AxiosRequestConfig): Promise<operations.PostAutomationV4ActionsCallbacksCompleteCompleteBatchResponse>;
    /**
     * Complete a callback
     *
     * @remarks
     * Completes the given action callback.
     */
    postAutomationV4ActionsCallbacksCallbackIdCompleteComplete(req: operations.PostAutomationV4ActionsCallbacksCallbackIdCompleteCompleteRequest, security: operations.PostAutomationV4ActionsCallbacksCallbackIdCompleteCompleteSecurity, config?: AxiosRequestConfig): Promise<operations.PostAutomationV4ActionsCallbacksCallbackIdCompleteCompleteResponse>;
}
