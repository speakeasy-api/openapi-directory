import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class KkidChorelistPutSecurity extends SpeakeasyBase {
    authKey: string;
}
/**
 * Where day equals...
 */
export declare enum KkidChorelistPutWhereDayEnum {
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
export declare class KkidChorelistPutRequest extends SpeakeasyBase {
    /**
     * GPS altitude of where the chore was marked
     */
    altitude?: number;
    /**
     * id number of chore you wish to update
     */
    idChoreList: number;
    /**
     * GPS latitude of where the chore was marked
     */
    latitude?: number;
    /**
     * GPS longitude of where the chore was marked
     */
    longitude?: number;
    /**
     * text field of NFC tag that is required to be scanned to check off this chore (normally null)
     */
    nfcTag?: string;
    /**
     * notes field for chore
     */
    notes?: string;
    /**
     * new status of chore
     */
    status?: string;
    /**
     * mark chore as stolen by sibling
     */
    stolen?: boolean;
    /**
     * username of sibling that stole the chore (required if stolen is true)
     */
    stolenBy?: string;
    /**
     * true if updated via API by automation system
     */
    updatedByAutomation?: boolean;
    /**
     * Where day equals...
     */
    whereDay?: KkidChorelistPutWhereDayEnum;
    /**
     * Where chore name equals...
     */
    whereName?: string;
    /**
     * Where status equals...
     */
    whereStatus?: string;
}
export declare class KkidChorelistPutResponse extends SpeakeasyBase {
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
