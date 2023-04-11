import { SpeakeasyBase } from "../../../internal/utils";
import { HIUSubscriptionEventContent } from "./hiusubscriptioneventcontent";
import { SubscriptionCategoryEnum } from "./subscriptioncategoryenum";
export declare class HIUSubscriptionNotificationEvent extends SpeakeasyBase {
    category: SubscriptionCategoryEnum;
    content: HIUSubscriptionEventContent;
    id: string;
    /**
     * Date time format in UTC, includes miliseconds YYYY-MM-DDThh:mm:ss.vZ
     */
    published: Date;
    subscriptionId: string;
}
export declare class HIUSubscriptionNotification extends SpeakeasyBase {
    event: HIUSubscriptionNotificationEvent;
    /**
     * a nonce, unique for each HTTP request
     */
    requestId: string;
    /**
     * Date time format in UTC, includes miliseconds YYYY-MM-DDThh:mm:ss.vZ
     */
    timestamp: Date;
}
