import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class TestnetGetTransactionInfoRequest extends SpeakeasyBase {
    /**
     * Neblio txid to get information on.
     */
    txid: string;
}
export declare class TestnetGetTransactionInfoResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Unexpected error
     */
    error?: shared.ErrorT;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * An object represending this transaction
     */
    getTransactionInfoResponse?: shared.GetTransactionInfoResponse;
}
