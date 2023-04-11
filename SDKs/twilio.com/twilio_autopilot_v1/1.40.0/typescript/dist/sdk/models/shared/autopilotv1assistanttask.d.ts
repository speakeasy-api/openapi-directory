import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Created
 */
export declare class AutopilotV1AssistantTask extends SpeakeasyBase {
    /**
     * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the Task resource.
     */
    accountSid?: string;
    /**
     * The URL from which the Assistant can fetch actions.
     */
    actionsUrl?: string;
    /**
     * The SID of the [Assistant](https://www.twilio.com/docs/autopilot/api/assistant) that is the parent of the resource.
     */
    assistantSid?: string;
    /**
     * The date and time in GMT when the resource was created specified in [RFC 2822](https://www.ietf.org/rfc/rfc2822.txt) format.
     */
    dateCreated?: Date;
    /**
     * The date and time in GMT when the resource was last updated specified in [RFC 2822](https://www.ietf.org/rfc/rfc2822.txt) format.
     */
    dateUpdated?: Date;
    /**
     * The string that you assigned to describe the resource. It is not unique and can be up to 255 characters long.
     */
    friendlyName?: string;
    /**
     * A list of the URLs of related resources.
     */
    links?: Record<string, any>;
    /**
     * The unique string that we created to identify the Task resource.
     */
    sid?: string;
    /**
     * An application-defined string that uniquely identifies the resource. It can be used in place of the resource's `sid` in the URL to address the resource.
     */
    uniqueName?: string;
    /**
     * The absolute URL of the Task resource.
     */
    url?: string;
}
