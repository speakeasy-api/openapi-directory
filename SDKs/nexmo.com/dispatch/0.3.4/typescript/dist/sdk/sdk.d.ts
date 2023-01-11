import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare const ServerList: readonly ["https://api.nexmo.com/v0.1/dispatch"];
export type SDKProps = {
    defaultClient?: AxiosInstance;
    serverUrl?: string;
};
export declare class SDK {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    constructor(props: SDKProps);
    /**
     * createWorkflow - Create a workflow
    **/
    createWorkflow(req: operations.CreateWorkflowRequest, config?: AxiosRequestConfig): Promise<operations.CreateWorkflowResponse>;
}
