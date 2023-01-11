import { SpeakeasyBase } from "../../../internal/utils";
import { ConsentAcknowledgement } from "./consentacknowledgement";
import { ErrorT } from "./error";
import { RequestReference } from "./requestreference";
export declare class HiuConsentNotificationResponse extends SpeakeasyBase {
    acknowledgement?: ConsentAcknowledgement[];
    error?: ErrorT;
    requestId: string;
    resp: RequestReference;
    timestamp: Date;
}
