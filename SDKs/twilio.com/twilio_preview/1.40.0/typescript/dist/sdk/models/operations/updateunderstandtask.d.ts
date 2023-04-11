import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const UpdateUnderstandTaskServerList: readonly ["https://preview.twilio.com"];
export declare class UpdateUnderstandTaskSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class UpdateUnderstandTaskUpdateUnderstandTaskRequest extends SpeakeasyBase {
    /**
     * A user-provided JSON object encoded as a string to specify the actions for this task. It is optional and non-unique.
     */
    actions?: any;
    /**
     * User-provided HTTP endpoint where from the assistant fetches actions
     */
    actionsUrl?: string;
    /**
     * A user-provided string that identifies this resource. It is non-unique and can up to 255 characters long.
     */
    friendlyName?: string;
    /**
     * A user-provided string that uniquely identifies this resource as an alternative to the sid. Unique up to 64 characters long.
     */
    uniqueName?: string;
}
export declare class UpdateUnderstandTaskRequest extends SpeakeasyBase {
    /**
     * The unique ID of the Assistant.
     */
    assistantSid: string;
    requestBody?: UpdateUnderstandTaskUpdateUnderstandTaskRequest;
    /**
     * A 34 character string that uniquely identifies this resource.
     */
    sid: string;
}
export declare class UpdateUnderstandTaskResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    previewUnderstandAssistantTask?: shared.PreviewUnderstandAssistantTask;
}
