import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Request to accept a proposal. Accepting a proposal implies acceptance of the publisher terms_and_conditions, if any.
 */
export declare class AcceptProposalRequest extends SpeakeasyBase {
    /**
     * The last known client revision number of the proposal.
     */
    proposalRevision?: string;
}
