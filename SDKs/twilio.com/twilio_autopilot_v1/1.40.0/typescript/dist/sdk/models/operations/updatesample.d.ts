import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const UpdateSampleServerList: readonly ["https://autopilot.twilio.com"];
export declare class UpdateSampleSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class UpdateSampleUpdateSampleRequest extends SpeakeasyBase {
    /**
     * The [ISO language-country](https://docs.oracle.com/cd/E13214_01/wli/docs92/xref/xqisocodes.html) string that specifies the language used for the sample. For example: `en-US`.
     */
    language?: string;
    /**
     * The communication channel from which the sample was captured. Can be: `voice`, `sms`, `chat`, `alexa`, `google-assistant`, `slack`, or null if not included.
     */
    sourceChannel?: string;
    /**
     * The text example of how end users might express the task. The sample can contain [Field tag blocks](https://www.twilio.com/docs/autopilot/api/task-sample#field-tagging).
     */
    taggedText?: string;
}
export declare class UpdateSampleRequest extends SpeakeasyBase {
    /**
     * The SID of the [Assistant](https://www.twilio.com/docs/autopilot/api/assistant) that is the parent of the Task associated with the resource to update.
     */
    assistantSid: string;
    requestBody?: UpdateSampleUpdateSampleRequest;
    /**
     * The Twilio-provided string that uniquely identifies the Sample resource to update.
     */
    sid: string;
    /**
     * The SID of the [Task](https://www.twilio.com/docs/autopilot/api/task) associated with the Sample resource to update.
     */
    taskSid: string;
}
export declare class UpdateSampleResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    autopilotV1AssistantTaskSample?: shared.AutopilotV1AssistantTaskSample;
}
