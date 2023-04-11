import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const UpdateRecordingServerList: readonly ["https://trunking.twilio.com"];
export declare class UpdateRecordingSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class UpdateRecordingUpdateRecordingRequest extends SpeakeasyBase {
    mode?: shared.RecordingEnumRecordingModeEnum;
    trim?: shared.RecordingEnumRecordingTrimEnum;
}
export declare class UpdateRecordingRequest extends SpeakeasyBase {
    requestBody?: UpdateRecordingUpdateRecordingRequest;
    /**
     * The SID of the Trunk that will have its recording settings updated.
     */
    trunkSid: string;
}
export declare class UpdateRecordingResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Accepted
     */
    trunkingV1TrunkRecording?: shared.TrunkingV1TrunkRecording;
}
