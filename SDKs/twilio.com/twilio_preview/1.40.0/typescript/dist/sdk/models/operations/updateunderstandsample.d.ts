import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const UpdateUnderstandSampleServerList: readonly ["https://preview.twilio.com"];
export declare class UpdateUnderstandSampleSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class UpdateUnderstandSampleUpdateUnderstandSampleRequest extends SpeakeasyBase {
    /**
     * An ISO language-country string of the sample.
     */
    language?: string;
    /**
     * The communication channel the sample was captured. It can be: *voice*, *sms*, *chat*, *alexa*, *google-assistant*, or *slack*. If not included the value will be null
     */
    sourceChannel?: string;
    /**
     * The text example of how end-users may express this task. The sample may contain Field tag blocks.
     */
    taggedText?: string;
}
export declare class UpdateUnderstandSampleRequest extends SpeakeasyBase {
    /**
     * The unique ID of the Assistant.
     */
    assistantSid: string;
    requestBody?: UpdateUnderstandSampleUpdateUnderstandSampleRequest;
    /**
     * A 34 character string that uniquely identifies this resource.
     */
    sid: string;
    /**
     * The unique ID of the Task associated with this Sample.
     */
    taskSid: string;
}
export declare class UpdateUnderstandSampleResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    previewUnderstandAssistantTaskSample?: shared.PreviewUnderstandAssistantTaskSample;
}
