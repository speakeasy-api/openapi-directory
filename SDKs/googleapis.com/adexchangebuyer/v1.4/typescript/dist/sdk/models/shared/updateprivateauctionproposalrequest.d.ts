import { SpeakeasyBase } from "../../../internal/utils";
import { MarketplaceNote } from "./marketplacenote";
export declare class UpdatePrivateAuctionProposalRequest extends SpeakeasyBase {
    /**
     * The externalDealId of the deal to be updated.
     */
    externalDealId?: string;
    /**
     * A proposal is associated with a bunch of notes which may optionally be associated with a deal and/or revision number.
     */
    note?: MarketplaceNote;
    /**
     * The current revision number of the proposal to be updated.
     */
    proposalRevisionNumber?: string;
    /**
     * The proposed action on the private auction proposal.
     */
    updateAction?: string;
}
