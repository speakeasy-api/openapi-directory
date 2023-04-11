import { SpeakeasyBase } from "../../../internal/utils";
export declare class LoginResponseResponse extends SpeakeasyBase {
    /**
     * The WebID of the user who has logged in.
     */
    user: string;
}
export declare enum LoginResponseStatusEnum {
    Success = "success"
}
/**
 * Confirmation of a successful OSDB login.
 */
export declare class LoginResponse extends SpeakeasyBase {
    /**
     * The path of the REST API method
     */
    api: string;
    /**
     * The name of the REST API method
     */
    method: string;
    response: LoginResponseResponse;
    status: LoginResponseStatusEnum;
}
