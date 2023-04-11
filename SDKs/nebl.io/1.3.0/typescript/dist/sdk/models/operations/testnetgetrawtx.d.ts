import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class TestnetGetRawTxRequest extends SpeakeasyBase {
    /**
     * Transaction ID
     */
    txid: string;
}
export declare class TestnetGetRawTxResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Object containing raw hex of transaction
     */
    getRawTxResponse?: shared.GetRawTxResponse;
}
