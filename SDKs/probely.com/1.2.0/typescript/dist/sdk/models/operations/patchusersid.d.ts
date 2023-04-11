import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PatchUsersIdRequestBodyInput extends SpeakeasyBase {
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
export declare class PatchUsersIdRequest extends SpeakeasyBase {
    requestBody: PatchUsersIdRequestBodyInput;
    /**
     * Object Id
     */
    id: string;
}
/**
 * Not found
 */
export declare class PatchUsersId404ApplicationJSON extends SpeakeasyBase {
    /**
     * Not found.
     */
    detail?: string;
}
/**
 * Not allowed to perform operation
 */
export declare class PatchUsersId403ApplicationJSON extends SpeakeasyBase {
    /**
     * Error message.
     */
    detail?: string;
}
/**
 * Access token is missing or invalid
 */
export declare class PatchUsersId401ApplicationJSON extends SpeakeasyBase {
    detail?: string;
}
/**
 * Bad Request
 */
export declare class PatchUsersId400ApplicationJSON extends SpeakeasyBase {
    lessThanFieldNameGreaterThan?: string[];
    nonFieldErrors?: string[];
}
export declare class PatchUsersIdResponse extends SpeakeasyBase {
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
    patchUsersId400ApplicationJSONObject?: PatchUsersId400ApplicationJSON;
    /**
     * Access token is missing or invalid
     */
    patchUsersId401ApplicationJSONObject?: PatchUsersId401ApplicationJSON;
    /**
     * Not allowed to perform operation
     */
    patchUsersId403ApplicationJSONObject?: PatchUsersId403ApplicationJSON;
    /**
     * Not found
     */
    patchUsersId404ApplicationJSONObject?: PatchUsersId404ApplicationJSON;
}
