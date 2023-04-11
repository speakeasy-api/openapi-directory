import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudRetailV2CatalogAttributeInput } from "./googlecloudretailv2catalogattribute";
/**
 * Request for CatalogService.AddCatalogAttribute method.
 */
export declare class GoogleCloudRetailV2AddCatalogAttributeRequestInput extends SpeakeasyBase {
    /**
     * Catalog level attribute config for an attribute. For example, if customers want to enable/disable facet for a specific attribute.
     */
    catalogAttribute?: GoogleCloudRetailV2CatalogAttributeInput;
}
