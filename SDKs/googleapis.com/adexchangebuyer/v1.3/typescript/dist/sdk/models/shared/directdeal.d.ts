import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The configuration data for an Ad Exchange direct deal.
 */
export declare class DirectDeal extends SpeakeasyBase {
    /**
     * The account id of the buyer this deal is for.
     */
    accountId?: number;
    /**
     * The name of the advertiser this deal is for.
     */
    advertiser?: string;
    /**
     * Whether the publisher for this deal is eligible for alcohol ads.
     */
    allowsAlcohol?: boolean;
    /**
     * The account id that this deal was negotiated for. It is either the buyer or the client that this deal was negotiated on behalf of.
     */
    buyerAccountId?: string;
    /**
     * The currency code that applies to the fixed_cpm value. If not set then assumed to be USD.
     */
    currencyCode?: string;
    /**
     * The deal type such as programmatic reservation or fixed price and so on.
     */
    dealTier?: string;
    /**
     * End time for when this deal stops being active. If not set then this deal is valid until manually disabled by the publisher. In seconds since the epoch.
     */
    endTime?: string;
    /**
     * The fixed price for this direct deal. In cpm micros of currency according to currency_code. If set, then this deal is eligible for the fixed price tier of buying (highest priority, pay exactly the configured fixed price).
     */
    fixedCpm?: string;
    /**
     * Deal id.
     */
    id?: string;
    /**
     * Resource type.
     */
    kind?: string;
    /**
     * Deal name.
     */
    name?: string;
    /**
     * The minimum price for this direct deal. In cpm micros of currency according to currency_code. If set, then this deal is eligible for the private exchange tier of buying (below fixed price priority, run as a second price auction).
     */
    privateExchangeMinCpm?: string;
    /**
     * If true, the publisher has opted to have their blocks ignored when a creative is bid with for this deal.
     */
    publisherBlocksOverriden?: boolean;
    /**
     * The name of the publisher offering this direct deal.
     */
    sellerNetwork?: string;
    /**
     * Start time for when this deal becomes active. If not set then this deal is active immediately upon creation. In seconds since the epoch.
     */
    startTime?: string;
}
