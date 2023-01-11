import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class QuerySuggestedImagesPathParams extends SpeakeasyBase {
    projectId: string;
}
export declare class QuerySuggestedImagesQueryParams extends SpeakeasyBase {
    iterationId: string;
}
export declare class QuerySuggestedImagesRequests extends SpeakeasyBase {
    applicationXML: Uint8Array;
    suggestedTagAndRegionQueryToken?: shared.SuggestedTagAndRegionQueryToken;
    suggestedTagAndRegionQueryToken1?: shared.SuggestedTagAndRegionQueryToken;
    textXML: Uint8Array;
}
export declare class QuerySuggestedImagesRequest extends SpeakeasyBase {
    pathParams: QuerySuggestedImagesPathParams;
    queryParams: QuerySuggestedImagesQueryParams;
    request: QuerySuggestedImagesRequests;
}
export declare class QuerySuggestedImagesResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    customVisionError?: shared.CustomVisionError;
    statusCode: number;
    suggestedTagAndRegionQuery?: shared.SuggestedTagAndRegionQuery;
}
