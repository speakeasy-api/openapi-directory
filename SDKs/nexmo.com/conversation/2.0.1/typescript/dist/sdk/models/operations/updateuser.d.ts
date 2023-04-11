import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class UpdateUserRequestBody extends SpeakeasyBase {
    /**
     * A user who joins a conversation as a member can have one channel per membership type. Channels can be `app`, `phone`, `sip`, `websocket`, or `vbc`
     */
    channels?: shared.Channel;
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
export declare class UpdateUserRequest extends SpeakeasyBase {
    requestBody?: UpdateUserRequestBody;
    /**
     * User ID
     */
    userId: string;
}
/**
 * Retrieve a user
 */
export declare class UpdateUser200ApplicationJSON extends SpeakeasyBase {
    /**
     * A link towards a user included in Conversation API
     */
    href?: string;
    /**
     * User ID
     */
    id?: string;
}
export declare class UpdateUserResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Retrieve a user
     */
    updateUser200ApplicationJSONObject?: UpdateUser200ApplicationJSON;
}
