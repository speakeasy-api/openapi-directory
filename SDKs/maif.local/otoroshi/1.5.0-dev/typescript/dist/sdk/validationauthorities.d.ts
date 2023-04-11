import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Everything about Otoroshi validation authorities
 */
export declare class ValidationAuthorities {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Create one validation authorities
     *
     * @remarks
     * Create one validation authorities
     */
    createClientValidator(req: shared.ValidationAuthority, security: operations.CreateClientValidatorSecurity, config?: AxiosRequestConfig): Promise<operations.CreateClientValidatorResponse>;
    /**
     * Delete one validation authorities by id
     *
     * @remarks
     * Delete one validation authorities by id
     */
    deleteClientValidator(req: operations.DeleteClientValidatorRequest, security: operations.DeleteClientValidatorSecurity, config?: AxiosRequestConfig): Promise<operations.DeleteClientValidatorResponse>;
    /**
     * Get all validation authoritiess
     *
     * @remarks
     * Get all validation authoritiess
     */
    findAllClientValidators(config?: AxiosRequestConfig): Promise<operations.FindAllClientValidatorsResponse>;
    /**
     * Get one validation authorities by id
     *
     * @remarks
     * Get one validation authorities by id
     */
    findClientValidatorById(req: operations.FindClientValidatorByIdRequest, security: operations.FindClientValidatorByIdSecurity, config?: AxiosRequestConfig): Promise<operations.FindClientValidatorByIdResponse>;
    /**
     * Update one validation authorities by id
     *
     * @remarks
     * Update one validation authorities by id
     */
    patchClientValidator(req: operations.PatchClientValidatorRequest, security: operations.PatchClientValidatorSecurity, config?: AxiosRequestConfig): Promise<operations.PatchClientValidatorResponse>;
    /**
     * Update one validation authorities by id
     *
     * @remarks
     * Update one validation authorities by id
     */
    updateClientValidator(req: operations.UpdateClientValidatorRequest, security: operations.UpdateClientValidatorSecurity, config?: AxiosRequestConfig): Promise<operations.UpdateClientValidatorResponse>;
}
