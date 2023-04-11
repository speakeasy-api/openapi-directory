import { SpeakeasyBase } from "../../../internal/utils";
import { ErrorT } from "./error";
import { RequestReference } from "./requestreference";
export declare enum PatientAuthNotificationAcknowledgementAcknowledgementStatusEnum {
    Ok = "OK"
}
export declare class PatientAuthNotificationAcknowledgementAcknowledgement extends SpeakeasyBase {
    status: PatientAuthNotificationAcknowledgementAcknowledgementStatusEnum;
}
export declare class PatientAuthNotificationAcknowledgement extends SpeakeasyBase {
    acknowledgement?: PatientAuthNotificationAcknowledgementAcknowledgement;
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
