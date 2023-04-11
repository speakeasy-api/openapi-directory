import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudRetailV2alphaCatalogAttributeInput } from "./googlecloudretailv2alphacatalogattribute";
/**
 * Request for CatalogService.ReplaceCatalogAttribute method.
 */
export declare class GoogleCloudRetailV2alphaReplaceCatalogAttributeRequestInput extends SpeakeasyBase {
    /**
     * Catalog level attribute config for an attribute. For example, if customers want to enable/disable facet for a specific attribute.
     */
    catalogAttribute?: GoogleCloudRetailV2alphaCatalogAttributeInput;
    /**
     * Indicates which fields in the provided CatalogAttribute to update. The following are NOT supported: * CatalogAttribute.key If not set, all supported fields are updated.
     */
    updateMask?: string;
}
