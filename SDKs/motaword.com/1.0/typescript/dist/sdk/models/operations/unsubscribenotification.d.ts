import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UnsubscribeNotificationRequest extends SpeakeasyBase {
    request?: shared.NotificationSubscription;
}
export declare class UnsubscribeNotificationResponse extends SpeakeasyBase {
    contentType: string;
    error?: shared.ErrorT;
    operationStatus?: shared.OperationStatus;
    statusCode: number;
}
