import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const UpdateTaskServerList: readonly ["https://autopilot.twilio.com"];
export declare class UpdateTaskSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class UpdateTaskUpdateTaskRequest extends SpeakeasyBase {
    /**
     * The JSON string that specifies the [actions](https://www.twilio.com/docs/autopilot/actions) that instruct the Assistant on how to perform the task.
     */
    actions?: any;
    /**
     * The URL from which the Assistant can fetch actions.
     */
    actionsUrl?: string;
    /**
     * A descriptive string that you create to describe the resource. It is not unique and can be up to 255 characters long.
     */
    friendlyName?: string;
    /**
     * An application-defined string that uniquely identifies the resource. This value must be 64 characters or less in length and be unique. It can be used as an alternative to the `sid` in the URL path to address the resource.
     */
    uniqueName?: string;
}
export declare class UpdateTaskRequest extends SpeakeasyBase {
    /**
     * The SID of the [Assistant](https://www.twilio.com/docs/autopilot/api/assistant) that is the parent of the resource to update.
     */
    assistantSid: string;
    requestBody?: UpdateTaskUpdateTaskRequest;
    /**
     * The Twilio-provided string that uniquely identifies the Task resource to update.
     */
    sid: string;
}
export declare class UpdateTaskResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    autopilotV1AssistantTask?: shared.AutopilotV1AssistantTask;
}
