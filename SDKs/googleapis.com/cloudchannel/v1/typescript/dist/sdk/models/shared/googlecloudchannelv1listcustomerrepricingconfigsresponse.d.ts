import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudChannelV1CustomerRepricingConfig } from "./googlecloudchannelv1customerrepricingconfig";
/**
 * Response message for CloudChannelService.ListCustomerRepricingConfigs.
 */
export declare class GoogleCloudChannelV1ListCustomerRepricingConfigsResponse extends SpeakeasyBase {
    /**
     * The repricing configs for this channel partner.
     */
    customerRepricingConfigs?: GoogleCloudChannelV1CustomerRepricingConfig[];
    /**
     * A token to retrieve the next page of results. Pass to ListCustomerRepricingConfigsRequest.page_token to obtain that page.
     */
    nextPageToken?: string;
}
