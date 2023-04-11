import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class QuerySuggestedImagesRawRequest extends SpeakeasyBase {
    /**
     * Contains properties we need to query suggested images.
     */
    requestBody: Uint8Array;
    /**
     * API key.
     */
    trainingKey: string;
    /**
     * IterationId to use for the suggested tags and regions.
     */
    iterationId: string;
    /**
     * The project id.
     */
    projectId: string;
}
export declare class QuerySuggestedImagesRawResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    /**
     * Error response
     */
    customVisionError?: shared.CustomVisionError;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    suggestedTagAndRegionQuery?: shared.SuggestedTagAndRegionQuery;
}
