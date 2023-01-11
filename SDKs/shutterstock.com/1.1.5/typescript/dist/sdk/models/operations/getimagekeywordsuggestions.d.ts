import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetImageKeywordSuggestionsSecurity extends SpeakeasyBase {
    basic?: shared.SchemeBasic;
    customerAccessCode?: shared.SchemeCustomerAccessCode;
}
export declare class GetImageKeywordSuggestionsRequest extends SpeakeasyBase {
    request: shared.SearchEntitiesRequest;
    security: GetImageKeywordSuggestionsSecurity;
}
export declare class GetImageKeywordSuggestionsResponse extends SpeakeasyBase {
    contentType: string;
    searchEntitiesResponse?: any;
    statusCode: number;
}
