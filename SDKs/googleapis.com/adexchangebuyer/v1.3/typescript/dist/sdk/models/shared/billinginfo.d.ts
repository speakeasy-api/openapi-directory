import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The configuration data for an Ad Exchange billing info.
 */
export declare class BillingInfo extends SpeakeasyBase {
    /**
     * Account id.
     */
    accountId?: number;
    /**
     * Account name.
     */
    accountName?: string;
    /**
     * A list of adgroup IDs associated with this particular account. These IDs may show up as part of a realtime bidding BidRequest, which indicates a bid request for this account.
     */
    billingId?: string[];
    /**
     * Resource type.
     */
    kind?: string;
}
