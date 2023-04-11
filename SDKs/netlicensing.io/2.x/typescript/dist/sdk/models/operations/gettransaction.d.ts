import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetTransactionSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class GetTransactionRequest extends SpeakeasyBase {
    /**
     * Unique number (across all Products of a Vendor) that identifies the Transaction
     */
    transactionNumber: string;
}
export declare class GetTransactionResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful request
     */
    netlicensing?: shared.Netlicensing;
}
