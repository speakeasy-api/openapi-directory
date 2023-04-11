import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare const DeleteRecordingServerList: readonly ["https://video.twilio.com"];
export declare class DeleteRecordingSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class DeleteRecordingRequest extends SpeakeasyBase {
    /**
     * The SID of the Recording resource to delete.
     */
    sid: string;
}
export declare class DeleteRecordingResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
