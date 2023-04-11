import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const CreateSampleServerList: readonly ["https://autopilot.twilio.com"];
export declare class CreateSampleSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class CreateSampleCreateSampleRequest extends SpeakeasyBase {
    /**
     * The [ISO language-country](https://docs.oracle.com/cd/E13214_01/wli/docs92/xref/xqisocodes.html) string that specifies the language used for the new sample. For example: `en-US`.
     */
    language: string;
    /**
     * The communication channel from which the new sample was captured. Can be: `voice`, `sms`, `chat`, `alexa`, `google-assistant`, `slack`, or null if not included.
     */
    sourceChannel?: string;
    /**
     * The text example of how end users might express the task. The sample can contain [Field tag blocks](https://www.twilio.com/docs/autopilot/api/task-sample#field-tagging).
     */
    taggedText: string;
}
export declare class CreateSampleRequest extends SpeakeasyBase {
    /**
     * The SID of the [Assistant](https://www.twilio.com/docs/autopilot/api/assistant) that is the parent of the Task associated with the new resource.
     */
    assistantSid: string;
    requestBody?: CreateSampleCreateSampleRequest;
    /**
     * The SID of the [Task](https://www.twilio.com/docs/autopilot/api/task) associated with the Sample resource to create.
     */
    taskSid: string;
}
export declare class CreateSampleResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Created
     */
    autopilotV1AssistantTaskSample?: shared.AutopilotV1AssistantTaskSample;
}
