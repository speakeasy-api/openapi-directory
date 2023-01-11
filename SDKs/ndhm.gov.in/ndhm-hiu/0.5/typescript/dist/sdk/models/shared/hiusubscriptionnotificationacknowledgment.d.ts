import { SpeakeasyBase } from "../../../internal/utils";
import { ErrorT } from "./error";
import { RequestReference } from "./requestreference";
export declare enum HiuSubscriptionNotificationAcknowledgmentAcknowledgementStatusEnum {
    Ok = "OK"
}
export declare class HiuSubscriptionNotificationAcknowledgmentAcknowledgement extends SpeakeasyBase {
    eventId: string;
    status: HiuSubscriptionNotificationAcknowledgmentAcknowledgementStatusEnum;
}
export declare class HiuSubscriptionNotificationAcknowledgment extends SpeakeasyBase {
    acknowledgement?: HiuSubscriptionNotificationAcknowledgmentAcknowledgement;
    error?: ErrorT;
    requestId: string;
    resp: RequestReference;
    timestamp: Date;
}
