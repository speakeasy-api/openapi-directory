import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Internalappsharingartifacts {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Uploads an APK to internal app sharing. If you are using the Google API client libraries, please increase the timeout of the http request before calling this endpoint (a timeout of 2 minutes is recommended). See [Timeouts and Errors](https://developers.google.com/api-client-library/java/google-api-java-client/errors) for an example in java.
     */
    androidpublisherInternalappsharingartifactsUploadapk(req: operations.AndroidpublisherInternalappsharingartifactsUploadapkRequest, security: operations.AndroidpublisherInternalappsharingartifactsUploadapkSecurity, config?: AxiosRequestConfig): Promise<operations.AndroidpublisherInternalappsharingartifactsUploadapkResponse>;
    /**
     * Uploads an app bundle to internal app sharing. If you are using the Google API client libraries, please increase the timeout of the http request before calling this endpoint (a timeout of 2 minutes is recommended). See [Timeouts and Errors](https://developers.google.com/api-client-library/java/google-api-java-client/errors) for an example in java.
     */
    androidpublisherInternalappsharingartifactsUploadbundle(req: operations.AndroidpublisherInternalappsharingartifactsUploadbundleRequest, security: operations.AndroidpublisherInternalappsharingartifactsUploadbundleSecurity, config?: AxiosRequestConfig): Promise<operations.AndroidpublisherInternalappsharingartifactsUploadbundleResponse>;
}
