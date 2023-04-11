import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The party that first paused the deal; unspecified for active deals.
 */
export declare enum DealPausingInfoPauseRoleEnum {
    BuyerSellerRoleUnspecified = "BUYER_SELLER_ROLE_UNSPECIFIED",
    Buyer = "BUYER",
    Seller = "SELLER"
}
/**
 * Information related to deal pausing.
 */
export declare class DealPausingInfo extends SpeakeasyBase {
    /**
     * The reason for the pausing of the deal; empty for active deals.
     */
    pauseReason?: string;
    /**
     * The party that first paused the deal; unspecified for active deals.
     */
    pauseRole?: DealPausingInfoPauseRoleEnum;
    /**
     * Whether pausing is consented between buyer and seller for the deal.
     */
    pausingConsented?: boolean;
}
