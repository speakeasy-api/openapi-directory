import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Projects {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
     */
    texttospeechProjectsLocationsOperationsGet(req: operations.TexttospeechProjectsLocationsOperationsGetRequest, security: operations.TexttospeechProjectsLocationsOperationsGetSecurity, config?: AxiosRequestConfig): Promise<operations.TexttospeechProjectsLocationsOperationsGetResponse>;
    /**
     * Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
     */
    texttospeechProjectsLocationsOperationsList(req: operations.TexttospeechProjectsLocationsOperationsListRequest, security: operations.TexttospeechProjectsLocationsOperationsListSecurity, config?: AxiosRequestConfig): Promise<operations.TexttospeechProjectsLocationsOperationsListResponse>;
    /**
     * Synthesizes long form text asynchronously.
     */
    texttospeechProjectsLocationsSynthesizeLongAudio(req: operations.TexttospeechProjectsLocationsSynthesizeLongAudioRequest, security: operations.TexttospeechProjectsLocationsSynthesizeLongAudioSecurity, config?: AxiosRequestConfig): Promise<operations.TexttospeechProjectsLocationsSynthesizeLongAudioResponse>;
}
