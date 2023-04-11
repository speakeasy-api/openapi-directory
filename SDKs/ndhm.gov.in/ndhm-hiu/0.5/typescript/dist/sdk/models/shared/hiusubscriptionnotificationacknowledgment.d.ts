import { SpeakeasyBase } from "../../../internal/utils";
import { ErrorT } from "./error";
import { RequestReference } from "./requestreference";
export declare enum HIUSubscriptionNotificationAcknowledgmentAcknowledgementStatusEnum {
    Ok = "OK"
}
export declare class HIUSubscriptionNotificationAcknowledgmentAcknowledgement extends SpeakeasyBase {
    eventId: string;
    status: HIUSubscriptionNotificationAcknowledgmentAcknowledgementStatusEnum;
}
export declare class HIUSubscriptionNotificationAcknowledgment extends SpeakeasyBase {
    acknowledgement?: HIUSubscriptionNotificationAcknowledgmentAcknowledgement;
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
