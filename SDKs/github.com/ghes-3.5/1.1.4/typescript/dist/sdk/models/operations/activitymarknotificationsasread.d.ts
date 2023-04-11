import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ActivityMarkNotificationsAsReadRequestBody extends SpeakeasyBase {
    /**
     * Describes the last point that notifications were checked. Anything updated since this time will not be marked as read. If you omit this parameter, all notifications are marked as read. This is a timestamp in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format: `YYYY-MM-DDTHH:MM:SSZ`. Default: The current timestamp.
     */
    lastReadAt?: Date;
    /**
     * Whether the notification has been read.
     */
    read?: boolean;
}
/**
 * Response
 */
export declare class ActivityMarkNotificationsAsRead202ApplicationJSON extends SpeakeasyBase {
    message?: string;
}
export declare class ActivityMarkNotificationsAsReadResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Response
     */
    activityMarkNotificationsAsRead202ApplicationJSONObject?: ActivityMarkNotificationsAsRead202ApplicationJSON;
    /**
     * Requires authentication
     */
    basicError?: shared.BasicError;
}
