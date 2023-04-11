import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudChannelV1TransferableOffer } from "./googlecloudchannelv1transferableoffer";
/**
 * Response message for CloudChannelService.ListTransferableOffers.
 */
export declare class GoogleCloudChannelV1ListTransferableOffersResponse extends SpeakeasyBase {
    /**
     * A token to retrieve the next page of results. Pass to ListTransferableOffersRequest.page_token to obtain that page.
     */
    nextPageToken?: string;
    /**
     * Information about Offers for a customer that can be used for transfer.
     */
    transferableOffers?: GoogleCloudChannelV1TransferableOffer[];
}
