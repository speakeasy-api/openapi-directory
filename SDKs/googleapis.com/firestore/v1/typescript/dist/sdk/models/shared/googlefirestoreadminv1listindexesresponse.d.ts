import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleFirestoreAdminV1Index } from "./googlefirestoreadminv1index";
/**
 * The response for FirestoreAdmin.ListIndexes.
 */
export declare class GoogleFirestoreAdminV1ListIndexesResponse extends SpeakeasyBase {
    /**
     * The requested indexes.
     */
    indexes?: GoogleFirestoreAdminV1Index[];
    /**
     * A page token that may be used to request another page of results. If blank, this is the last page.
     */
    nextPageToken?: string;
}
