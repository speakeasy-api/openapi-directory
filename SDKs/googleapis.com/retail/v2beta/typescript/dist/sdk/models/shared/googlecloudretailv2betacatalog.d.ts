import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudRetailV2betaMerchantCenterLinkingConfig } from "./googlecloudretailv2betamerchantcenterlinkingconfig";
import { GoogleCloudRetailV2betaProductLevelConfig } from "./googlecloudretailv2betaproductlevelconfig";
/**
 * The catalog configuration.
 */
export declare class GoogleCloudRetailV2betaCatalog extends SpeakeasyBase {
    /**
     * Required. Immutable. The catalog display name. This field must be a UTF-8 encoded string with a length limit of 128 characters. Otherwise, an INVALID_ARGUMENT error is returned.
     */
    displayName?: string;
    /**
     * Configures Merchant Center linking. Links contained in the config will be used to sync data from a Merchant Center account to a Cloud Retail branch.
     */
    merchantCenterLinkingConfig?: GoogleCloudRetailV2betaMerchantCenterLinkingConfig;
    /**
     * Required. Immutable. The fully qualified resource name of the catalog.
     */
    name?: string;
    /**
     * Configures what level the product should be uploaded with regards to how users will be send events and how predictions will be made.
     */
    productLevelConfig?: GoogleCloudRetailV2betaProductLevelConfig;
}
