import { SpeakeasyBase } from "../../../internal/utils";
/**
 * OK
 */
export declare class AutopilotV1AssistantTaskTaskActions extends SpeakeasyBase {
    /**
     * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the TaskActions resource.
     */
    accountSid?: string;
    /**
     * The SID of the [Assistant](https://www.twilio.com/docs/autopilot/api/assistant) that is the parent of the Task associated with the resource.
     */
    assistantSid?: string;
    /**
     * The JSON string that specifies the [actions](https://www.twilio.com/docs/autopilot/actions) that instruct the Assistant on how to perform the task.
     */
    data?: any;
    /**
     * The SID of the [Task](https://www.twilio.com/docs/autopilot/api/task) associated with the resource.
     */
    taskSid?: string;
    /**
     * The absolute URL of the TaskActions resource.
     */
    url?: string;
}
