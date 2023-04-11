import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class CheckForNotificationsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Bad Request
     */
    checkForNotifications400WildcardString?: string;
    /**
     * Unauthorized
     */
    checkForNotifications401WildcardString?: string;
    /**
     * Not Found
     */
    checkForNotifications404WildcardString?: string;
    /**
     * Conflict
     */
    checkForNotifications409WildcardString?: string;
}
