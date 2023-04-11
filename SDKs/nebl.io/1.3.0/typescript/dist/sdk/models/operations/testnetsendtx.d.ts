import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class TestnetSendTxResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Unexpected error
     */
    error?: shared.ErrorT;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * An object containing the TXID if the broadcast was successful
     */
    broadcastTxResponse?: shared.BroadcastTxResponse;
}
