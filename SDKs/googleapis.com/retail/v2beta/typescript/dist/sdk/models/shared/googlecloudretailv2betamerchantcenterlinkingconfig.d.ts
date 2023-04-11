import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudRetailV2betaMerchantCenterLink } from "./googlecloudretailv2betamerchantcenterlink";
/**
 * Configures Merchant Center linking. Links contained in the config will be used to sync data from a Merchant Center account to a Cloud Retail branch.
 */
export declare class GoogleCloudRetailV2betaMerchantCenterLinkingConfig extends SpeakeasyBase {
    /**
     * Links between Merchant Center accounts and branches.
     */
    links?: GoogleCloudRetailV2betaMerchantCenterLink[];
}
