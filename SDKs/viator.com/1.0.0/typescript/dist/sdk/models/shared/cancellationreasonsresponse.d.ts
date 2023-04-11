import { SpeakeasyBase } from "../../../internal/utils";
import { CancellationReason } from "./cancellationreason";
export declare class CancellationReasonsResponse extends SpeakeasyBase {
    /**
     * Array of cancellation reason codes and their asssociated texts for display to the user
     */
    reasons?: CancellationReason[];
}
