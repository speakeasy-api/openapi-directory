import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class DeleteTransactionsIdRequest extends SpeakeasyBase {
    /**
     * The unique identifier of the transaction.
     */
    id: number;
}
export declare class DeleteTransactionsIdResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Not Allowed
     */
    error?: shared.ErrorT;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
