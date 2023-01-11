import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class SuggestTagsAndRegionsPathParams extends SpeakeasyBase {
    projectId: string;
}
export declare class SuggestTagsAndRegionsQueryParams extends SpeakeasyBase {
    imageIds: string[];
    iterationId: string;
}
export declare class SuggestTagsAndRegionsRequest extends SpeakeasyBase {
    pathParams: SuggestTagsAndRegionsPathParams;
    queryParams: SuggestTagsAndRegionsQueryParams;
}
export declare class SuggestTagsAndRegionsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    customVisionError?: shared.CustomVisionError;
    statusCode: number;
    suggestedTagAndRegions?: shared.SuggestedTagAndRegion[];
}
