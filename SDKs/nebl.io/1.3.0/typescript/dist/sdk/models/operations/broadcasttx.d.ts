import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class BroadcastTxRequest extends SpeakeasyBase {
    request: shared.BroadcastTxRequest;
}
export declare class BroadcastTxResponse extends SpeakeasyBase {
    contentType: string;
    error?: shared.ErrorT;
    statusCode: number;
    broadcastTxResponse?: shared.BroadcastTxResponse;
}
