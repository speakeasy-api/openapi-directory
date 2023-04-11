import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleDatastoreAdminV1Index } from "./googledatastoreadminv1index";
/**
 * The response for google.datastore.admin.v1.DatastoreAdmin.ListIndexes.
 */
export declare class GoogleDatastoreAdminV1ListIndexesResponse extends SpeakeasyBase {
    /**
     * The indexes.
     */
    indexes?: GoogleDatastoreAdminV1Index[];
    /**
     * The standard List next-page token.
     */
    nextPageToken?: string;
}
