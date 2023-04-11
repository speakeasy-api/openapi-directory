import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleFirestoreAdminV1beta2Index } from "./googlefirestoreadminv1beta2index";
/**
 * The response for FirestoreAdmin.ListIndexes.
 */
export declare class GoogleFirestoreAdminV1beta2ListIndexesResponse extends SpeakeasyBase {
    /**
     * The requested indexes.
     */
    indexes?: GoogleFirestoreAdminV1beta2Index[];
    /**
     * A page token that may be used to request another page of results. If blank, this is the last page.
     */
    nextPageToken?: string;
}
