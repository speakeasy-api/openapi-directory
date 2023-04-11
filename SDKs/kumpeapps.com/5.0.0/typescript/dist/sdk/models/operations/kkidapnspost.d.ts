import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class KkidApnsPostSecurity extends SpeakeasyBase {
    authKey: string;
}
/**
 * Notification section name (optional for send, default is active)
 */
export declare enum KkidApnsPostPriorityEnum {
    Passive = "passive",
    Active = "active",
    TimeSensitive = "time-sensitive",
    Critical = "critical"
}
/**
 * Notification section name (required for send/subscribe/unsubscribe)
 */
export declare enum KkidApnsPostSectionEnum {
    Chores = "Chores",
    ChoresNew = "Chores-New",
    ChoresReminders = "Chores-Reminders",
    Allowance = "Allowance",
    AllowanceNew = "Allowance-New",
    WishList = "WishList"
}
/**
 * tool you wish to talk to
 */
export declare enum KkidApnsPostToolEnum {
    Register = "register",
    Subscribe = "subscribe",
    Unsubscribe = "unsubscribe",
    Send = "send"
}
export declare class KkidApnsPostRequest extends SpeakeasyBase {
    /**
     * Number for badge icon (optional for send)
     */
    badge?: number;
    /**
     * Name of device to associate to token (required for register)
     */
    devicename?: string;
    /**
     * userID of the kid
     */
    kidUserId: number;
    /**
     * APNS message body (required for send)
     */
    message?: string;
    /**
     * Notification section name (optional for send, default is active)
     */
    priority?: KkidApnsPostPriorityEnum;
    /**
     * Notification section name (required for send/subscribe/unsubscribe)
     */
    section?: KkidApnsPostSectionEnum;
    /**
     * Name of sound file to play for send notification (optional for send)
     */
    sound?: string;
    /**
     * title of APNS message (required for send)
     */
    title?: string;
    /**
     * device APNS token (required for register)
     */
    token?: string;
    /**
     * tool you wish to talk to
     */
    tool: KkidApnsPostToolEnum;
}
export declare class KkidApnsPostResponse extends SpeakeasyBase {
    /**
     * Method Not Allowed- API user does not have access to use this method
     */
    fourHundredAndFive?: shared.FourHundredAndFive;
    /**
     * API Access Denied! Your API key is invalid, expired, or not supplied!
     */
    fourHundredAndTwelve?: shared.FourHundredAndTwelve;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * No Data Returned
     */
    nodata?: shared.Nodata;
    /**
     * search results matching criteria
     */
    success?: shared.Success;
}
