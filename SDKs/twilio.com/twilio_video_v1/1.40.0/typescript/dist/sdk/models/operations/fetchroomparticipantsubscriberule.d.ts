import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const FetchRoomParticipantSubscribeRuleServerList: readonly ["https://video.twilio.com"];
export declare class FetchRoomParticipantSubscribeRuleSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class FetchRoomParticipantSubscribeRuleRequest extends SpeakeasyBase {
    /**
     * The SID of the Participant resource with the subscribe rules to fetch.
     */
    participantSid: string;
    /**
     * The SID of the Room resource where the subscribe rules to fetch apply.
     */
    roomSid: string;
}
export declare class FetchRoomParticipantSubscribeRuleResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    videoV1RoomRoomParticipantRoomParticipantSubscribeRule?: shared.VideoV1RoomRoomParticipantRoomParticipantSubscribeRule;
}
