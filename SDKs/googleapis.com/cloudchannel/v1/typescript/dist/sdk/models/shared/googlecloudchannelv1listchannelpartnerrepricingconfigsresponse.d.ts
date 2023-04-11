import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudChannelV1ChannelPartnerRepricingConfig } from "./googlecloudchannelv1channelpartnerrepricingconfig";
/**
 * Response message for CloudChannelService.ListChannelPartnerRepricingConfigs.
 */
export declare class GoogleCloudChannelV1ListChannelPartnerRepricingConfigsResponse extends SpeakeasyBase {
    /**
     * The repricing configs for this channel partner.
     */
    channelPartnerRepricingConfigs?: GoogleCloudChannelV1ChannelPartnerRepricingConfig[];
    /**
     * A token to retrieve the next page of results. Pass to ListChannelPartnerRepricingConfigsRequest.page_token to obtain that page.
     */
    nextPageToken?: string;
}
