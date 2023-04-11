import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Create a Member in invite state
 */
export declare class CreateMemberRequestBody extends SpeakeasyBase {
    /**
     * Invite or join a member to a conversation
     */
    action?: shared.MemberActionEnum;
    /**
     * A user who joins a conversation as a member can have one channel per membership type. Channels can be `app`, `phone`, `sip`, `websocket`, or `vbc`
     */
    channel: shared.Channel;
    /**
     * Knocker ID. A knocker is a pre-member of a conversation who does not exist yet
     */
    knockingId?: string;
    /**
     * Media Object
     */
    media?: Record<string, any>;
    /**
     * Member ID
     */
    memberId?: string;
    /**
     * Member ID of the member that sends the invitation
     */
    memberIdInviting?: string;
    /**
     * User ID
     */
    userId: string;
}
export declare class CreateMemberRequest extends SpeakeasyBase {
    requestBody?: CreateMemberRequestBody;
    /**
     * Conversation ID
     */
    conversationId: string;
}
/**
 * Create or invite Member in invite state
 */
export declare class CreateMember201ApplicationJSON extends SpeakeasyBase {
    /**
     * A user who joins a conversation as a member can have one channel per membership type. Channels can be `app`, `phone`, `sip`, `websocket`, or `vbc`
     */
    channel?: shared.Channel;
    /**
     * A link towards a member included in Conversation API
     */
    href?: string;
    /**
     * Member ID
     */
    id?: string;
    initiator?: shared.Initiator;
    /**
     * The state that the member is in. Possible values are `invited`, `joined`, `left`, or `unknown`
     */
    state?: shared.MemberStateEnum;
    timestamp?: shared.TimestampResMember;
    /**
     * User ID
     */
    userId?: string;
}
export declare class CreateMemberResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Create or invite Member in invite state
     */
    createMember201ApplicationJSONObject?: CreateMember201ApplicationJSON;
}
