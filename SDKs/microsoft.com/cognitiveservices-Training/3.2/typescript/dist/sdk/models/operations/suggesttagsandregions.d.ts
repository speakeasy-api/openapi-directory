import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class SuggestTagsAndRegionsRequest extends SpeakeasyBase {
    /**
     * Array of image ids tag suggestion are needed for. Use GetUntaggedImages API to get imageIds.
     */
    imageIds: string[];
    /**
     * IterationId to use for tag and region suggestion.
     */
    iterationId: string;
    /**
     * The project id.
     */
    projectId: string;
}
export declare class SuggestTagsAndRegionsResponse extends SpeakeasyBase {
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
    suggestedTagAndRegions?: shared.SuggestedTagAndRegion[];
}
