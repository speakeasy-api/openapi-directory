import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetUsers200ApplicationJSON extends SpeakeasyBase {
    /**
     * A link towards a user included in Conversation API
     */
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
export declare class GetUsersResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * List of users
     */
    getUsers200ApplicationJSONObjects?: GetUsers200ApplicationJSON[];
}
