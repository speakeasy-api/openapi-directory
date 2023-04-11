import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const FetchUnderstandSampleServerList: readonly ["https://preview.twilio.com"];
export declare class FetchUnderstandSampleSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class FetchUnderstandSampleRequest extends SpeakeasyBase {
    /**
     * The unique ID of the Assistant.
     */
    assistantSid: string;
    /**
     * A 34 character string that uniquely identifies this resource.
     */
    sid: string;
    /**
     * The unique ID of the Task associated with this Sample.
     */
    taskSid: string;
}
export declare class FetchUnderstandSampleResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    previewUnderstandAssistantTaskSample?: shared.PreviewUnderstandAssistantTaskSample;
}
