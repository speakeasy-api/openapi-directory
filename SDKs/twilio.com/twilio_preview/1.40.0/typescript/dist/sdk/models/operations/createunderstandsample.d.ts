import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const CreateUnderstandSampleServerList: readonly ["https://preview.twilio.com"];
export declare class CreateUnderstandSampleSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class CreateUnderstandSampleCreateUnderstandSampleRequest extends SpeakeasyBase {
    /**
     * An ISO language-country string of the sample.
     */
    language: string;
    /**
     * The communication channel the sample was captured. It can be: *voice*, *sms*, *chat*, *alexa*, *google-assistant*, or *slack*. If not included the value will be null
     */
    sourceChannel?: string;
    /**
     * The text example of how end-users may express this task. The sample may contain Field tag blocks.
     */
    taggedText: string;
}
export declare class CreateUnderstandSampleRequest extends SpeakeasyBase {
    /**
     * The unique ID of the Assistant.
     */
    assistantSid: string;
    requestBody?: CreateUnderstandSampleCreateUnderstandSampleRequest;
    /**
     * The unique ID of the Task associated with this Sample.
     */
    taskSid: string;
}
export declare class CreateUnderstandSampleResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Created
     */
    previewUnderstandAssistantTaskSample?: shared.PreviewUnderstandAssistantTaskSample;
}
