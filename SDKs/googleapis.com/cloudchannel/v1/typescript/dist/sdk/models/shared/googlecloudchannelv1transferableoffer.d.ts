import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudChannelV1Offer } from "./googlecloudchannelv1offer";
/**
 * TransferableOffer represents an Offer that can be used in Transfer. Read-only.
 */
export declare class GoogleCloudChannelV1TransferableOffer extends SpeakeasyBase {
    /**
     * Represents an offer made to resellers for purchase. An offer is associated with a Sku, has a plan for payment, a price, and defines the constraints for buying.
     */
    offer?: GoogleCloudChannelV1Offer;
}
