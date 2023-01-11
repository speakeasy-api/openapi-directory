import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudChannelV1SkuGroupCondition } from "./googlecloudchannelv1skugroupcondition";



// GoogleCloudChannelV1RepricingCondition
/** 
 * Represents the various repricing conditions you can use for a conditional override.
**/
export class GoogleCloudChannelV1RepricingCondition extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=skuGroupCondition" })
  skuGroupCondition?: GoogleCloudChannelV1SkuGroupCondition;
}
