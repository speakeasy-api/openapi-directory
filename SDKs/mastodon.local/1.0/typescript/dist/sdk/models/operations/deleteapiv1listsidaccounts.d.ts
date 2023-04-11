import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class DeleteApiV1ListsIdAccountsSecurity extends SpeakeasyBase {
    bearerAuth: string;
}
export declare class DeleteApiV1ListsIdAccountsRequest extends SpeakeasyBase {
    /**
     * Array of account IDs to add to the list.
     */
    accountIds: string[];
    /**
     * ID of the list in the database
     */
    id: string;
}
export declare class DeleteApiV1ListsIdAccountsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Invalid or missing Authorization header
     */
    error?: shared.ErrorT;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Account was successfully removed from the list, or it was already not in the list.
     */
    deleteApiV1ListsIdAccounts200ApplicationJSONObject?: Record<string, any>;
}
