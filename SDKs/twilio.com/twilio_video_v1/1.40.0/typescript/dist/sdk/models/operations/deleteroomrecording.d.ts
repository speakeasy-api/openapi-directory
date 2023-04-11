import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare const DeleteRoomRecordingServerList: readonly ["https://video.twilio.com"];
export declare class DeleteRoomRecordingSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class DeleteRoomRecordingRequest extends SpeakeasyBase {
    /**
     * The SID of the room with the RoomRecording resource to delete.
     */
    roomSid: string;
    /**
     * The SID of the RoomRecording resource to delete.
     */
    sid: string;
}
export declare class DeleteRoomRecordingResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
