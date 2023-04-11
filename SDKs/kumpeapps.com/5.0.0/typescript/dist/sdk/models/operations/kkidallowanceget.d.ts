import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class KkidAllowanceGetSecurity extends SpeakeasyBase {
    authKey: string;
}
export declare class KkidAllowanceGetRequest extends SpeakeasyBase {
    /**
     * userID of the kid
     */
    kidUserId: number;
    /**
     * number of days you wish to search allowance transactions (default is 90 days)
     */
    transactionDays?: number;
}
export declare class KkidAllowanceGetResponse extends SpeakeasyBase {
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
    allowance?: shared.Allowance;
    /**
     * No Data Returned
     */
    nodata?: shared.Nodata;
}
