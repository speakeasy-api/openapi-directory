import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudChannelV1Offer } from "./googlecloudchannelv1offer";
/**
 * Offer that you can purchase for a customer. This is used in the ListPurchasableOffer API response.
 */
export declare class GoogleCloudChannelV1PurchasableOffer extends SpeakeasyBase {
    /**
     * Represents an offer made to resellers for purchase. An offer is associated with a Sku, has a plan for payment, a price, and defines the constraints for buying.
     */
    offer?: GoogleCloudChannelV1Offer;
}
