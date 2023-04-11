import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudChannelV1RepricingConfig } from "./googlecloudchannelv1repricingconfig";
/**
 * Configuration for how a reseller will reprice a Customer.
 */
export declare class GoogleCloudChannelV1CustomerRepricingConfigInput extends SpeakeasyBase {
    /**
     * Configuration for repricing a Google bill over a period of time.
     */
    repricingConfig?: GoogleCloudChannelV1RepricingConfig;
}
/**
 * Configuration for how a reseller will reprice a Customer.
 */
export declare class GoogleCloudChannelV1CustomerRepricingConfig extends SpeakeasyBase {
    /**
     * Output only. Resource name of the CustomerRepricingConfig. Format: accounts/{account_id}/customers/{customer_id}/customerRepricingConfigs/{id}.
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
