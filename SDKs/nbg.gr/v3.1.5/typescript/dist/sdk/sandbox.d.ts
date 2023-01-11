import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Sandbox {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * deleteSandboxSandboxId - Delete Sandbox
     *
     * Delete Sandbox
    **/
    deleteSandboxSandboxId(req: operations.DeleteSandboxSandboxIdRequest, config?: AxiosRequestConfig): Promise<operations.DeleteSandboxSandboxIdResponse>;
    /**
     * getSandboxSandboxId - Export Sandbox
     *
     * Export Sandbox
    **/
    getSandboxSandboxId(req: operations.GetSandboxSandboxIdRequest, config?: AxiosRequestConfig): Promise<operations.GetSandboxSandboxIdResponse>;
    /**
     * postSandbox - Create Sandbox
     *
     * Create Sandbox
    **/
    postSandbox(req: operations.PostSandboxRequest, config?: AxiosRequestConfig): Promise<operations.PostSandboxResponse>;
    /**
     * putSandbox - Import Sandbox
     *
     * Import Sandbox
    **/
    putSandbox(req: operations.PutSandboxRequest, config?: AxiosRequestConfig): Promise<operations.PutSandboxResponse>;
}
