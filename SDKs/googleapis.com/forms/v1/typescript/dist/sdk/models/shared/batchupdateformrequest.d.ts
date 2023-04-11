import { SpeakeasyBase } from "../../../internal/utils";
import { RequestInput } from "./request";
import { WriteControl } from "./writecontrol";
/**
 * A batch of updates to perform on a form. All the specified updates are made or none of them are.
 */
export declare class BatchUpdateFormRequestInput extends SpeakeasyBase {
    /**
     * Whether to return an updated version of the model in the response.
     */
    includeFormInResponse?: boolean;
    /**
     * Required. The update requests of this batch.
     */
    requests?: RequestInput[];
    /**
     * Provides control over how write requests are executed.
     */
    writeControl?: WriteControl;
}
