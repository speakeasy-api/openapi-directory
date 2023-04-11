import { SpeakeasyBase } from "../../../internal/utils";
import { CatalogObject } from "./catalogobject";
import { ErrorT } from "./error";
/**
 * Success
 */
export declare class SearchCatalogObjectsResponse extends SpeakeasyBase {
    /**
     * The pagination cursor to be used in a subsequent request. If unset, this is the final response.
     *
     * @remarks
     * See [Pagination](https://developer.squareup.com/docs/basics/api101/pagination) for more information.
     */
    cursor?: string;
    /**
     * Any errors that occurred during the request.
     */
    errors?: ErrorT[];
    /**
     * When the associated product catalog was last updated. Will
     *
     * @remarks
     * match the value for `end_time` or `cursor` if either field is included in the `SearchCatalog` request.
     */
    latestTime?: string;
    /**
     * The CatalogObjects returned.
     */
    objects?: CatalogObject[];
    /**
     * A list of CatalogObjects referenced by the objects in the `objects` field.
     */
    relatedObjects?: CatalogObject[];
}
