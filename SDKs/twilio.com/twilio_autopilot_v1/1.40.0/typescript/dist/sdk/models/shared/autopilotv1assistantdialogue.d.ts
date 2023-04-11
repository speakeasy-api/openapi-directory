import { SpeakeasyBase } from "../../../internal/utils";
/**
 * OK
 */
export declare class AutopilotV1AssistantDialogue extends SpeakeasyBase {
    /**
     * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the Dialogue resource.
     */
    accountSid?: string;
    /**
     * The SID of the [Assistant](https://www.twilio.com/docs/autopilot/api/assistant) that is the parent of the resource.
     */
    assistantSid?: string;
    /**
     * The JSON string that describes the dialogue session object.
     */
    data?: any;
    /**
     * The unique string that we created to identify the Dialogue resource.
     */
    sid?: string;
    /**
     * The absolute URL of the Dialogue resource.
     */
    url?: string;
}
