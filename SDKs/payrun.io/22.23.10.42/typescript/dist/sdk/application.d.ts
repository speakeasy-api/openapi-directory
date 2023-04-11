import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Application {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Deletes Application secret
     *
     * @remarks
     * Deletes an Application secret from the given resource location
     */
    deleteApplicationSecret(req: operations.DeleteApplicationSecretRequest, config?: AxiosRequestConfig): Promise<operations.DeleteApplicationSecretResponse>;
    /**
     * Get Application secret
     *
     * @remarks
     * Get the public visible Application secret object
     */
    getApplicationSecret(req: operations.GetApplicationSecretRequest, config?: AxiosRequestConfig): Promise<operations.GetApplicationSecretResponse>;
    /**
     * Get all Application secret links
     *
     * @remarks
     * Get all the Application secret links
     */
    getApplicationSecrets(req: operations.GetApplicationSecretsRequest, config?: AxiosRequestConfig): Promise<operations.GetApplicationSecretsResponse>;
    /**
     * Create a new Application secret
     *
     * @remarks
     * Create new Application secret using auto generated resource location key
     */
    postApplicationSecret(req: operations.PostApplicationSecretRequest, config?: AxiosRequestConfig): Promise<operations.PostApplicationSecretResponse>;
    /**
     * Create a new Application secret
     *
     * @remarks
     * Create / update an Application secret at the given resource location
     */
    putApplicationSecret(req: operations.PutApplicationSecretRequest, config?: AxiosRequestConfig): Promise<operations.PutApplicationSecretResponse>;
}
