import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const FetchRoomRecordingServerList: readonly ["https://video.twilio.com"];
export declare class FetchRoomRecordingSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class FetchRoomRecordingRequest extends SpeakeasyBase {
    /**
     * The SID of the Room resource with the recording to fetch.
     */
    roomSid: string;
    /**
     * The SID of the RoomRecording resource to fetch.
     */
    sid: string;
}
export declare class FetchRoomRecordingResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    videoV1RoomRoomRecording?: shared.VideoV1RoomRoomRecording;
}
