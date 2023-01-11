import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UnsubscribeUserNotificationPathParams extends SpeakeasyBase {
    userId: number;
}
export declare class UnsubscribeUserNotificationSecurity extends SpeakeasyBase {
    mwoAuth: shared.SchemeMwoAuth;
}
export declare class UnsubscribeUserNotificationRequest extends SpeakeasyBase {
    pathParams: UnsubscribeUserNotificationPathParams;
    request?: shared.NotificationSubscription;
    security: UnsubscribeUserNotificationSecurity;
}
export declare class UnsubscribeUserNotificationResponse extends SpeakeasyBase {
    contentType: string;
    error?: shared.ErrorT;
    operationStatus?: shared.OperationStatus;
    statusCode: number;
}
