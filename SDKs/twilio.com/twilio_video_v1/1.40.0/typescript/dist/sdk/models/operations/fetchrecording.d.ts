import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const FetchRecordingServerList: readonly ["https://video.twilio.com"];
export declare class FetchRecordingSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class FetchRecordingRequest extends SpeakeasyBase {
    /**
     * The SID of the Recording resource to fetch.
     */
    sid: string;
}
export declare class FetchRecordingResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    videoV1Recording?: shared.VideoV1Recording;
}
