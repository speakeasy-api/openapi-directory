import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const UpdateRoomParticipantAnonymizeServerList: readonly ["https://video.twilio.com"];
export declare class UpdateRoomParticipantAnonymizeSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class UpdateRoomParticipantAnonymizeRequest extends SpeakeasyBase {
    /**
     * The SID of the room with the participant to update.
     */
    roomSid: string;
    /**
     * The SID of the RoomParticipant resource to update.
     */
    sid: string;
}
export declare class UpdateRoomParticipantAnonymizeResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    videoV1RoomRoomParticipantRoomParticipantAnonymize?: shared.VideoV1RoomRoomParticipantRoomParticipantAnonymize;
}
