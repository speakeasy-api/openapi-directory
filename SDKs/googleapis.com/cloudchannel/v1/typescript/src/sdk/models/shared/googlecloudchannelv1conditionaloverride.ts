import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudChannelV1RepricingAdjustment } from "./googlecloudchannelv1repricingadjustment";
import { GoogleCloudChannelV1RepricingCondition } from "./googlecloudchannelv1repricingcondition";


export enum GoogleCloudChannelV1ConditionalOverrideRebillingBasisEnum {
    RebillingBasisUnspecified = "REBILLING_BASIS_UNSPECIFIED",
    CostAtList = "COST_AT_LIST",
    DirectCustomerCost = "DIRECT_CUSTOMER_COST"
}


// GoogleCloudChannelV1ConditionalOverride
/** 
 * Specifies the override to conditionally apply.
**/
export class GoogleCloudChannelV1ConditionalOverride extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=adjustment" })
  adjustment?: GoogleCloudChannelV1RepricingAdjustment;

  @SpeakeasyMetadata({ data: "json, name=rebillingBasis" })
  rebillingBasis?: GoogleCloudChannelV1ConditionalOverrideRebillingBasisEnum;

  @SpeakeasyMetadata({ data: "json, name=repricingCondition" })
  repricingCondition?: GoogleCloudChannelV1RepricingCondition;
}
