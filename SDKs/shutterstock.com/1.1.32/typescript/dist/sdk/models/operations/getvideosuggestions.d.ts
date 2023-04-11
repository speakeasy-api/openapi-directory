import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetVideoSuggestionsSecurity extends SpeakeasyBase {
    basic?: shared.SchemeBasic;
    customerAccessCode?: string;
}
export declare class GetVideoSuggestionsRequest extends SpeakeasyBase {
    /**
     * Limit the number of the suggestions
     */
    limit?: number;
    /**
     * Search term for which you want keyword suggestions
     */
    query: string;
}
export declare class GetVideoSuggestionsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    suggestions?: shared.Suggestions;
}
