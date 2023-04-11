import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const UpdateCallRecordingServerList: readonly ["https://api.twilio.com"];
export declare class UpdateCallRecordingSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class UpdateCallRecordingUpdateCallRecordingRequest extends SpeakeasyBase {
    /**
     * Whether to record during a pause. Can be: `skip` or `silence` and the default is `silence`. `skip` does not record during the pause period, while `silence` will replace the actual audio of the call with silence during the pause period. This parameter only applies when setting `status` is set to `paused`.
     */
    pauseBehavior?: string;
    status: shared.CallRecordingEnumStatusEnum;
}
export declare class UpdateCallRecordingRequest extends SpeakeasyBase {
    /**
     * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the Recording resource to update.
     */
    accountSid: string;
    /**
     * The [Call](https://www.twilio.com/docs/voice/api/call-resource) SID of the resource to update.
     */
    callSid: string;
    requestBody?: UpdateCallRecordingUpdateCallRecordingRequest;
    /**
     * The Twilio-provided string that uniquely identifies the Recording resource to update.
     */
    sid: string;
}
export declare class UpdateCallRecordingResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    apiV2010AccountCallCallRecording?: shared.ApiV2010AccountCallCallRecording;
}
