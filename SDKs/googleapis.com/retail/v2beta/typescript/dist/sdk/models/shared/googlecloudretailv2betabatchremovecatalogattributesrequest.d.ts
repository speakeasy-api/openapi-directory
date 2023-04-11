import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Request for CatalogService.BatchRemoveCatalogAttributes method.
 */
export declare class GoogleCloudRetailV2betaBatchRemoveCatalogAttributesRequest extends SpeakeasyBase {
    /**
     * Required. The attribute name keys of the CatalogAttributes to delete. A maximum of 1000 catalog attributes can be deleted in a batch.
     */
    attributeKeys?: string[];
}
