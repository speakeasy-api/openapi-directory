import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Response of the CatalogService.BatchRemoveCatalogAttributes.
 */
export declare class GoogleCloudRetailV2betaBatchRemoveCatalogAttributesResponse extends SpeakeasyBase {
    /**
     * Catalog attributes that were deleted. Only pre-loaded catalog attributes that are neither in use by products nor predefined can be deleted.
     */
    deletedCatalogAttributes?: string[];
    /**
     * Catalog attributes that were reset. Catalog attributes that are either in use by products or are predefined attributes cannot be deleted; however, their configuration properties will reset to default values upon removal request.
     */
    resetCatalogAttributes?: string[];
}
