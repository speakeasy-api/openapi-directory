import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudChannelV1RepricingAdjustment } from "./googlecloudchannelv1repricingadjustment";
import { GoogleCloudChannelV1RepricingCondition } from "./googlecloudchannelv1repricingcondition";
export declare enum GoogleCloudChannelV1ConditionalOverrideRebillingBasisEnum {
    RebillingBasisUnspecified = "REBILLING_BASIS_UNSPECIFIED",
    CostAtList = "COST_AT_LIST",
    DirectCustomerCost = "DIRECT_CUSTOMER_COST"
}
/**
 * Specifies the override to conditionally apply.
**/
export declare class GoogleCloudChannelV1ConditionalOverride extends SpeakeasyBase {
    adjustment?: GoogleCloudChannelV1RepricingAdjustment;
    rebillingBasis?: GoogleCloudChannelV1ConditionalOverrideRebillingBasisEnum;
    repricingCondition?: GoogleCloudChannelV1RepricingCondition;
}
