import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Sandbox {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Delete Sandbox
     *
     * @remarks
     * Delete Sandbox
     */
    deleteSandboxSandboxId(req: operations.DeleteSandboxSandboxIdRequest, security: operations.DeleteSandboxSandboxIdSecurity, config?: AxiosRequestConfig): Promise<operations.DeleteSandboxSandboxIdResponse>;
    /**
     * Export Sandbox
     *
     * @remarks
     * Export Sandbox
     */
    getSandboxSandboxId(req: operations.GetSandboxSandboxIdRequest, security: operations.GetSandboxSandboxIdSecurity, config?: AxiosRequestConfig): Promise<operations.GetSandboxSandboxIdResponse>;
    /**
     * Create Sandbox
     *
     * @remarks
     * Create Sandbox
     */
    postSandbox(req: shared.SandboxRequest, security: operations.PostSandboxSecurity, config?: AxiosRequestConfig): Promise<operations.PostSandboxResponse>;
    /**
     * Import Sandbox
     *
     * @remarks
     * Import Sandbox
     */
    putSandbox(req: shared.Sandbox, security: operations.PutSandboxSecurity, config?: AxiosRequestConfig): Promise<operations.PutSandboxResponse>;
}
