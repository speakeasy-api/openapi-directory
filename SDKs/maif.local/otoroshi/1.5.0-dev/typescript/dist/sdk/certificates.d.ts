import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Everything about Otoroshi SSL/TLS certificates
 */
export declare class Certificates {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Get all certificates
     *
     * @remarks
     * Get all certificates
     */
    allCerts(config?: AxiosRequestConfig): Promise<operations.AllCertsResponse>;
    /**
     * Create one certificate
     *
     * @remarks
     * Create one certificate
     */
    createCert(req: shared.Certificate, security: operations.CreateCertSecurity, config?: AxiosRequestConfig): Promise<operations.CreateCertResponse>;
    /**
     * Delete one certificate by id
     *
     * @remarks
     * Delete one certificate by id
     */
    deleteCert(req: operations.DeleteCertRequest, security: operations.DeleteCertSecurity, config?: AxiosRequestConfig): Promise<operations.DeleteCertResponse>;
    /**
     * Get one certificate by id
     *
     * @remarks
     * Get one certificate by id
     */
    oneCert(req: operations.OneCertRequest, security: operations.OneCertSecurity, config?: AxiosRequestConfig): Promise<operations.OneCertResponse>;
    /**
     * Update one certificate by id
     *
     * @remarks
     * Update one certificate by id
     */
    patchCert(req: operations.PatchCertRequest, security: operations.PatchCertSecurity, config?: AxiosRequestConfig): Promise<operations.PatchCertResponse>;
    /**
     * Update one certificate by id
     *
     * @remarks
     * Update one certificate by id
     */
    putCert(req: operations.PutCertRequest, security: operations.PutCertSecurity, config?: AxiosRequestConfig): Promise<operations.PutCertResponse>;
}
