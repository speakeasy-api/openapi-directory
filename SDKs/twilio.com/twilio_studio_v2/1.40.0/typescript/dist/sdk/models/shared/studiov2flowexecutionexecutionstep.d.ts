import { SpeakeasyBase } from "../../../internal/utils";
/**
 * OK
 */
export declare class StudioV2FlowExecutionExecutionStep extends SpeakeasyBase {
    /**
     * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the ExecutionStep resource.
     */
    accountSid?: string;
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
     * The SID of the Step's Execution resource.
     */
    executionSid?: string;
    /**
     * The SID of the Flow.
     */
    flowSid?: string;
    /**
     * The URLs of related resources.
     */
    links?: Record<string, any>;
    /**
     * The event that caused the Flow to transition to the Step.
     */
    name?: string;
    /**
     * The unique string that we created to identify the ExecutionStep resource.
     */
    sid?: string;
    /**
     * The Widget that preceded the Widget for the Step.
     */
    transitionedFrom?: string;
    /**
     * The Widget that will follow the Widget for the Step.
     */
    transitionedTo?: string;
    /**
     * The absolute URL of the resource.
     */
    url?: string;
}
