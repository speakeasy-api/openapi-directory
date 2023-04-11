import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Any information to send back to Workflows when completing an action callback as part of a batch request.
 */
export declare class CallbackCompletionBatchRequest extends SpeakeasyBase {
    /**
     * The ID of the callback to complete.
     */
    callbackId: string;
    /**
     * A map of action output names and values.
     */
    outputFields: Record<string, string>;
}
