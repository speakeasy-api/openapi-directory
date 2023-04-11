import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const UpdateConferenceRecordingServerList: readonly ["https://api.twilio.com"];
export declare class UpdateConferenceRecordingSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class UpdateConferenceRecordingUpdateConferenceRecordingRequest extends SpeakeasyBase {
    /**
     * Whether to record during a pause. Can be: `skip` or `silence` and the default is `silence`. `skip` does not record during the pause period, while `silence` will replace the actual audio of the call with silence during the pause period. This parameter only applies when setting `status` is set to `paused`.
     */
    pauseBehavior?: string;
    status: shared.ConferenceRecordingEnumStatusEnum;
}
export declare class UpdateConferenceRecordingRequest extends SpeakeasyBase {
    /**
     * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the Conference Recording resource to update.
     */
    accountSid: string;
    /**
     * The Conference SID that identifies the conference associated with the recording to update.
     */
    conferenceSid: string;
    requestBody?: UpdateConferenceRecordingUpdateConferenceRecordingRequest;
    /**
     * The Twilio-provided string that uniquely identifies the Conference Recording resource to update. Use `Twilio.CURRENT` to reference the current active recording.
     */
    sid: string;
}
export declare class UpdateConferenceRecordingResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    apiV2010AccountConferenceConferenceRecording?: shared.ApiV2010AccountConferenceConferenceRecording;
}
