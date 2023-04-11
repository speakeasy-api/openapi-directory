import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class QuerySuggestedImagesJsonRequest extends SpeakeasyBase {
    /**
     * Contains properties we need to query suggested images.
     */
    suggestedTagAndRegionQueryToken: shared.SuggestedTagAndRegionQueryToken;
    /**
     * IterationId to use for the suggested tags and regions.
     */
    iterationId: string;
    /**
     * The project id.
     */
    projectId: string;
}
export declare class QuerySuggestedImagesJsonResponse extends SpeakeasyBase {
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
