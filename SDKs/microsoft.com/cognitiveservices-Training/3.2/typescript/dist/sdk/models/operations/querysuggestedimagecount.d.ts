import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class QuerySuggestedImageCountPathParams extends SpeakeasyBase {
    projectId: string;
}
export declare class QuerySuggestedImageCountQueryParams extends SpeakeasyBase {
    iterationId: string;
}
export declare class QuerySuggestedImageCountRequests extends SpeakeasyBase {
    applicationXML: Uint8Array;
    tagFilter?: shared.TagFilter;
    tagFilter1?: shared.TagFilter;
    textXML: Uint8Array;
}
export declare class QuerySuggestedImageCountRequest extends SpeakeasyBase {
    pathParams: QuerySuggestedImageCountPathParams;
    queryParams: QuerySuggestedImageCountQueryParams;
    request: QuerySuggestedImageCountRequests;
}
export declare class QuerySuggestedImageCountResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    customVisionError?: shared.CustomVisionError;
    querySuggestedImageCount200ApplicationJSONObject?: Record<string, number>;
    statusCode: number;
}
