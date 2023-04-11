import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class SslCerts {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Generates a short-lived X509 certificate containing the provided public key and signed by a private key specific to the target instance. Users may use the certificate to authenticate as themselves when connecting to the database.
     */
    sqlSslCertsCreateEphemeral(req: operations.SqlSslCertsCreateEphemeralRequest, security: operations.SqlSslCertsCreateEphemeralSecurity, config?: AxiosRequestConfig): Promise<operations.SqlSslCertsCreateEphemeralResponse>;
    /**
     * Deletes the SSL certificate. For First Generation instances, the certificate remains valid until the instance is restarted.
     */
    sqlSslCertsDelete(req: operations.SqlSslCertsDeleteRequest, security: operations.SqlSslCertsDeleteSecurity, config?: AxiosRequestConfig): Promise<operations.SqlSslCertsDeleteResponse>;
    /**
     * Retrieves a particular SSL certificate. Does not include the private key (required for usage). The private key must be saved from the response to initial creation.
     */
    sqlSslCertsGet(req: operations.SqlSslCertsGetRequest, security: operations.SqlSslCertsGetSecurity, config?: AxiosRequestConfig): Promise<operations.SqlSslCertsGetResponse>;
    /**
     * Creates an SSL certificate and returns it along with the private key and server certificate authority. The new certificate will not be usable until the instance is restarted.
     */
    sqlSslCertsInsert(req: operations.SqlSslCertsInsertRequest, security: operations.SqlSslCertsInsertSecurity, config?: AxiosRequestConfig): Promise<operations.SqlSslCertsInsertResponse>;
    /**
     * Lists all of the current SSL certificates for the instance.
     */
    sqlSslCertsList(req: operations.SqlSslCertsListRequest, security: operations.SqlSslCertsListSecurity, config?: AxiosRequestConfig): Promise<operations.SqlSslCertsListResponse>;
}
