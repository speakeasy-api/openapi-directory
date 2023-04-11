import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * A spot is an audio file that is to be inserted into streams using cues.
 */
export declare class Spots {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Deletes the spot with the given ID.
     */
    deleteApiV2SpotsId(req: operations.DeleteApiV2SpotsIdRequest, security: operations.DeleteApiV2SpotsIdSecurity, config?: AxiosRequestConfig): Promise<operations.DeleteApiV2SpotsIdResponse>;
    /**
     * Returns the spots matching the query parameters.
     */
    getApiV2Spots(req: operations.GetApiV2SpotsRequest, security: operations.GetApiV2SpotsSecurity, config?: AxiosRequestConfig): Promise<operations.GetApiV2SpotsResponse>;
    /**
     * Returns the spot matching the given ID.
     */
    getApiV2SpotsId(req: operations.GetApiV2SpotsIdRequest, security: operations.GetApiV2SpotsIdSecurity, config?: AxiosRequestConfig): Promise<operations.GetApiV2SpotsIdResponse>;
    /**
     * Creates a new spot.
     */
    postApiV2Spots(req: operations.PostApiV2SpotsRequestBody, security: operations.PostApiV2SpotsSecurity, config?: AxiosRequestConfig): Promise<operations.PostApiV2SpotsResponse>;
}
