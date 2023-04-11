import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class KkidUserlistDeleteSecurity extends SpeakeasyBase {
    authKey: string;
}
export declare class KkidUserlistDeleteRequest extends SpeakeasyBase {
    /**
     * userID of the user you wish to delete
     */
    userID: number;
}
export declare class KkidUserlistDeleteResponse extends SpeakeasyBase {
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
}
