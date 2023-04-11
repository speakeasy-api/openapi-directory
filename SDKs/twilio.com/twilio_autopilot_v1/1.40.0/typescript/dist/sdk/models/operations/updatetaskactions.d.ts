import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const UpdateTaskActionsServerList: readonly ["https://autopilot.twilio.com"];
export declare class UpdateTaskActionsSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class UpdateTaskActionsUpdateTaskActionsRequest extends SpeakeasyBase {
    /**
     * The JSON string that specifies the [actions](https://www.twilio.com/docs/autopilot/actions) that instruct the Assistant on how to perform the task.
     */
    actions?: any;
}
export declare class UpdateTaskActionsRequest extends SpeakeasyBase {
    /**
     * The SID of the [Assistant](https://www.twilio.com/docs/autopilot/api/assistant) that is the parent of the Task for which the task actions to update were defined.
     */
    assistantSid: string;
    requestBody?: UpdateTaskActionsUpdateTaskActionsRequest;
    /**
     * The SID of the [Task](https://www.twilio.com/docs/autopilot/api/task) for which the task actions to update were defined.
     */
    taskSid: string;
}
export declare class UpdateTaskActionsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    autopilotV1AssistantTaskTaskActions?: shared.AutopilotV1AssistantTaskTaskActions;
}
