import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class KkidUserlistPutRequest extends SpeakeasyBase {
    /**
     * email address of user to create
     */
    email: string;
    /**
     * emoji character for user
     */
    emoji?: string;
    /**
     * set status of isAdmin
     */
    enableAdmin?: boolean;
    /**
     * set status of allowance module enabled
     */
    enableAllowance?: boolean;
    /**
     * set status of chores module enabled
     */
    enableChores?: boolean;
    /**
     * set status of enableObjectDetection
     */
    enableObjectDetection?: boolean;
    /**
     * set status of enableTmdb (movie and tv search)
     */
    enableTmdb?: boolean;
    /**
     * set status of Wish List module enabled
     */
    enableWishList?: boolean;
    /**
     * First Name of user to create
     */
    firstName: string;
    /**
     * Last Name of user to create
     */
    lastName: string;
    /**
     * User's TMdB Session Key
     */
    tmdbKey?: string;
    /**
     * userID of the user you wish to update
     */
    userID: number;
    /**
     * username of user to create
     */
    username: string;
}
export declare class KkidUserlistPutResponse extends SpeakeasyBase {
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
     * User Updated
     */
    addUserResponse?: shared.AddUserResponse;
}
