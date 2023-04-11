import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
/**
 * Create a Member in invite state
 */
export declare class CreateUserRequestBody extends SpeakeasyBase {
    /**
     * A string to be displayed as user name. It does not need to be unique
     */
    displayName?: string;
    /**
     * A link to an image for conversations' and users' avatars
     */
    imageUrl?: string;
    /**
     * Unique name for a user
     */
    name?: string;
}
/**
 * Create a user response
 */
export declare class CreateUser200ApplicationJSON extends SpeakeasyBase {
    /**
     * A link towards a user included in Conversation API
     */
    href?: string;
    /**
     * User ID
     */
    id?: string;
}
export declare class CreateUserResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Create a user response
     */
    createUser200ApplicationJSONObject?: CreateUser200ApplicationJSON;
}
