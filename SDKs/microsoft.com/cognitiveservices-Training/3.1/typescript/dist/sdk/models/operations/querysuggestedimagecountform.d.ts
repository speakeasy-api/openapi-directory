import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class QuerySuggestedImageCountFormRequest extends SpeakeasyBase {
    /**
     * Model that contains tagIds, threshold and projectType to query by.
     */
    tagFilter: shared.TagFilter;
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
export declare class QuerySuggestedImageCountFormResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    /**
     * Error response
     */
    customVisionError?: shared.CustomVisionError;
    /**
     * OK
     */
    querySuggestedImageCountForm200ApplicationJSONObject?: Record<string, number>;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
