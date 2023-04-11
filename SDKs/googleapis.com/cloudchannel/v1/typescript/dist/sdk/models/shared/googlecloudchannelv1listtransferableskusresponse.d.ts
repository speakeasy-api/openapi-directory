import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudChannelV1TransferableSku } from "./googlecloudchannelv1transferablesku";
/**
 * Response message for CloudChannelService.ListTransferableSkus.
 */
export declare class GoogleCloudChannelV1ListTransferableSkusResponse extends SpeakeasyBase {
    /**
     * A token to retrieve the next page of results. Pass to ListTransferableSkusRequest.page_token to obtain that page.
     */
    nextPageToken?: string;
    /**
     * Information about existing SKUs for a customer that needs a transfer.
     */
    transferableSkus?: GoogleCloudChannelV1TransferableSku[];
}
