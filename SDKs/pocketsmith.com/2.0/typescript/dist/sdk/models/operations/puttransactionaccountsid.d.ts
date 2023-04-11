import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PutTransactionAccountsIdRequestBody extends SpeakeasyBase {
    /**
     * The unique identifier of a new institution for the transaction account.
     */
    institutionId?: number;
    /**
     * The starting balance amount of the transaction account.
     */
    startingBalance?: number;
    /**
     * The starting balance date of the transaction account.
     */
    startingBalanceDate?: string;
}
export declare class PutTransactionAccountsIdRequest extends SpeakeasyBase {
    requestBody?: PutTransactionAccountsIdRequestBody;
    /**
     * The unique identifier of the transaction account.
     */
    id: number;
}
export declare class PutTransactionAccountsIdResponse extends SpeakeasyBase {
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
