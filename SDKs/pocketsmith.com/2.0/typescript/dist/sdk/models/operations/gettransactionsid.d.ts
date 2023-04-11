import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetTransactionsIdRequest extends SpeakeasyBase {
    /**
     * The unique identifier of the transaction.
     */
    id: number;
}
export declare class GetTransactionsIdResponse extends SpeakeasyBase {
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
    transaction?: shared.Transaction;
}
