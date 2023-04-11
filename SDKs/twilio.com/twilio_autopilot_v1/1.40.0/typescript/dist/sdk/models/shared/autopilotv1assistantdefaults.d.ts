import { SpeakeasyBase } from "../../../internal/utils";
/**
 * OK
 */
export declare class AutopilotV1AssistantDefaults extends SpeakeasyBase {
    /**
     * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the Defaults resource.
     */
    accountSid?: string;
    /**
     * The SID of the [Assistant](https://www.twilio.com/docs/autopilot/api/assistant) that is the parent of the resource.
     */
    assistantSid?: string;
    /**
     * The JSON string that describes the default task links for the `assistant_initiation`, `collect`, and `fallback` situations.
     */
    data?: any;
    /**
     * The absolute URL of the Defaults resource.
     */
    url?: string;
}
