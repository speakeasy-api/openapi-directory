import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudRetailV2ProductLevelConfig } from "./googlecloudretailv2productlevelconfig";
/**
 * The catalog configuration.
 */
export declare class GoogleCloudRetailV2Catalog extends SpeakeasyBase {
    /**
     * Required. Immutable. The catalog display name. This field must be a UTF-8 encoded string with a length limit of 128 characters. Otherwise, an INVALID_ARGUMENT error is returned.
     */
    displayName?: string;
    /**
     * Required. Immutable. The fully qualified resource name of the catalog.
     */
    name?: string;
    /**
     * Configures what level the product should be uploaded with regards to how users will be send events and how predictions will be made.
     */
    productLevelConfig?: GoogleCloudRetailV2ProductLevelConfig;
}
