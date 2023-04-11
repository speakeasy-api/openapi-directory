import { SpeakeasyBase } from "../../../internal/utils";
import { ExecutionEnumStatusEnum } from "./executionenumstatusenum";
/**
 * Created
 */
export declare class StudioV2FlowExecution extends SpeakeasyBase {
    /**
     * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the Execution resource.
     */
    accountSid?: string;
    /**
     * The phone number, SIP address or Client identifier that triggered the Execution. Phone numbers are in E.164 format (e.g. +16175551212). SIP addresses are formatted as `name@company.com`. Client identifiers are formatted `client:name`.
     */
    contactChannelAddress?: string;
    /**
     * The current state of the Flow's Execution. As a flow executes, we save its state in this context. We save data that your widgets can access as variables in configuration fields or in text areas as variable substitution.
     */
    context?: any;
    /**
     * The date and time in GMT when the resource was created specified in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format.
     */
    dateCreated?: Date;
    /**
     * The date and time in GMT when the resource was last updated specified in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format.
     */
    dateUpdated?: Date;
    /**
     * The SID of the Flow.
     */
    flowSid?: string;
    /**
     * The URLs of nested resources.
     */
    links?: Record<string, any>;
    /**
     * The unique string that we created to identify the Execution resource.
     */
    sid?: string;
    status?: ExecutionEnumStatusEnum;
    /**
     * The absolute URL of the resource.
     */
    url?: string;
}
