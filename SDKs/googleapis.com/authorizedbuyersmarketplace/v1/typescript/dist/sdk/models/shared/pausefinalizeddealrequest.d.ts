import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Request message for pausing a finalized deal.
 */
export declare class PauseFinalizedDealRequest extends SpeakeasyBase {
    /**
     * The reason to pause the finalized deal, will be displayed to the seller. Maximum length is 1000 characters.
     */
    reason?: string;
}
