import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class UnsubscribeUserNotificationSecurity extends SpeakeasyBase {
    mwoAuth: string;
}
export declare class UnsubscribeUserNotificationRequest extends SpeakeasyBase {
    notificationSubscription?: shared.NotificationSubscription;
    /**
     * User ID
     */
    userId: number;
}
export declare class UnsubscribeUserNotificationResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * MissingParameter | Failed to delete subscription
     */
    error?: shared.ErrorT;
    /**
     * Deleted notification subscription information
     */
    operationStatus?: shared.OperationStatus;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
