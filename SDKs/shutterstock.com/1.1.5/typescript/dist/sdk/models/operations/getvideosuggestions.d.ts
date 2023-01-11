import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetVideoSuggestionsQueryParams extends SpeakeasyBase {
    limit?: number;
    query: string;
}
export declare class GetVideoSuggestionsSecurity extends SpeakeasyBase {
    basic?: shared.SchemeBasic;
    customerAccessCode?: shared.SchemeCustomerAccessCode;
}
export declare class GetVideoSuggestionsRequest extends SpeakeasyBase {
    queryParams: GetVideoSuggestionsQueryParams;
    security: GetVideoSuggestionsSecurity;
}
export declare class GetVideoSuggestionsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    suggestions?: shared.Suggestions;
}
