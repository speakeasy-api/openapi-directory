import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetTransactionsIdRequest extends SpeakeasyBase {
    /**
     * The unique identifier for the transaction.
     *
     * @remarks
     *
     */
    id: string;
}
export declare class GetTransactionsIdResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Successful Response
     */
    getTransactionResponse?: shared.GetTransactionResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
