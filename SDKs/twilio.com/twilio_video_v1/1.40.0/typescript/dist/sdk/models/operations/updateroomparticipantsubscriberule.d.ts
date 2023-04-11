import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const UpdateRoomParticipantSubscribeRuleServerList: readonly ["https://video.twilio.com"];
export declare class UpdateRoomParticipantSubscribeRuleSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class UpdateRoomParticipantSubscribeRuleUpdateRoomParticipantSubscribeRuleRequest extends SpeakeasyBase {
    /**
     * A JSON-encoded array of subscribe rules. See the [Specifying Subscribe Rules](https://www.twilio.com/docs/video/api/track-subscriptions#specifying-sr) section for further information.
     */
    rules?: any;
}
export declare class UpdateRoomParticipantSubscribeRuleRequest extends SpeakeasyBase {
    /**
     * The SID of the Participant resource to update the Subscribe Rules.
     */
    participantSid: string;
    requestBody?: UpdateRoomParticipantSubscribeRuleUpdateRoomParticipantSubscribeRuleRequest;
    /**
     * The SID of the Room resource where the subscribe rules to update apply.
     */
    roomSid: string;
}
export declare class UpdateRoomParticipantSubscribeRuleResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Accepted
     */
    videoV1RoomRoomParticipantRoomParticipantSubscribeRule?: shared.VideoV1RoomRoomParticipantRoomParticipantSubscribeRule;
}
