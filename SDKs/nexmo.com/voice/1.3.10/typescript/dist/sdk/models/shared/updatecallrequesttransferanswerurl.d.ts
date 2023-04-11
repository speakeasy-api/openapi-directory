import { SpeakeasyBase } from "../../../internal/utils";
import { RequestTransferActionParamEnum } from "./requesttransferactionparamenum";
export declare class UpdateCallRequestTransferAnswerUrlDestination extends SpeakeasyBase {
    /**
     * Always `ncco`
     */
    type: string;
    /**
     * The URL that Vonage makes a request to. Must return an NCCO.
     */
    url: string[];
}
export declare class UpdateCallRequestTransferAnswerUrl extends SpeakeasyBase {
    /**
     * Transfer the call to a new NCCO
     */
    action: RequestTransferActionParamEnum;
    destination: UpdateCallRequestTransferAnswerUrlDestination;
}
