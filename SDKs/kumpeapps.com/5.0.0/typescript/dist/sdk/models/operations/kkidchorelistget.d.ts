import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class KkidChorelistGetSecurity extends SpeakeasyBase {
    authKey: string;
}
/**
 * Day of week for chores (Weekly for weekly chores)
 */
export declare enum KkidChorelistGetDayEnum {
    Sunday = "Sunday",
    Monday = "Monday",
    Tuesday = "Tuesday",
    Wednesday = "Wednesday",
    Thursday = "Thursday",
    Friday = "Friday",
    Saturday = "Saturday",
    Weekly = "Weekly"
}
export declare class KkidChorelistGetRequest extends SpeakeasyBase {
    /**
     * Filter results by blockDash parameter
     */
    blockDash?: boolean;
    /**
     * Filter results by canSteal parameter
     */
    canSteal?: boolean;
    /**
     * Day of week for chores (Weekly for weekly chores)
     */
    day?: KkidChorelistGetDayEnum;
    /**
     * include calendar notations (default is false)
     */
    includeCalendar?: boolean;
    /**
     * Username of kid you wish to search
     */
    kidUsername?: string;
    /**
     * Filter results by optional parameter
     */
    optional?: boolean;
    /**
     * Status of Chore to search
     */
    status?: string;
}
export declare class KkidChorelistGetResponse extends SpeakeasyBase {
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
     * search results matching criteria
     */
    chorelist?: shared.Chorelist;
    /**
     * No Data Found.
     */
    nodata?: shared.Nodata;
}
