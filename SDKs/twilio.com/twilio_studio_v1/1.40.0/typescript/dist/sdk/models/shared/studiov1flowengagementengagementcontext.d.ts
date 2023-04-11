import { SpeakeasyBase } from "../../../internal/utils";
/**
 * OK
 */
export declare class StudioV1FlowEngagementEngagementContext extends SpeakeasyBase {
    /**
     * The SID of the Account.
     */
    accountSid?: string;
    /**
     * As your flow executes, we save the state in what's called the Flow Context. Any data in the flow context can be accessed by your widgets as variables, either in configuration fields or in text areas as variable substitution.
     */
    context?: any;
    /**
     * The SID of the Engagement.
     */
    engagementSid?: string;
    /**
     * The SID of the Flow.
     */
    flowSid?: string;
    /**
     * The URL of the resource.
     */
    url?: string;
}
