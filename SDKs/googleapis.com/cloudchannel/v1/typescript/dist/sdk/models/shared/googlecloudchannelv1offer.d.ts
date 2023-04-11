import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudChannelV1Constraints } from "./googlecloudchannelv1constraints";
import { GoogleCloudChannelV1MarketingInfo } from "./googlecloudchannelv1marketinginfo";
import { GoogleCloudChannelV1ParameterDefinition } from "./googlecloudchannelv1parameterdefinition";
import { GoogleCloudChannelV1Plan } from "./googlecloudchannelv1plan";
import { GoogleCloudChannelV1PriceByResource } from "./googlecloudchannelv1pricebyresource";
import { GoogleCloudChannelV1Sku } from "./googlecloudchannelv1sku";
/**
 * Represents an offer made to resellers for purchase. An offer is associated with a Sku, has a plan for payment, a price, and defines the constraints for buying.
 */
export declare class GoogleCloudChannelV1Offer extends SpeakeasyBase {
    /**
     * Represents the constraints for buying the Offer.
     */
    constraints?: GoogleCloudChannelV1Constraints;
    /**
     * The deal code of the offer to get a special promotion or discount.
     */
    dealCode?: string;
    /**
     * Output only. End of the Offer validity time.
     */
    endTime?: string;
    /**
     * Represents the marketing information for a Product, SKU or Offer.
     */
    marketingInfo?: GoogleCloudChannelV1MarketingInfo;
    /**
     * Resource Name of the Offer. Format: accounts/{account_id}/offers/{offer_id}
     */
    name?: string;
    /**
     * Parameters required to use current Offer to purchase.
     */
    parameterDefinitions?: GoogleCloudChannelV1ParameterDefinition[];
    /**
     * The payment plan for the Offer. Describes how to make a payment.
     */
    plan?: GoogleCloudChannelV1Plan;
    /**
     * Price for each monetizable resource type.
     */
    priceByResources?: GoogleCloudChannelV1PriceByResource[];
    /**
     * Represents a product's purchasable Stock Keeping Unit (SKU). SKUs represent the different variations of the product. For example, Google Workspace Business Standard and Google Workspace Business Plus are Google Workspace product SKUs.
     */
    sku?: GoogleCloudChannelV1Sku;
    /**
     * Start of the Offer validity time.
     */
    startTime?: string;
}
