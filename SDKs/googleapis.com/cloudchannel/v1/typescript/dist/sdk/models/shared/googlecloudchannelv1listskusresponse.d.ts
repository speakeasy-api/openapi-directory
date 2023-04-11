import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudChannelV1Sku } from "./googlecloudchannelv1sku";
/**
 * Response message for ListSkus.
 */
export declare class GoogleCloudChannelV1ListSkusResponse extends SpeakeasyBase {
    /**
     * A token to retrieve the next page of results.
     */
    nextPageToken?: string;
    /**
     * The list of SKUs requested.
     */
    skus?: GoogleCloudChannelV1Sku[];
}
