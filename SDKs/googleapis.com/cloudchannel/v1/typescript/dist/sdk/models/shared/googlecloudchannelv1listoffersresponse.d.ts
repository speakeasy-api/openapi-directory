import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudChannelV1Offer } from "./googlecloudchannelv1offer";
/**
 * Response message for ListOffers.
 */
export declare class GoogleCloudChannelV1ListOffersResponse extends SpeakeasyBase {
    /**
     * A token to retrieve the next page of results.
     */
    nextPageToken?: string;
    /**
     * The list of Offers requested.
     */
    offers?: GoogleCloudChannelV1Offer[];
}
