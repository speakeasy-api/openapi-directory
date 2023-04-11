import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Request to accept a proposal.
 */
export declare class AcceptProposalRequest extends SpeakeasyBase {
    /**
     * The last known client revision number of the proposal.
     */
    proposalRevision?: string;
}
