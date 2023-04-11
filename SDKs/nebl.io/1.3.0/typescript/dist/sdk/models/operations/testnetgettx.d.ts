import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class TestnetGetTxRequest extends SpeakeasyBase {
    /**
     * Transaction ID
     */
    txid: string;
}
export declare class TestnetGetTxResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Object containing transaction info
     */
    getTxResponse?: shared.GetTxResponse;
}
