import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudChannelV1PurchasableSku } from "./googlecloudchannelv1purchasablesku";
/**
 * Response message for ListPurchasableSkus.
 */
export declare class GoogleCloudChannelV1ListPurchasableSkusResponse extends SpeakeasyBase {
    /**
     * A token to retrieve the next page of results.
     */
    nextPageToken?: string;
    /**
     * The list of SKUs requested.
     */
    purchasableSkus?: GoogleCloudChannelV1PurchasableSku[];
}
