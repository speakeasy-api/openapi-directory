import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Spot insertions define spots to play when a cue is received.
 */
export declare class SpotInsertions {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Deletes the spot insertion with the given ID.
     */
    deleteApiV2SpotinsertionsId(req: operations.DeleteApiV2SpotinsertionsIdRequest, security: operations.DeleteApiV2SpotinsertionsIdSecurity, config?: AxiosRequestConfig): Promise<operations.DeleteApiV2SpotinsertionsIdResponse>;
    /**
     * Returns the spot insertions matching the query parameters.
     */
    getApiV2Spotinsertions(req: operations.GetApiV2SpotinsertionsRequest, security: operations.GetApiV2SpotinsertionsSecurity, config?: AxiosRequestConfig): Promise<operations.GetApiV2SpotinsertionsResponse>;
    /**
     * Returns the spot insertion matching the given ID.
     */
    getApiV2SpotinsertionsId(req: operations.GetApiV2SpotinsertionsIdRequest, security: operations.GetApiV2SpotinsertionsIdSecurity, config?: AxiosRequestConfig): Promise<operations.GetApiV2SpotinsertionsIdResponse>;
    /**
     * Creates a new spot insertion.
     */
    postApiV2Spotinsertions(req: shared.SpotInsertionInput, security: operations.PostApiV2SpotinsertionsSecurity, config?: AxiosRequestConfig): Promise<operations.PostApiV2SpotinsertionsResponse>;
}
