import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Billing related settings of an advertiser.
 */
export declare class AdvertiserBillingConfig extends SpeakeasyBase {
    /**
     * The ID of a billing profile assigned to the advertiser. This field will default to the default billing profile ID of the advertiser's parent partner if a value is not provided.
     */
    billingProfileId?: string;
}
