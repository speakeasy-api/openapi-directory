import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudRetailV2CatalogAttributeInput } from "./googlecloudretailv2catalogattribute";
/**
 * Request for CatalogService.ReplaceCatalogAttribute method.
 */
export declare class GoogleCloudRetailV2ReplaceCatalogAttributeRequestInput extends SpeakeasyBase {
    /**
     * Catalog level attribute config for an attribute. For example, if customers want to enable/disable facet for a specific attribute.
     */
    catalogAttribute?: GoogleCloudRetailV2CatalogAttributeInput;
    /**
     * Indicates which fields in the provided CatalogAttribute to update. The following are NOT supported: * CatalogAttribute.key If not set, all supported fields are updated.
     */
    updateMask?: string;
}
