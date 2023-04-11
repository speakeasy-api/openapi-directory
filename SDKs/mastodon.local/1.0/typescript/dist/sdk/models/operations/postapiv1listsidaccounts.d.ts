import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PostApiV1ListsIdAccountsSecurity extends SpeakeasyBase {
    bearerAuth: string;
}
export declare class PostApiV1ListsIdAccountsRequestBody extends SpeakeasyBase {
    /**
     * Array of account IDs to add to the list.
     */
    accountIds: string[];
}
export declare class PostApiV1ListsIdAccountsRequest extends SpeakeasyBase {
    requestBody?: PostApiV1ListsIdAccountsRequestBody;
    /**
     * ID of the list in the database
     */
    id: string;
}
export declare class PostApiV1ListsIdAccountsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Invalid or missing Authorization header
     */
    error?: shared.ErrorT;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Success
     */
    postApiV1ListsIdAccounts200ApplicationJSONObject?: Record<string, any>;
}
