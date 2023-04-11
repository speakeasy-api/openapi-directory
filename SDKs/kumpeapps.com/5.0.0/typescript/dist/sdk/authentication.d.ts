import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Authenticate KumpeApps users (required to get apiKey)
 */
export declare class Authentication {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Compromise app key
     *
     * @remarks
     * Pass an app key to mark it as compromised. This may be submitted by the app owner or a concerned party that has optained the compromised app key.
     */
    appkeyPatch(req: operations.AppkeyPatchRequest, config?: AxiosRequestConfig): Promise<operations.AppkeyPatchResponse>;
    /**
     * Request app key
     *
     * @remarks
     * Request a new app key by passing username and password for app account
     */
    appkeyPost(req: operations.AppkeyPostRequest, config?: AxiosRequestConfig): Promise<operations.AppkeyPostResponse>;
    /**
     * Deactivate app key
     *
     * @remarks
     * Pass your app key to deactivate the key
     */
    appkeyPut(req: operations.AppkeyPutRequest, security: operations.AppkeyPutSecurity, config?: AxiosRequestConfig): Promise<operations.AppkeyPutResponse>;
    /**
     * Compromise app key
     *
     * @remarks
     * Pass an app key to mark it as compromised. This may be submitted by the app owner or a concerned party that has optained the compromised app key.
     */
    authAppkeyPatch(req: operations.AuthAppkeyPatchRequest, config?: AxiosRequestConfig): Promise<operations.AuthAppkeyPatchResponse>;
    /**
     * Request app key
     *
     * @remarks
     * Request a new app key by passing username and password for app account
     */
    authAppkeyPost(req: operations.AuthAppkeyPostRequest, config?: AxiosRequestConfig): Promise<operations.AuthAppkeyPostResponse>;
    /**
     * Deactivate app key
     *
     * @remarks
     * Pass your app key to deactivate the key
     */
    authAppkeyPut(req: operations.AuthAppkeyPutRequest, security: operations.AuthAppkeyPutSecurity, config?: AxiosRequestConfig): Promise<operations.AuthAppkeyPutResponse>;
    /**
     * Request auth key for user (login user)
     *
     * @remarks
     * Obtain auth key for user that has provided their username and password to login to your app. (or to obtain an auth key for a script like IFTTT)
     */
    authAuthkeyGet(req: operations.AuthAuthkeyGetRequest, security: operations.AuthAuthkeyGetSecurity, config?: AxiosRequestConfig): Promise<operations.AuthAuthkeyGetResponse>;
    /**
     * Compromise auth key
     *
     * @remarks
     * Mark user auth key as compromised
     */
    authAuthkeyPatch(req: operations.AuthAuthkeyPatchRequest, config?: AxiosRequestConfig): Promise<operations.AuthAuthkeyPatchResponse>;
    /**
     * Request auth key for user (login user)
     *
     * @remarks
     * Obtain auth key for user that has provided their username and password to login to your app. (or to obtain an auth key for a script like IFTTT)
     */
    authAuthkeyPost(req: operations.AuthAuthkeyPostRequest, security: operations.AuthAuthkeyPostSecurity, config?: AxiosRequestConfig): Promise<operations.AuthAuthkeyPostResponse>;
    /**
     * Deactivate auth key (logout)
     *
     * @remarks
     * Deactivate auth key for user logging them out of your application
     */
    authAuthkeyPut(req: operations.AuthAuthkeyPutRequest, security: operations.AuthAuthkeyPutSecurity, config?: AxiosRequestConfig): Promise<operations.AuthAuthkeyPutResponse>;
    /**
     * Verifies YubiKey OTP for authenticated user
     *
     * @remarks
     * Verifies YubiKey OTP for authenticated user
     */
    authVerifyotpGet(req: operations.AuthVerifyotpGetRequest, security: operations.AuthVerifyotpGetSecurity, config?: AxiosRequestConfig): Promise<operations.AuthVerifyotpGetResponse>;
    /**
     * Request auth key for user (login user)
     *
     * @remarks
     * Obtain auth key for user that has provided their username and password to login to your app. (or to obtain an auth key for a script like IFTTT)
     */
    authkeyGet(req: operations.AuthkeyGetRequest, security: operations.AuthkeyGetSecurity, config?: AxiosRequestConfig): Promise<operations.AuthkeyGetResponse>;
    /**
     * Compromise auth key
     *
     * @remarks
     * Mark user auth key as compromised
     */
    authkeyPatch(req: operations.AuthkeyPatchRequest, config?: AxiosRequestConfig): Promise<operations.AuthkeyPatchResponse>;
    /**
     * Request auth key for user (login user)
     *
     * @remarks
     * Obtain auth key for user that has provided their username and password to login to your app. (or to obtain an auth key for a script like IFTTT)
     */
    authkeyPost(req: operations.AuthkeyPostRequest, security: operations.AuthkeyPostSecurity, config?: AxiosRequestConfig): Promise<operations.AuthkeyPostResponse>;
    /**
     * Deactivate auth key (logout)
     *
     * @remarks
     * Deactivate auth key for user logging them out of your application
     */
    authkeyPut(req: operations.AuthkeyPutRequest, security: operations.AuthkeyPutSecurity, config?: AxiosRequestConfig): Promise<operations.AuthkeyPutResponse>;
}
