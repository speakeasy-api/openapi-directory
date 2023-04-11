import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const FetchRoomParticipantSubscribedTrackServerList: readonly ["https://video.twilio.com"];
export declare class FetchRoomParticipantSubscribedTrackSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class FetchRoomParticipantSubscribedTrackRequest extends SpeakeasyBase {
    /**
     * The SID of the participant that subscribes to the Track resource to fetch.
     */
    participantSid: string;
    /**
     * The SID of the Room where the Track resource to fetch is subscribed.
     */
    roomSid: string;
    /**
     * The SID of the RoomParticipantSubscribedTrack resource to fetch.
     */
    sid: string;
}
export declare class FetchRoomParticipantSubscribedTrackResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    videoV1RoomRoomParticipantRoomParticipantSubscribedTrack?: shared.VideoV1RoomRoomParticipantRoomParticipantSubscribedTrack;
}
