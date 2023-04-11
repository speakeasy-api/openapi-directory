import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const UpdateUnderstandTaskActionsServerList: readonly ["https://preview.twilio.com"];
export declare class UpdateUnderstandTaskActionsSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class UpdateUnderstandTaskActionsUpdateUnderstandTaskActionsRequest extends SpeakeasyBase {
    /**
     * The JSON actions that instruct the Assistant how to perform this task.
     */
    actions?: any;
}
export declare class UpdateUnderstandTaskActionsRequest extends SpeakeasyBase {
    /**
     * The unique ID of the parent Assistant.
     */
    assistantSid: string;
    requestBody?: UpdateUnderstandTaskActionsUpdateUnderstandTaskActionsRequest;
    /**
     * The unique ID of the Task.
     */
    taskSid: string;
}
export declare class UpdateUnderstandTaskActionsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    previewUnderstandAssistantTaskTaskActions?: shared.PreviewUnderstandAssistantTaskTaskActions;
}
