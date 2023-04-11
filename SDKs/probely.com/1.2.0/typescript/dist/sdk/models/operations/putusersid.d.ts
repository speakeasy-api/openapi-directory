import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PutUsersIdRequestBodyInput extends SpeakeasyBase {
    /**
     * User's email (changing this resets the user's password and revokes existing tokens)
     */
    email: string;
    /**
     * User's name
     */
    name: string;
    title?: shared.UserTitleEnum;
}
export declare class PutUsersIdRequest extends SpeakeasyBase {
    requestBody: PutUsersIdRequestBodyInput;
    /**
     * Object Id
     */
    id: string;
}
/**
 * Not found
 */
export declare class PutUsersId404ApplicationJSON extends SpeakeasyBase {
    /**
     * Not found.
     */
    detail?: string;
}
/**
 * Not allowed to perform operation
 */
export declare class PutUsersId403ApplicationJSON extends SpeakeasyBase {
    /**
     * Error message.
     */
    detail?: string;
}
/**
 * Access token is missing or invalid
 */
export declare class PutUsersId401ApplicationJSON extends SpeakeasyBase {
    detail?: string;
}
/**
 * Bad Request
 */
export declare class PutUsersId400ApplicationJSON extends SpeakeasyBase {
    lessThanFieldNameGreaterThan?: string[];
    nonFieldErrors?: string[];
}
export declare class PutUsersIdResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * User object
     */
    user?: shared.User;
    /**
     * Bad Request
     */
    putUsersId400ApplicationJSONObject?: PutUsersId400ApplicationJSON;
    /**
     * Access token is missing or invalid
     */
    putUsersId401ApplicationJSONObject?: PutUsersId401ApplicationJSON;
    /**
     * Not allowed to perform operation
     */
    putUsersId403ApplicationJSONObject?: PutUsersId403ApplicationJSON;
    /**
     * Not found
     */
    putUsersId404ApplicationJSONObject?: PutUsersId404ApplicationJSON;
}
