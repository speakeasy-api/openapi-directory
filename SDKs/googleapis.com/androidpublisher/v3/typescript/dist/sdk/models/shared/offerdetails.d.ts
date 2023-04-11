import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Offer details information related to a purchase line item.
 */
export declare class OfferDetails extends SpeakeasyBase {
    /**
     * The base plan ID. Present for all base plan and offers.
     */
    basePlanId?: string;
    /**
     * The offer ID. Only present for discounted offers.
     */
    offerId?: string;
    /**
     * The latest offer tags associated with the offer. It includes tags inherited from the base plan.
     */
    offerTags?: string[];
}
