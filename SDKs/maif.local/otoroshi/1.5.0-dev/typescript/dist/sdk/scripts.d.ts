import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Everything about Otoroshi request transformer scripts
 */
export declare class Scripts {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Compile a script
     *
     * @remarks
     * Compile a script
     */
    compileScript(req: shared.Script, security: operations.CompileScriptSecurity, config?: AxiosRequestConfig): Promise<operations.CompileScriptResponse>;
    /**
     * Create a new script
     *
     * @remarks
     * Create a new script
     */
    createScript(req: shared.Script, security: operations.CreateScriptSecurity, config?: AxiosRequestConfig): Promise<operations.CreateScriptResponse>;
    /**
     * Delete a script
     *
     * @remarks
     * Delete a script
     */
    deleteScript(req: operations.DeleteScriptRequest, security: operations.DeleteScriptSecurity, config?: AxiosRequestConfig): Promise<operations.DeleteScriptResponse>;
    /**
     * Get all scripts
     *
     * @remarks
     * Get all scripts
     */
    findAllScripts(config?: AxiosRequestConfig): Promise<operations.FindAllScriptsResponse>;
    /**
     * Get a script
     *
     * @remarks
     * Get a script
     */
    findScriptById(req: operations.FindScriptByIdRequest, security: operations.FindScriptByIdSecurity, config?: AxiosRequestConfig): Promise<operations.FindScriptByIdResponse>;
    /**
     * Update a script with a diff
     *
     * @remarks
     * Update a script with a diff
     */
    patchScript(req: operations.PatchScriptRequest, security: operations.PatchScriptSecurity, config?: AxiosRequestConfig): Promise<operations.PatchScriptResponse>;
    /**
     * Update a script
     *
     * @remarks
     * Update a script
     */
    updateScript(req: operations.UpdateScriptRequest, security: operations.UpdateScriptSecurity, config?: AxiosRequestConfig): Promise<operations.UpdateScriptResponse>;
}
