import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const FetchRoomParticipantServerList: readonly ["https://video.twilio.com"];
export declare class FetchRoomParticipantSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class FetchRoomParticipantRequest extends SpeakeasyBase {
    /**
     * The SID of the room with the Participant resource to fetch.
     */
    roomSid: string;
    /**
     * The SID of the RoomParticipant resource to fetch.
     */
    sid: string;
}
export declare class FetchRoomParticipantResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    videoV1RoomRoomParticipant?: shared.VideoV1RoomRoomParticipant;
}
