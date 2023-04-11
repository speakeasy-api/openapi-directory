import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudChannelV1PurchasableOffer } from "./googlecloudchannelv1purchasableoffer";
/**
 * Response message for ListPurchasableOffers.
 */
export declare class GoogleCloudChannelV1ListPurchasableOffersResponse extends SpeakeasyBase {
    /**
     * A token to retrieve the next page of results.
     */
    nextPageToken?: string;
    /**
     * The list of Offers requested.
     */
    purchasableOffers?: GoogleCloudChannelV1PurchasableOffer[];
}
