import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Request message to pause serving for finalized deals.
 */
export declare class PauseProposalDealsRequest extends SpeakeasyBase {
    /**
     * The external_deal_id's of the deals to be paused. If empty, all the deals in the proposal will be paused.
     */
    externalDealIds?: string[];
    /**
     * The reason why the deals are being paused. This human readable message will be displayed in the seller's UI. (Max length: 1000 unicode code units.)
     */
    reason?: string;
}
