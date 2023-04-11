import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const FetchUnderstandFieldServerList: readonly ["https://preview.twilio.com"];
export declare class FetchUnderstandFieldSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class FetchUnderstandFieldRequest extends SpeakeasyBase {
    /**
     * The unique ID of the Assistant.
     */
    assistantSid: string;
    /**
     * A 34 character string that uniquely identifies this resource.
     */
    sid: string;
    /**
     * The unique ID of the Task associated with this Field.
     */
    taskSid: string;
}
export declare class FetchUnderstandFieldResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    previewUnderstandAssistantTaskField?: shared.PreviewUnderstandAssistantTaskField;
}
