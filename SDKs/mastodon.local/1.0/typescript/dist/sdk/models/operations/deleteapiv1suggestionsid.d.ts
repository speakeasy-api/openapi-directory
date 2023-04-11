import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class DeleteApiV1SuggestionsIdSecurity extends SpeakeasyBase {
    bearerAuth: string;
}
export declare class DeleteApiV1SuggestionsIdRequest extends SpeakeasyBase {
    /**
     * id of the account in the database to be removed from suggestions
     */
    id: string;
}
export declare class DeleteApiV1SuggestionsIdResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Invalid or missing Authorization header
     */
    error?: shared.ErrorT;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successfully removed
     */
    deleteApiV1SuggestionsId200ApplicationJSONObject?: Record<string, any>;
}
