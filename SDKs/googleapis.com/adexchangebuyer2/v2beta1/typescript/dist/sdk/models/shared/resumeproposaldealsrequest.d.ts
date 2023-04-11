import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Request message to resume (unpause) serving for already-finalized deals.
 */
export declare class ResumeProposalDealsRequest extends SpeakeasyBase {
    /**
     * The external_deal_id's of the deals to resume. If empty, all the deals in the proposal will be resumed.
     */
    externalDealIds?: string[];
}
