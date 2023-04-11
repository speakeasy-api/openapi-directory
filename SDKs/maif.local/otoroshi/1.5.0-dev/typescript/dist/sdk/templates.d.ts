import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Everything about Otoroshi entities templates
 */
export declare class Templates {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Get a template of an Otoroshi Api Key
     *
     * @remarks
     * Get a template of an Otoroshi Api Key. The generated entity is not persisted
     */
    initiateApiKey(config?: AxiosRequestConfig): Promise<operations.InitiateApiKeyResponse>;
    /**
     * Get a template of an Otoroshi service descriptor
     *
     * @remarks
     * Get a template of an Otoroshi service descriptor. The generated entity is not persisted
     */
    initiateService(config?: AxiosRequestConfig): Promise<operations.InitiateServiceResponse>;
    /**
     * Get a template of an Otoroshi service group
     *
     * @remarks
     * Get a template of an Otoroshi service group. The generated entity is not persisted
     */
    initiateServiceGroup(config?: AxiosRequestConfig): Promise<operations.InitiateServiceGroupResponse>;
}
