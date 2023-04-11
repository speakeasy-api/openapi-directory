import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Specific fields for offer posts.
 */
export declare class LocalPostOffer extends SpeakeasyBase {
    /**
     * Optional. Offer code that is usable in store or online.
     */
    couponCode?: string;
    /**
     * Optional. Online link to redeem offer.
     */
    redeemOnlineUrl?: string;
    /**
     * Optional. Offer terms and conditions.
     */
    termsConditions?: string;
}
