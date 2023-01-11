import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleCloudChannelV1SkuGroupCondition
/** 
 * A condition that applies the override if a line item SKU is found in the SKU group.
**/
export class GoogleCloudChannelV1SkuGroupCondition extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=skuGroup" })
  skuGroup?: string;
}
