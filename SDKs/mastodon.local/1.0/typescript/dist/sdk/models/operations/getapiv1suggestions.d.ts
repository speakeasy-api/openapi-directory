import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetApiV1SuggestionsSecurity extends SpeakeasyBase {
    bearerAuth: string;
}
export declare class GetApiV1SuggestionsRequest extends SpeakeasyBase {
    /**
     * Maximum number of results to return. Defaults to 40.
     */
    limit?: number;
}
export declare class GetApiV1SuggestionsResponse extends SpeakeasyBase {
    /**
     * Success.
     */
    account?: shared.Account;
    contentType: string;
    /**
     * Invalid or missing Authorization header
     */
    error?: shared.ErrorT;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
