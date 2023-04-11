import { SpeakeasyBase } from "../../../internal/utils";
/**
 * An object containing the fields to POST for the request.
 *
 * @remarks
 *
 * See the corresponding object definition for field details.
 */
export declare class BatchRetrieveCatalogObjectsRequest extends SpeakeasyBase {
    /**
     * The specific version of the catalog objects to be included in the response.
     *
     * @remarks
     * This allows you to retrieve historical versions of objects. The specified version value is matched against
     * the [CatalogObject](https://developer.squareup.com/reference/square_2021-08-18/objects/CatalogObject)s' `version` attribute.
     */
    catalogVersion?: number;
    /**
     * If `true`, the response will include additional objects that are related to the
     *
     * @remarks
     * requested objects, as follows:
     *
     * If the `objects` field of the response contains a CatalogItem, its associated
     * CatalogCategory objects, CatalogTax objects, CatalogImage objects and
     * CatalogModifierLists will be returned in the `related_objects` field of the
     * response. If the `objects` field of the response contains a CatalogItemVariation,
     * its parent CatalogItem will be returned in the `related_objects` field of
     * the response.
     */
    includeRelatedObjects?: boolean;
    /**
     * The IDs of the CatalogObjects to be retrieved.
     */
    objectIds: string[];
}
