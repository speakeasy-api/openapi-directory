import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const CreateTaskServerList: readonly ["https://autopilot.twilio.com"];
export declare class CreateTaskSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class CreateTaskCreateTaskRequest extends SpeakeasyBase {
    /**
     * The JSON string that specifies the [actions](https://www.twilio.com/docs/autopilot/actions) that instruct the Assistant on how to perform the task. It is optional and not unique.
     */
    actions?: any;
    /**
     * The URL from which the Assistant can fetch actions.
     */
    actionsUrl?: string;
    /**
     * A descriptive string that you create to describe the new resource. It is not unique and can be up to 255 characters long.
     */
    friendlyName?: string;
    /**
     * An application-defined string that uniquely identifies the new resource. It can be used as an alternative to the `sid` in the URL path to address the resource. This value must be unique and 64 characters or less in length.
     */
    uniqueName: string;
}
export declare class CreateTaskRequest extends SpeakeasyBase {
    /**
     * The SID of the [Assistant](https://www.twilio.com/docs/autopilot/api/assistant) that is the parent of the new resource.
     */
    assistantSid: string;
    requestBody?: CreateTaskCreateTaskRequest;
}
export declare class CreateTaskResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Created
     */
    autopilotV1AssistantTask?: shared.AutopilotV1AssistantTask;
}
