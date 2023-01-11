import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class SubscribeUserNotificationPathParams extends SpeakeasyBase {
    userId: number;
}
export declare class SubscribeUserNotificationSecurity extends SpeakeasyBase {
    mwoAuth: shared.SchemeMwoAuth;
}
export declare class SubscribeUserNotificationRequest extends SpeakeasyBase {
    pathParams: SubscribeUserNotificationPathParams;
    request?: shared.NotificationSubscription;
    security: SubscribeUserNotificationSecurity;
}
export declare class SubscribeUserNotificationResponse extends SpeakeasyBase {
    contentType: string;
    error?: shared.ErrorT;
    operationStatus?: shared.OperationStatus;
    statusCode: number;
}
