import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class KkidMasteruserPostSecurity extends SpeakeasyBase {
    appKey: string;
}
export declare class KkidMasteruserPostRequest extends SpeakeasyBase {
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
export declare class KkidMasteruserPostResponse extends SpeakeasyBase {
    /**
     * Method Not Allowed- API user does not have access to use this method
     */
    fourHundredAndFive?: shared.FourHundredAndFive;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * User Added
     */
    addUserResponse?: shared.AddUserResponse;
}
