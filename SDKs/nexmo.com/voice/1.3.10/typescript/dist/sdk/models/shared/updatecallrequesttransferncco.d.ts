import { SpeakeasyBase } from "../../../internal/utils";
import { RequestTransferActionParamEnum } from "./requesttransferactionparamenum";
export declare class UpdateCallRequestTransferNccoDestination extends SpeakeasyBase {
    /**
     * Refer to the [NCCO Guide](https://developer.nexmo.com/voice/voice-api/ncco-reference) for a description of possible NCCO parameters.
     */
    ncco: Record<string, any>[];
    /**
     * Always `ncco`
     */
    type: string;
}
export declare class UpdateCallRequestTransferNcco extends SpeakeasyBase {
    /**
     * Transfer the call to a new NCCO
     */
    action: RequestTransferActionParamEnum;
    destination: UpdateCallRequestTransferNccoDestination;
}
