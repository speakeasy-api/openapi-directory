import { SpeakeasyBase } from "../../../internal/utils";
import { ErrorT } from "./error";
/**
 * Success
 */
export declare class BatchDeleteCatalogObjectsResponse extends SpeakeasyBase {
    /**
     * The database [timestamp](https://developer.squareup.com/docs/build-basics/working-with-dates) of this deletion in RFC 3339 format, e.g., "2016-09-04T23:59:33.123Z".
     */
    deletedAt?: string;
    /**
     * The IDs of all CatalogObjects deleted by this request.
     */
    deletedObjectIds?: string[];
    /**
     * Any errors that occurred during the request.
     */
    errors?: ErrorT[];
}
