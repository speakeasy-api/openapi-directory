import { SpeakeasyBase } from "../../../internal/utils";
import { ErrorT } from "./error";
import { RequestReference } from "./requestreference";
export declare enum HipHealthInformationRequestAcknowledgementHiRequestSessionStatusEnum {
    Acknowledged = "ACKNOWLEDGED"
}
export declare class HipHealthInformationRequestAcknowledgementHiRequest extends SpeakeasyBase {
    sessionStatus: HipHealthInformationRequestAcknowledgementHiRequestSessionStatusEnum;
    transactionId: string;
}
export declare class HipHealthInformationRequestAcknowledgement extends SpeakeasyBase {
    error?: ErrorT;
    hiRequest?: HipHealthInformationRequestAcknowledgementHiRequest;
    requestId: string;
    resp: RequestReference;
    timestamp: Date;
}
