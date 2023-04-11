import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class SessionControllerChangePasswordRequest extends SpeakeasyBase {
    /**
     * The customer's new password.
     */
    newPassword: string;
    /**
     * The customer's existing password.
     */
    oldPassword: string;
    /**
     * The unique client short-name
     */
    shortName: string;
    /**
     * The login token returned from the /session POST call
     */
    token: string;
}
export declare class SessionControllerChangePasswordResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
