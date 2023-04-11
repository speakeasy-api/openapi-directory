import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * TLS/SSL Certificates prove the identity of a Server and are used to encrypt client traffic.
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
     * Delete a Certificate
     *
     * @remarks
     * Deletes a Certificate.
     */
    deleteCertificatesId(req: operations.DeleteCertificatesIdRequest, config?: AxiosRequestConfig): Promise<operations.DeleteCertificatesIdResponse>;
    /**
     * Get all Certificates
     *
     * @remarks
     * Returns all Certificate objects.
     */
    getCertificates(req: operations.GetCertificatesRequest, config?: AxiosRequestConfig): Promise<operations.GetCertificatesResponse>;
    /**
     * Get a Certificate
     *
     * @remarks
     * Gets a specific Certificate object.
     */
    getCertificatesId(req: operations.GetCertificatesIdRequest, config?: AxiosRequestConfig): Promise<operations.GetCertificatesIdResponse>;
    /**
     * Create a Certificate
     *
     * @remarks
     * Creates a new Certificate.
     *
     * The default type **uploaded** allows for uploading your existing `certificate` and `private_key` in PEM format. You have to monitor its expiration date and handle renewal yourself.
     *
     * In contrast, type **managed** requests a new Certificate from *Let's Encrypt* for the specified `domain_names`. Only domains managed by *Hetzner DNS* are supported. We handle renewal and timely alert the project owner via email if problems occur.
     *
     * For type `managed` Certificates the `action` key of the response contains the Action that allows for tracking the issuance process. For type `uploaded` Certificates the `action` is always null.
     *
     */
    postCertificates(req: operations.PostCertificatesCreateCertificateRequest, config?: AxiosRequestConfig): Promise<operations.PostCertificatesResponse>;
    /**
     * Update a Certificate
     *
     * @remarks
     * Updates the Certificate properties.
     *
     * Note that when updating labels, the Certificate’s current set of labels will be replaced with the labels provided in the request body. So, for example, if you want to add a new label, you have to provide all existing labels plus the new label in the request body.
     *
     * Note: if the Certificate object changes during the request, the response will be a “conflict” error.
     *
     */
    putCertificatesId(req: operations.PutCertificatesIdRequest, config?: AxiosRequestConfig): Promise<operations.PutCertificatesIdResponse>;
}
