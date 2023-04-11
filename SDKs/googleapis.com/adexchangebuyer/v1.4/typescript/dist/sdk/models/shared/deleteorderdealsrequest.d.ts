import { SpeakeasyBase } from "../../../internal/utils";
export declare class DeleteOrderDealsRequest extends SpeakeasyBase {
    /**
     * List of deals to delete for a given proposal
     */
    dealIds?: string[];
    /**
     * The last known proposal revision number.
     */
    proposalRevisionNumber?: string;
    /**
     * Indicates an optional action to take on the proposal
     */
    updateAction?: string;
}
