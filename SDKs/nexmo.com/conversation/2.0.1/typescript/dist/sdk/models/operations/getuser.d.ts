import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetUserRequest extends SpeakeasyBase {
    /**
     * User ID
     */
    userId: string;
}
/**
 * Retrieve a user
 */
export declare class GetUser200ApplicationJSON extends SpeakeasyBase {
    href?: string;
    /**
     * User ID
     */
    id?: string;
    /**
     * Unique name for a user
     */
    name?: string;
}
export declare class GetUserResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Retrieve a user
     */
    getUser200ApplicationJSONObject?: GetUser200ApplicationJSON;
}
