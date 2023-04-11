import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const FetchRecordingServerList: readonly ["https://trunking.twilio.com"];
export declare class FetchRecordingSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class FetchRecordingRequest extends SpeakeasyBase {
    /**
     * The SID of the Trunk from which to fetch the recording settings.
     */
    trunkSid: string;
}
export declare class FetchRecordingResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    trunkingV1TrunkRecording?: shared.TrunkingV1TrunkRecording;
}
