import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class ActivityMarkRepoNotificationsAsReadRequestBody extends SpeakeasyBase {
    /**
     * Describes the last point that notifications were checked. Anything updated since this time will not be marked as read. If you omit this parameter, all notifications are marked as read. This is a timestamp in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format: `YYYY-MM-DDTHH:MM:SSZ`. Default: The current timestamp.
     */
    lastReadAt?: Date;
}
export declare class ActivityMarkRepoNotificationsAsReadRequest extends SpeakeasyBase {
    requestBody?: ActivityMarkRepoNotificationsAsReadRequestBody;
    /**
     * The account owner of the repository. The name is not case sensitive.
     */
    owner: string;
    /**
     * The name of the repository. The name is not case sensitive.
     */
    repo: string;
}
/**
 * Response
 */
export declare class ActivityMarkRepoNotificationsAsRead202ApplicationJSON extends SpeakeasyBase {
    message?: string;
    url?: string;
}
export declare class ActivityMarkRepoNotificationsAsReadResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Response
     */
    activityMarkRepoNotificationsAsRead202ApplicationJSONObject?: ActivityMarkRepoNotificationsAsRead202ApplicationJSON;
}
