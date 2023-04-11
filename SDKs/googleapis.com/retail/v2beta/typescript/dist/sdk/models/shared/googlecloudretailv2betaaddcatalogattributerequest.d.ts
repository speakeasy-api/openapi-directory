import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudRetailV2betaCatalogAttributeInput } from "./googlecloudretailv2betacatalogattribute";
/**
 * Request for CatalogService.AddCatalogAttribute method.
 */
export declare class GoogleCloudRetailV2betaAddCatalogAttributeRequestInput extends SpeakeasyBase {
    /**
     * Catalog level attribute config for an attribute. For example, if customers want to enable/disable facet for a specific attribute.
     */
    catalogAttribute?: GoogleCloudRetailV2betaCatalogAttributeInput;
}
