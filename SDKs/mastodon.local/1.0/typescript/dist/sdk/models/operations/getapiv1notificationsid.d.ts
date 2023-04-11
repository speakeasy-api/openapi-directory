import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetApiV1NotificationsIdSecurity extends SpeakeasyBase {
    bearerAuth: string;
}
export declare class GetApiV1NotificationsIdRequest extends SpeakeasyBase {
    /**
     * ID of the notification in the database.
     */
    id: string;
}
export declare class GetApiV1NotificationsIdResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Invalid or missing Authorization header
     */
    error?: shared.ErrorT;
    /**
     * Success
     */
    notification?: shared.Notification;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
