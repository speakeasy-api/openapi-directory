import { SpeakeasyBase } from "../../../internal/utils";
import { CatalogIdMapping } from "./catalogidmapping";
import { CatalogObject } from "./catalogobject";
import { ErrorT } from "./error";
/**
 * Success
 */
export declare class BatchUpsertCatalogObjectsResponse extends SpeakeasyBase {
    /**
     * Any errors that occurred during the request.
     */
    errors?: ErrorT[];
    /**
     * The mapping between client and server IDs for this upsert.
     */
    idMappings?: CatalogIdMapping[];
    /**
     * The created successfully created CatalogObjects.
     */
    objects?: CatalogObject[];
    /**
     * The database [timestamp](https://developer.squareup.com/docs/build-basics/working-with-dates) of this update in RFC 3339 format, e.g., "2016-09-04T23:59:33.123Z".
     */
    updatedAt?: string;
}
