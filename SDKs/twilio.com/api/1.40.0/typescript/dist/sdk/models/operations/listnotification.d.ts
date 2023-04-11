import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const ListNotificationServerList: readonly ["https://api.twilio.com"];
export declare class ListNotificationSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class ListNotificationRequest extends SpeakeasyBase {
    /**
     * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the Notification resources to read.
     */
    accountSid: string;
    /**
     * Only read notifications of the specified log level. Can be:  `0` to read only ERROR notifications or `1` to read only WARNING notifications. By default, all notifications are read.
     */
    log?: number;
    /**
     * Only show notifications for the specified date, formatted as `YYYY-MM-DD`. You can also specify an inequality, such as `<=YYYY-MM-DD` for messages logged at or before midnight on a date, or `>=YYYY-MM-DD` for messages logged at or after midnight on a date.
     */
    messageDate?: Date;
    /**
     * Only show notifications for the specified date, formatted as `YYYY-MM-DD`. You can also specify an inequality, such as `<=YYYY-MM-DD` for messages logged at or before midnight on a date, or `>=YYYY-MM-DD` for messages logged at or after midnight on a date.
     */
    messageDateLessThan?: Date;
    /**
     * Only show notifications for the specified date, formatted as `YYYY-MM-DD`. You can also specify an inequality, such as `<=YYYY-MM-DD` for messages logged at or before midnight on a date, or `>=YYYY-MM-DD` for messages logged at or after midnight on a date.
     */
    messageDateGreaterThan?: Date;
    /**
     * The page index. This value is simply for client state.
     */
    page?: number;
    /**
     * How many resources to return in each list page. The default is 50, and the maximum is 1000.
     */
    pageSize?: number;
    /**
     * The page token. This is provided by the API.
     */
    pageToken?: string;
}
/**
 * OK
 */
export declare class ListNotificationListNotificationResponse extends SpeakeasyBase {
    end?: number;
    firstPageUri?: string;
    nextPageUri?: string;
    notifications?: shared.ApiV2010AccountNotification[];
    page?: number;
    pageSize?: number;
    previousPageUri?: string;
    start?: number;
    uri?: string;
}
export declare class ListNotificationResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    listNotificationResponse?: ListNotificationListNotificationResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
