import { SpeakeasyBase } from "../../../internal/utils";
export declare class LogoutResponseResponse extends SpeakeasyBase {
    /**
     * The WebID of the user who has logged out.
     */
    user: string;
}
export declare enum LogoutResponseStatusEnum {
    Success = "success"
}
/**
 * Confirmation of a successful OSDB logout.
 */
export declare class LogoutResponse extends SpeakeasyBase {
    /**
     * The path of the REST API method
     */
    api: string;
    /**
     * The name of the REST API method
     */
    method: string;
    response: LogoutResponseResponse;
    status: LogoutResponseStatusEnum;
}
