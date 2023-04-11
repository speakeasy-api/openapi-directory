import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class KkidUserlistGetRequest extends SpeakeasyBase {
    /**
     * Email address of user to search
     */
    email?: string;
    /**
     * Filter Search by enableAllowance flag
     */
    enableAllowance?: boolean;
    /**
     * Filter Search by enableChores flag
     */
    enableChores?: boolean;
    /**
     * Filter Search by isActive flag
     */
    isActive?: boolean;
    /**
     * Filter Search by isAdmin flag
     */
    isAdmin?: boolean;
    /**
     * Filter Search by isChild flag
     */
    isChild?: boolean;
    /**
     * userID of user to search
     */
    userID?: number;
    /**
     * Username of user to search
     */
    username?: string;
}
export declare class KkidUserlistGetResponse extends SpeakeasyBase {
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
    userlist?: shared.Userlist;
}
