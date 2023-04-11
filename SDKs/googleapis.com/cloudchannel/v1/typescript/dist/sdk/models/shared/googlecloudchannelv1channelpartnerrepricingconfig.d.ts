import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudChannelV1RepricingConfig } from "./googlecloudchannelv1repricingconfig";
/**
 * Configuration for how a distributor will rebill a channel partner (also known as a distributor-authorized reseller).
 */
export declare class GoogleCloudChannelV1ChannelPartnerRepricingConfig extends SpeakeasyBase {
    /**
     * Output only. Resource name of the ChannelPartnerRepricingConfig. Format: accounts/{account_id}/channelPartnerLinks/{channel_partner_id}/channelPartnerRepricingConfigs/{id}.
     */
    name?: string;
    /**
     * Configuration for repricing a Google bill over a period of time.
     */
    repricingConfig?: GoogleCloudChannelV1RepricingConfig;
    /**
     * Output only. Timestamp of an update to the repricing rule. If `update_time` is after RepricingConfig.effective_invoice_month then it indicates this was set mid-month.
     */
    updateTime?: string;
}
/**
 * Configuration for how a distributor will rebill a channel partner (also known as a distributor-authorized reseller).
 */
export declare class GoogleCloudChannelV1ChannelPartnerRepricingConfigInput extends SpeakeasyBase {
    /**
     * Configuration for repricing a Google bill over a period of time.
     */
    repricingConfig?: GoogleCloudChannelV1RepricingConfig;
}
