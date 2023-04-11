import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetUsersIdRequest extends SpeakeasyBase {
    /**
     * Object Id
     */
    id: string;
}
/**
 * Not found
 */
export declare class GetUsersId404ApplicationJSON extends SpeakeasyBase {
    /**
     * Not found.
     */
    detail?: string;
}
/**
 * Access token is missing or invalid
 */
export declare class GetUsersId401ApplicationJSON extends SpeakeasyBase {
    detail?: string;
}
export declare class GetUsersIdResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * User object
     */
    user?: shared.User;
    /**
     * Access token is missing or invalid
     */
    getUsersId401ApplicationJSONObject?: GetUsersId401ApplicationJSON;
    /**
     * Not found
     */
    getUsersId404ApplicationJSONObject?: GetUsersId404ApplicationJSON;
}
