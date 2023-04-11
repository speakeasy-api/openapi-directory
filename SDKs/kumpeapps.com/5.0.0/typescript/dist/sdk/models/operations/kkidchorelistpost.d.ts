import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class KkidChorelistPostSecurity extends SpeakeasyBase {
    authKey: string;
}
/**
 * day of week (Monday, Tuesday....) for the chore. For weekly chores put Weekly or leave blank
 */
export declare enum KkidChorelistPostDayEnum {
    Sunday = "Sunday",
    Monday = "Monday",
    Tuesday = "Tuesday",
    Wednesday = "Wednesday",
    Thursday = "Thursday",
    Friday = "Friday",
    Saturday = "Saturday",
    Weekly = "Weekly",
    Today = "Today"
}
export declare class KkidChorelistPostRequest extends SpeakeasyBase {
    /**
     * Notes if AI Icons should be used (n for no, y for yes, e for yes- error)
     */
    aiIcon?: string;
    /**
     * block dash option on this chore
     */
    blockDash?: boolean;
    /**
     * mark as sibling can steal chore
     */
    canSteal?: boolean;
    /**
     * optional chore description
     */
    choreDescription?: string;
    /**
     * name of chore
     */
    choreName: string;
    /**
     * number priority of chore (default is 5)
     */
    choreNumber?: number;
    /**
     * day of week (Monday, Tuesday....) for the chore. For weekly chores put Weekly or leave blank
     */
    day?: KkidChorelistPostDayEnum;
    /**
     * ammount of allowance added at end of week for completing this chore
     */
    extraAllowance?: number;
    /**
     * True if this is a calendar note instead of a chore.
     */
    isCalendar?: boolean;
    /**
     * username of kid to assign the chore to.
     */
    kidUsername: string;
    /**
     * text field of nfc tag required to check off chore
     */
    nfcTag?: string;
    /**
     * notes added to chore (visable only on reports, kids do not see this note, this is mostly just for the developer)
     */
    notes?: string;
    /**
     * tag for object detection to search for (required if requireObjectDetection is true)
     */
    objectDetectionTag?: string;
    /**
     * mark as one time chore (does not repeat each week)
     */
    oneTime?: boolean;
    /**
     * mark as optional chore
     */
    optional?: boolean;
    /**
     * mark as reassignable (default is true)
     */
    reassignable?: boolean;
    /**
     * require use of camera to detect object detection tag order to check off chore
     */
    requireObjectDetection?: boolean;
    /**
     * date (yyyy-mm-dd) that you wish the chore to start showing up. (default is today)
     */
    startDate?: string;
    /**
     * status of chore (default is todo)
     */
    status?: string;
    /**
     * true if chore updated via API from an Automation System
     */
    updatedByAutomation?: boolean;
}
export declare class KkidChorelistPostResponse extends SpeakeasyBase {
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
     * No Data Found.
     */
    nodata?: shared.Nodata;
    /**
     * search results matching criteria
     */
    success?: shared.Success;
}
