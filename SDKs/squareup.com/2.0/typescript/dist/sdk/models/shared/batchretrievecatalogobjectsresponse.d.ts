import { SpeakeasyBase } from "../../../internal/utils";
import { CatalogObject } from "./catalogobject";
import { ErrorT } from "./error";
/**
 * Success
 */
export declare class BatchRetrieveCatalogObjectsResponse extends SpeakeasyBase {
    /**
     * Any errors that occurred during the request.
     */
    errors?: ErrorT[];
    /**
     * A list of [CatalogObject](https://developer.squareup.com/reference/square_2021-08-18/objects/CatalogObject)s returned.
     */
    objects?: CatalogObject[];
    /**
     * A list of [CatalogObject](https://developer.squareup.com/reference/square_2021-08-18/objects/CatalogObject)s referenced by the object in the `objects` field.
     */
    relatedObjects?: CatalogObject[];
}
