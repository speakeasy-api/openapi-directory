import { SpeakeasyBase } from "../../../internal/utils";
/**
 * OK
 */
export declare class StudioV1FlowExecutionExecutionStepExecutionStepContext extends SpeakeasyBase {
    /**
     * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the ExecutionStepContext resource.
     */
    accountSid?: string;
    /**
     * The current state of the Flow's Execution. As a flow executes, we save its state in this context. We save data that your widgets can access as variables in configuration fields or in text areas as variable substitution.
     */
    context?: any;
    /**
     * The SID of the context's Execution resource.
     */
    executionSid?: string;
    /**
     * The SID of the Flow.
     */
    flowSid?: string;
    /**
     * The SID of the Step that the context is associated with.
     */
    stepSid?: string;
    /**
     * The absolute URL of the resource.
     */
    url?: string;
}
