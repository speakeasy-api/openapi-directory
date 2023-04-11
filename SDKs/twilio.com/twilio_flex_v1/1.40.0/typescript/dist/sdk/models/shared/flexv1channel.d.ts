import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Created
 */
export declare class FlexV1Channel extends SpeakeasyBase {
    /**
     * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the Channel resource and owns this Workflow.
     */
    accountSid?: string;
    /**
     * The date and time in GMT when the Flex chat channel was created specified in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format.
     */
    dateCreated?: Date;
    /**
     * The date and time in GMT when the Flex chat channel was last updated specified in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format.
     */
    dateUpdated?: Date;
    /**
     * The SID of the Flex Flow.
     */
    flexFlowSid?: string;
    /**
     * The unique string that we created to identify the Channel resource.
     */
    sid?: string;
    /**
     * The SID of the TaskRouter Task. Only valid when integration type is `task`. `null` for integration types `studio` & `external`
     */
    taskSid?: string;
    /**
     * The absolute URL of the Flex chat channel resource.
     */
    url?: string;
    /**
     * The SID of the chat user.
     */
    userSid?: string;
}
