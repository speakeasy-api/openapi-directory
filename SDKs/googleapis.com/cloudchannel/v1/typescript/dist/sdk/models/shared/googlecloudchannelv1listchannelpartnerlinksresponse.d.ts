import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudChannelV1ChannelPartnerLink } from "./googlecloudchannelv1channelpartnerlink";
/**
 * Response message for CloudChannelService.ListChannelPartnerLinks.
 */
export declare class GoogleCloudChannelV1ListChannelPartnerLinksResponse extends SpeakeasyBase {
    /**
     * The Channel partner links for a reseller.
     */
    channelPartnerLinks?: GoogleCloudChannelV1ChannelPartnerLink[];
    /**
     * A token to retrieve the next page of results. Pass to ListChannelPartnerLinksRequest.page_token to obtain that page.
     */
    nextPageToken?: string;
}
