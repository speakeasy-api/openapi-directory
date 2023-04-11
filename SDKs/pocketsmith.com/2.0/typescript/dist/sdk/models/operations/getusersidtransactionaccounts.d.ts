import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetUsersIdTransactionAccountsRequest extends SpeakeasyBase {
    /**
     * The unique identifier of the user.
     */
    id: number;
}
export declare class GetUsersIdTransactionAccountsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Not Allowed
     */
    error?: shared.ErrorT;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Success
     */
    transactionAccounts?: shared.TransactionAccount[];
}
