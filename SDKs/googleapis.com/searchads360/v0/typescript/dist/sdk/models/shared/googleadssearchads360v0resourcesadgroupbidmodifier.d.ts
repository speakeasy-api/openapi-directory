import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Represents an ad group bid modifier.
 */
export declare class GoogleAdsSearchads360V0ResourcesAdGroupBidModifier extends SpeakeasyBase {
    /**
     * The modifier for the bid when the criterion matches. The modifier must be in the range: 0.1 - 10.0. The range is 1.0 - 6.0 for PreferredContent. Use 0 to opt out of a Device type.
     */
    bidModifier?: number;
    /**
     * Immutable. The resource name of the ad group bid modifier. Ad group bid modifier resource names have the form: `customers/{customer_id}/adGroupBidModifiers/{ad_group_id}~{criterion_id}`
     */
    resourceName?: string;
}
