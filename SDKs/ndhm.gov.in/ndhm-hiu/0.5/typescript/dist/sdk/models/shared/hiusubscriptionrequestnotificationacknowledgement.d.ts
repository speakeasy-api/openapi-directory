import { SpeakeasyBase } from "../../../internal/utils";
import { ErrorT } from "./error";
import { RequestReference } from "./requestreference";
export declare enum HIUSubscriptionRequestNotificationAcknowledgementAcknowledgementStatusEnum {
    Ok = "OK"
}
export declare class HIUSubscriptionRequestNotificationAcknowledgementAcknowledgement extends SpeakeasyBase {
    status: HIUSubscriptionRequestNotificationAcknowledgementAcknowledgementStatusEnum;
    subscriptionRequestId: string;
}
export declare class HIUSubscriptionRequestNotificationAcknowledgement extends SpeakeasyBase {
    acknowledgement?: HIUSubscriptionRequestNotificationAcknowledgementAcknowledgement;
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
