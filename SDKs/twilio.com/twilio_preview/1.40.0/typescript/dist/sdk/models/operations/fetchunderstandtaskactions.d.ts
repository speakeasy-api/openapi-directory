import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const FetchUnderstandTaskActionsServerList: readonly ["https://preview.twilio.com"];
export declare class FetchUnderstandTaskActionsSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class FetchUnderstandTaskActionsRequest extends SpeakeasyBase {
    /**
     * The unique ID of the parent Assistant.
     */
    assistantSid: string;
    /**
     * The unique ID of the Task.
     */
    taskSid: string;
}
export declare class FetchUnderstandTaskActionsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    previewUnderstandAssistantTaskTaskActions?: shared.PreviewUnderstandAssistantTaskTaskActions;
}
