import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Everything about Otoroshi global auth. module config
 */
export declare class AuthConfig {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Create one global auth. module config
     *
     * @remarks
     * Create one global auth. module config
     */
    createGlobalAuthModule(req: any, security: operations.CreateGlobalAuthModuleSecurity, config?: AxiosRequestConfig): Promise<operations.CreateGlobalAuthModuleResponse>;
    /**
     * Delete one global auth. module config
     *
     * @remarks
     * Delete one global auth. module config
     */
    deleteGlobalAuthModule(req: operations.DeleteGlobalAuthModuleRequest, security: operations.DeleteGlobalAuthModuleSecurity, config?: AxiosRequestConfig): Promise<operations.DeleteGlobalAuthModuleResponse>;
    /**
     * Get all global auth. module configs
     *
     * @remarks
     * Get all global auth. module configs
     */
    findAllGlobalAuthModules(config?: AxiosRequestConfig): Promise<operations.FindAllGlobalAuthModulesResponse>;
    /**
     * Get one global auth. module configs
     *
     * @remarks
     * Get one global auth. module configs
     */
    findGlobalAuthModuleById(req: operations.FindGlobalAuthModuleByIdRequest, security: operations.FindGlobalAuthModuleByIdSecurity, config?: AxiosRequestConfig): Promise<operations.FindGlobalAuthModuleByIdResponse>;
    /**
     * Update one global auth. module config
     *
     * @remarks
     * Update one global auth. module config
     */
    patchGlobalAuthModule(req: operations.PatchGlobalAuthModuleRequest, security: operations.PatchGlobalAuthModuleSecurity, config?: AxiosRequestConfig): Promise<operations.PatchGlobalAuthModuleResponse>;
    /**
     * Update one global auth. module config
     *
     * @remarks
     * Update one global auth. module config
     */
    updateGlobalAuthModule(req: operations.UpdateGlobalAuthModuleRequest, security: operations.UpdateGlobalAuthModuleSecurity, config?: AxiosRequestConfig): Promise<operations.UpdateGlobalAuthModuleResponse>;
}
