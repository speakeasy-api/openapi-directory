import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetTransactionAccountsIdRequest extends SpeakeasyBase {
    /**
     * The unique identifier of the transaction account.
     */
    id: number;
}
export declare class GetTransactionAccountsIdResponse extends SpeakeasyBase {
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
    transactionAccount?: shared.TransactionAccount;
}
