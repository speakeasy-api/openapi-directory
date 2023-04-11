import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudChannelV1SkuGroupCondition } from "./googlecloudchannelv1skugroupcondition";
/**
 * Represents the various repricing conditions you can use for a conditional override.
 */
export declare class GoogleCloudChannelV1RepricingCondition extends SpeakeasyBase {
    /**
     * A condition that applies the override if a line item SKU is found in the SKU group.
     */
    skuGroupCondition?: GoogleCloudChannelV1SkuGroupCondition;
}
