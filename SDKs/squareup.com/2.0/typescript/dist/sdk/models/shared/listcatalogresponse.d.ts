import { SpeakeasyBase } from "../../../internal/utils";
import { CatalogObject } from "./catalogobject";
import { ErrorT } from "./error";
/**
 * Success
 */
export declare class ListCatalogResponse extends SpeakeasyBase {
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
     * The CatalogObjects returned.
     */
    objects?: CatalogObject[];
}
