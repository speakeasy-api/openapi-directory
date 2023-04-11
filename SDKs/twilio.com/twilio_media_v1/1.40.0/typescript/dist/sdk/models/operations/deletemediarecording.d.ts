import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare const DeleteMediaRecordingServerList: readonly ["https://media.twilio.com"];
export declare class DeleteMediaRecordingSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class DeleteMediaRecordingRequest extends SpeakeasyBase {
    /**
     * The SID of the MediaRecording resource to delete.
     */
    sid: string;
}
export declare class DeleteMediaRecordingResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
