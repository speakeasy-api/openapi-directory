import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetApiV1NotificationsSecurity extends SpeakeasyBase {
    bearerAuth: string;
}
export declare class GetApiV1NotificationsRequest extends SpeakeasyBase {
    /**
     * Return only notifications received from this account
     */
    accountId?: string;
    /**
     * Array of types to exclude (follow, favourite, reblog, mention, poll, follow_request)
     */
    excludeTypes?: string[];
    /**
     * Max number of results to return. Defaults to 20.
     */
    limit?: number;
    /**
     * Return results older than ID
     */
    maxId?: string;
    /**
     * Return results immediately newer than ID
     */
    minId?: string;
    /**
     * Return results newer than ID
     */
    sinceId?: string;
}
export declare class GetApiV1NotificationsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Invalid or missing Authorization header
     */
    error?: shared.ErrorT;
    /**
     * Success
     */
    notifications?: shared.Notification[];
    statusCode: number;
    rawResponse?: AxiosResponse;
}
