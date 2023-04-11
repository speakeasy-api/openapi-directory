import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Any information to send back to Workflows when completing an action callback.
 */
export declare class CallbackCompletionRequest extends SpeakeasyBase {
    /**
     * A map of action output names and values.
     */
    outputFields: Record<string, string>;
}
