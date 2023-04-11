import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PostApiV1NotificationsIdDismissSecurity extends SpeakeasyBase {
    bearerAuth: string;
}
export declare class PostApiV1NotificationsIdDismissRequest extends SpeakeasyBase {
    /**
     * ID of the notification in the database.
     */
    id: string;
}
export declare class PostApiV1NotificationsIdDismissResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Invalid or missing Authorization header
     */
    error?: shared.ErrorT;
    /**
     * Notification with given ID successfully dismissed
     */
    notification?: shared.Notification;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
