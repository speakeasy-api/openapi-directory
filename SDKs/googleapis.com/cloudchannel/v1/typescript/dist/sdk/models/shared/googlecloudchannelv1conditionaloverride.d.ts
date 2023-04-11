import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudChannelV1RepricingAdjustment } from "./googlecloudchannelv1repricingadjustment";
import { GoogleCloudChannelV1RepricingCondition } from "./googlecloudchannelv1repricingcondition";
/**
 * Required. The RebillingBasis to use for the applied override. Shows the relative cost based on your repricing costs.
 */
export declare enum GoogleCloudChannelV1ConditionalOverrideRebillingBasisEnum {
    RebillingBasisUnspecified = "REBILLING_BASIS_UNSPECIFIED",
    CostAtList = "COST_AT_LIST",
    DirectCustomerCost = "DIRECT_CUSTOMER_COST"
}
/**
 * Specifies the override to conditionally apply.
 */
export declare class GoogleCloudChannelV1ConditionalOverride extends SpeakeasyBase {
    /**
     * A type that represents the various adjustments you can apply to a bill.
     */
    adjustment?: GoogleCloudChannelV1RepricingAdjustment;
    /**
     * Required. The RebillingBasis to use for the applied override. Shows the relative cost based on your repricing costs.
     */
    rebillingBasis?: GoogleCloudChannelV1ConditionalOverrideRebillingBasisEnum;
    /**
     * Represents the various repricing conditions you can use for a conditional override.
     */
    repricingCondition?: GoogleCloudChannelV1RepricingCondition;
}
