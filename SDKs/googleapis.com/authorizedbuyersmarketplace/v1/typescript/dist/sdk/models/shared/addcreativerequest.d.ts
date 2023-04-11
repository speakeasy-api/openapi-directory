import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Request message for adding creative to be used in the bidding process for the finalized deal.
 */
export declare class AddCreativeRequest extends SpeakeasyBase {
    /**
     * Name of the creative to add to the finalized deal, in the format `buyers/{buyerAccountId}/creatives/{creativeId}`. See creative.name.
     */
    creative?: string;
}
