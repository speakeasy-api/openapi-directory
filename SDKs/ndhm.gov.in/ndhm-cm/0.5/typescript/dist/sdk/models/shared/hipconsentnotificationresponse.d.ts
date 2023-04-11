import { SpeakeasyBase } from "../../../internal/utils";
import { ConsentAcknowledgement } from "./consentacknowledgement";
import { ErrorT } from "./error";
import { RequestReference } from "./requestreference";
export declare class HIPConsentNotificationResponse extends SpeakeasyBase {
    acknowledgement?: ConsentAcknowledgement;
    error?: ErrorT;
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
