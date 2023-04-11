import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const FetchRoomParticipantPublishedTrackServerList: readonly ["https://video.twilio.com"];
export declare class FetchRoomParticipantPublishedTrackSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class FetchRoomParticipantPublishedTrackRequest extends SpeakeasyBase {
    /**
     * The SID of the Participant resource with the published track to fetch.
     */
    participantSid: string;
    /**
     * The SID of the Room resource where the Track resource to fetch is published.
     */
    roomSid: string;
    /**
     * The SID of the RoomParticipantPublishedTrack resource to fetch.
     */
    sid: string;
}
export declare class FetchRoomParticipantPublishedTrackResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    videoV1RoomRoomParticipantRoomParticipantPublishedTrack?: shared.VideoV1RoomRoomParticipantRoomParticipantPublishedTrack;
}
