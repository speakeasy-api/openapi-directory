import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const UpdateRoomParticipantServerList: readonly ["https://video.twilio.com"];
export declare class UpdateRoomParticipantSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class UpdateRoomParticipantUpdateRoomParticipantRequest extends SpeakeasyBase {
    status?: shared.RoomParticipantEnumStatusEnum;
}
export declare class UpdateRoomParticipantRequest extends SpeakeasyBase {
    requestBody?: UpdateRoomParticipantUpdateRoomParticipantRequest;
    /**
     * The SID of the room with the participant to update.
     */
    roomSid: string;
    /**
     * The SID of the RoomParticipant resource to update.
     */
    sid: string;
}
export declare class UpdateRoomParticipantResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    videoV1RoomRoomParticipant?: shared.VideoV1RoomRoomParticipant;
}
