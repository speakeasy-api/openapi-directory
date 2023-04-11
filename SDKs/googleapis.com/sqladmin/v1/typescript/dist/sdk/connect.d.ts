import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Connect {
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
    sqlConnectGenerateEphemeral(req: operations.SqlConnectGenerateEphemeralRequest, security: operations.SqlConnectGenerateEphemeralSecurity, config?: AxiosRequestConfig): Promise<operations.SqlConnectGenerateEphemeralResponse>;
    /**
     * Retrieves connect settings about a Cloud SQL instance.
     */
    sqlConnectGet(req: operations.SqlConnectGetRequest, security: operations.SqlConnectGetSecurity, config?: AxiosRequestConfig): Promise<operations.SqlConnectGetResponse>;
}
