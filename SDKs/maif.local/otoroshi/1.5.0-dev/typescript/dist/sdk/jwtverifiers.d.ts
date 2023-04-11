import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Everything about Otoroshi global JWT token verifiers
 */
export declare class JwtVerifiers {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Create one global JWT verifiers
     *
     * @remarks
     * Create one global JWT verifiers
     */
    createGlobalJwtVerifier(req: shared.GlobalJwtVerifier, security: operations.CreateGlobalJwtVerifierSecurity, config?: AxiosRequestConfig): Promise<operations.CreateGlobalJwtVerifierResponse>;
    /**
     * Delete one global JWT verifiers
     *
     * @remarks
     * Delete one global JWT verifiers
     */
    deleteGlobalJwtVerifier(req: operations.DeleteGlobalJwtVerifierRequest, security: operations.DeleteGlobalJwtVerifierSecurity, config?: AxiosRequestConfig): Promise<operations.DeleteGlobalJwtVerifierResponse>;
    /**
     * Get all global JWT verifiers
     *
     * @remarks
     * Get all global JWT verifiers
     */
    findAllGlobalJwtVerifiers(config?: AxiosRequestConfig): Promise<operations.FindAllGlobalJwtVerifiersResponse>;
    /**
     * Get one global JWT verifiers
     *
     * @remarks
     * Get one global JWT verifiers
     */
    findGlobalJwtVerifiersById(req: operations.FindGlobalJwtVerifiersByIdRequest, security: operations.FindGlobalJwtVerifiersByIdSecurity, config?: AxiosRequestConfig): Promise<operations.FindGlobalJwtVerifiersByIdResponse>;
    /**
     * Update one global JWT verifiers
     *
     * @remarks
     * Update one global JWT verifiers
     */
    patchGlobalJwtVerifier(req: operations.PatchGlobalJwtVerifierRequest, security: operations.PatchGlobalJwtVerifierSecurity, config?: AxiosRequestConfig): Promise<operations.PatchGlobalJwtVerifierResponse>;
    /**
     * Update one global JWT verifiers
     *
     * @remarks
     * Update one global JWT verifiers
     */
    updateGlobalJwtVerifier(req: operations.UpdateGlobalJwtVerifierRequest, security: operations.UpdateGlobalJwtVerifierSecurity, config?: AxiosRequestConfig): Promise<operations.UpdateGlobalJwtVerifierResponse>;
}
