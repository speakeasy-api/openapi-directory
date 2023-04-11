import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class ClientAttributeCertificate {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Get key info
     */
    getRealmClientsIdCertificatesAttr(req: operations.GetRealmClientsIdCertificatesAttrRequest, config?: AxiosRequestConfig): Promise<operations.GetRealmClientsIdCertificatesAttrResponse>;
    /**
     * Get a keystore file for the client, containing private key and public certificate
     */
    postRealmClientsIdCertificatesAttrDownload(req: operations.PostRealmClientsIdCertificatesAttrDownloadRequest, config?: AxiosRequestConfig): Promise<operations.PostRealmClientsIdCertificatesAttrDownloadResponse>;
    /**
     * Generate a new certificate with new key pair
     */
    postRealmClientsIdCertificatesAttrGenerate(req: operations.PostRealmClientsIdCertificatesAttrGenerateRequest, config?: AxiosRequestConfig): Promise<operations.PostRealmClientsIdCertificatesAttrGenerateResponse>;
    /**
     * Generate a new keypair and certificate, and get the private key file   Generates a keypair and certificate and serves the private key in a specified keystore format.
     */
    postRealmClientsIdCertificatesAttrGenerateAndDownload(req: operations.PostRealmClientsIdCertificatesAttrGenerateAndDownloadRequest, config?: AxiosRequestConfig): Promise<operations.PostRealmClientsIdCertificatesAttrGenerateAndDownloadResponse>;
    /**
     * Upload certificate and eventually private key
     */
    postRealmClientsIdCertificatesAttrUpload(req: operations.PostRealmClientsIdCertificatesAttrUploadRequest, config?: AxiosRequestConfig): Promise<operations.PostRealmClientsIdCertificatesAttrUploadResponse>;
    /**
     * Upload only certificate, not private key
     */
    postRealmClientsIdCertificatesAttrUploadCertificate(req: operations.PostRealmClientsIdCertificatesAttrUploadCertificateRequest, config?: AxiosRequestConfig): Promise<operations.PostRealmClientsIdCertificatesAttrUploadCertificateResponse>;
}
