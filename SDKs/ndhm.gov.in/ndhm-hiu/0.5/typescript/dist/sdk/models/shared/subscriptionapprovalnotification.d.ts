import { SpeakeasyBase } from "../../../internal/utils";
import { HIUSubscription } from "./hiusubscription";
import { SubscriptionStatusEnum } from "./subscriptionstatusenum";
export declare class SubscriptionApprovalNotificationNotification extends SpeakeasyBase {
    status: SubscriptionStatusEnum;
    subscription?: HIUSubscription;
    subscriptionRequestId?: string;
}
export declare class SubscriptionApprovalNotification extends SpeakeasyBase {
    notification: SubscriptionApprovalNotificationNotification;
    /**
     * a nonce, unique for each HTTP request
     */
    requestId: string;
    /**
     * Date time format in UTC, includes miliseconds YYYY-MM-DDThh:mm:ss.vZ
     */
    timestamp: Date;
}
