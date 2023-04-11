import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class PostUsersUserIdRequest extends SpeakeasyBase {
    /**
     * A custom JSON object that you can create and attach to this record
     */
    customData?: string;
    /**
     * The user's email
     */
    email?: string;
    /**
     * The user's name
     */
    name?: string;
    /**
     * The type for this user
     */
    type?: string;
    /**
     * The id of the user to be updated
     */
    userId: string;
    /**
     * The user's username
     */
    username?: string;
}
export declare class PostUsersUserIdResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
