import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class UpdateMemberRequestBody extends SpeakeasyBase {
    /**
     * Invite or join a member to a conversation
     */
    action?: shared.MemberActionEnum;
    /**
     * A user who joins a conversation as a member can have one channel per membership type. Channels can be `app`, `phone`, `sip`, `websocket`, or `vbc`
     */
    channel?: shared.Channel;
}
export declare class UpdateMemberRequest extends SpeakeasyBase {
    requestBody?: UpdateMemberRequestBody;
    /**
     * Conversation ID
     */
    conversationId: string;
    /**
     * Member ID
     */
    memberId: string;
}
/**
 * Member retrieved
 */
export declare class UpdateMember200ApplicationJSON extends SpeakeasyBase {
    /**
     * A link towards a member included in Conversation API
     */
    href?: string;
    /**
     * Member ID
     */
    id?: string;
}
export declare class UpdateMemberResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Member retrieved
     */
    updateMember200ApplicationJSONObject?: UpdateMember200ApplicationJSON;
}
