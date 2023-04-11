import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Segments include the audio content and related information such as the in-cue and out-cue.
 */
export declare class Segments {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Deletes the segment with the given ID.
     */
    deleteApiV2SegmentsId(req: operations.DeleteApiV2SegmentsIdRequest, security: operations.DeleteApiV2SegmentsIdSecurity, config?: AxiosRequestConfig): Promise<operations.DeleteApiV2SegmentsIdResponse>;
    /**
     * Returns the segments matching the query parameters.
     */
    getApiV2Segments(req: operations.GetApiV2SegmentsRequest, security: operations.GetApiV2SegmentsSecurity, config?: AxiosRequestConfig): Promise<operations.GetApiV2SegmentsResponse>;
    /**
     * Returns the segment matching the given ID.
     */
    getApiV2SegmentsId(req: operations.GetApiV2SegmentsIdRequest, security: operations.GetApiV2SegmentsIdSecurity, config?: AxiosRequestConfig): Promise<operations.GetApiV2SegmentsIdResponse>;
    /**
     * UNDER DEVELOPMENT - Returns the audio content segment matching the given ID.
     */
    getApiV2SegmentsIdContent(req: operations.GetApiV2SegmentsIdContentRequest, security: operations.GetApiV2SegmentsIdContentSecurity, config?: AxiosRequestConfig): Promise<operations.GetApiV2SegmentsIdContentResponse>;
    /**
     * Creates a new segment.
     */
    postApiV2Segments(req: operations.PostApiV2SegmentsRequestBody, security: operations.PostApiV2SegmentsSecurity, config?: AxiosRequestConfig): Promise<operations.PostApiV2SegmentsResponse>;
}
