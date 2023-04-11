import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class KkidUserlistPostSecurity extends SpeakeasyBase {
    authKey: string;
}
export declare class KkidUserlistPostRequest extends SpeakeasyBase {
    /**
     * email address of user to create
     */
    email: string;
    /**
     * First Name of user to create
     */
    firstName: string;
    /**
     * Last Name of user to create
     */
    lastName: string;
    /**
     * password of user to create
     */
    password: string;
    /**
     * username of user to create
     */
    username: string;
}
export declare class KkidUserlistPostResponse extends SpeakeasyBase {
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
     * User Added
     */
    addUserResponse?: shared.AddUserResponse;
}
