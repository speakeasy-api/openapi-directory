import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Request message to pause serving for an already-finalized proposal.
 */
export declare class PauseProposalRequest extends SpeakeasyBase {
    /**
     * The reason why the proposal is being paused. This human readable message will be displayed in the seller's UI. (Max length: 1000 unicode code units.)
     */
    reason?: string;
}
