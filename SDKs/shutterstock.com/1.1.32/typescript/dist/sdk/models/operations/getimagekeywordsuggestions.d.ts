import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetImageKeywordSuggestionsSecurity extends SpeakeasyBase {
    basic?: shared.SchemeBasic;
    customerAccessCode?: string;
}
export declare class GetImageKeywordSuggestionsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    searchEntitiesResponse?: shared.SearchEntitiesResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
