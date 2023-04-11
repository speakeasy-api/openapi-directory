import { SpeakeasyBase } from "../../../internal/utils";
/**
 * OK
 */
export declare class AutopilotV1AssistantTaskTaskStatistics extends SpeakeasyBase {
    /**
     * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the TaskStatistics resource.
     */
    accountSid?: string;
    /**
     * The SID of the [Assistant](https://www.twilio.com/docs/autopilot/api/assistant) that is the parent of the Task associated with the resource.
     */
    assistantSid?: string;
    /**
     * The total number of [Fields](https://www.twilio.com/docs/autopilot/api/task-field) associated with the Task.
     */
    fieldsCount?: number;
    /**
     * The total number of [Samples](https://www.twilio.com/docs/autopilot/api/task-sample) associated with the Task.
     */
    samplesCount?: number;
    /**
     * The SID of the [Task](https://www.twilio.com/docs/autopilot/api/task) for which the statistics were collected.
     */
    taskSid?: string;
    /**
     * The absolute URL of the TaskStatistics resource.
     */
    url?: string;
}
