import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetImageSuggestionsQueryParams extends SpeakeasyBase {
    limit?: number;
    query: string;
}
export declare class GetImageSuggestionsSecurity extends SpeakeasyBase {
    basic?: shared.SchemeBasic;
    customerAccessCode?: shared.SchemeCustomerAccessCode;
}
export declare class GetImageSuggestionsRequest extends SpeakeasyBase {
    queryParams: GetImageSuggestionsQueryParams;
    security: GetImageSuggestionsSecurity;
}
export declare class GetImageSuggestionsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    suggestions?: shared.Suggestions;
}
