import { SpeakeasyBase } from "../../../internal/utils";
import { ErrorT } from "./error";
import { RequestReference } from "./requestreference";
export declare enum HIPHealthInformationRequestAcknowledgementHiRequestSessionStatusEnum {
    Acknowledged = "ACKNOWLEDGED"
}
export declare class HIPHealthInformationRequestAcknowledgementHiRequest extends SpeakeasyBase {
    sessionStatus: HIPHealthInformationRequestAcknowledgementHiRequestSessionStatusEnum;
    transactionId: string;
}
export declare class HIPHealthInformationRequestAcknowledgement extends SpeakeasyBase {
    error?: ErrorT;
    hiRequest?: HIPHealthInformationRequestAcknowledgementHiRequest;
    /**
     * a nonce, unique for each HTTP request
     */
    requestId: string;
    resp: RequestReference;
    /**
     * Date time format in UTC, includes miliseconds YYYY-MM-DDThh:mm:ss.vZ
     */
    timestamp: Date;
}
