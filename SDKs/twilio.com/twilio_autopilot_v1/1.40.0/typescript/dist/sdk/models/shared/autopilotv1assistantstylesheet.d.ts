import { SpeakeasyBase } from "../../../internal/utils";
/**
 * OK
 */
export declare class AutopilotV1AssistantStyleSheet extends SpeakeasyBase {
    /**
     * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the StyleSheet resource.
     */
    accountSid?: string;
    /**
     * The SID of the [Assistant](https://www.twilio.com/docs/autopilot/api/assistant) that is the parent of the resource.
     */
    assistantSid?: string;
    /**
     * The JSON string that describes the style sheet object.
     */
    data?: any;
    /**
     * The absolute URL of the StyleSheet resource.
     */
    url?: string;
}
