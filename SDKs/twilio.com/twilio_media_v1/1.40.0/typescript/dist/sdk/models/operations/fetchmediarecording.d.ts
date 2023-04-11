import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const FetchMediaRecordingServerList: readonly ["https://media.twilio.com"];
export declare class FetchMediaRecordingSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class FetchMediaRecordingRequest extends SpeakeasyBase {
    /**
     * The SID of the MediaRecording resource to fetch.
     */
    sid: string;
}
export declare class FetchMediaRecordingResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    mediaV1MediaRecording?: shared.MediaV1MediaRecording;
}
