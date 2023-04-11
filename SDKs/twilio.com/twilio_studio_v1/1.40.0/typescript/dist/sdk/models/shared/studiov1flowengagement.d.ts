import { SpeakeasyBase } from "../../../internal/utils";
import { EngagementEnumStatusEnum } from "./engagementenumstatusenum";
/**
 * Created
 */
export declare class StudioV1FlowEngagement extends SpeakeasyBase {
    /**
     * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the Engagement resource.
     */
    accountSid?: string;
    /**
     * The phone number, SIP address or Client identifier that triggered this Engagement. Phone numbers are in E.164 format (+16175551212). SIP addresses are formatted as `name@company.com`. Client identifiers are formatted `client:name`.
     */
    contactChannelAddress?: string;
    /**
     * The SID of the Contact.
     */
    contactSid?: string;
    /**
     * The current state of the execution flow. As your flow executes, we save the state in a flow context. Your widgets can access the data in the flow context as variables, either in configuration fields or in text areas as variable substitution.
     */
    context?: any;
    /**
     * The date and time in GMT when the Engagement was created in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format.
     */
    dateCreated?: Date;
    /**
     * The date and time in GMT when the Engagement was updated in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format.
     */
    dateUpdated?: Date;
    /**
     * The SID of the Flow.
     */
    flowSid?: string;
    /**
     * The URLs of the Engagement's nested resources.
     */
    links?: Record<string, any>;
    /**
     * The unique string that we created to identify the Engagement resource.
     */
    sid?: string;
    status?: EngagementEnumStatusEnum;
    /**
     * The absolute URL of the resource.
     */
    url?: string;
}
