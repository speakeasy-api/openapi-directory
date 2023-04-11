import { SpeakeasyBase } from "../../../internal/utils";
import { ErrorT } from "./error";
/**
 * Success
 */
export declare class DeleteCatalogObjectResponse extends SpeakeasyBase {
    /**
     * The database [timestamp](https://developer.squareup.com/docs/build-basics/working-with-dates)
     *
     * @remarks
     * of this deletion in RFC 3339 format, e.g., `2016-09-04T23:59:33.123Z`.
     */
    deletedAt?: string;
    /**
     * The IDs of all catalog objects deleted by this request.
     *
     * @remarks
     * Multiple IDs may be returned when associated objects are also deleted, for example
     * a catalog item variation will be deleted (and its ID included in this field)
     * when its parent catalog item is deleted.
     */
    deletedObjectIds?: string[];
    /**
     * Any errors that occurred during the request.
     */
    errors?: ErrorT[];
}
