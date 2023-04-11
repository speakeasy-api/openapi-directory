import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetMembersRequest extends SpeakeasyBase {
    /**
     * Conversation ID
     */
    conversationId: string;
}
export declare class GetMembers200ApplicationJSON extends SpeakeasyBase {
    /**
     * Unique name for a user
     */
    name: string;
    /**
     * The state that the member is in. Possible values are `invited`, `joined`, `left`, or `unknown`
     */
    state: shared.MemberStateEnum;
    /**
     * User ID
     */
    userId: string;
    /**
     * Unique name for a user
     */
    userName: string;
}
export declare class GetMembersResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Members List Object
     */
    getMembers200ApplicationJSONObjects?: GetMembers200ApplicationJSON[];
}
