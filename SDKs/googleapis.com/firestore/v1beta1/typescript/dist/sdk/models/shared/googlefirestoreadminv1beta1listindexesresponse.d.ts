import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleFirestoreAdminV1beta1Index } from "./googlefirestoreadminv1beta1index";
/**
 * The response for FirestoreAdmin.ListIndexes.
 */
export declare class GoogleFirestoreAdminV1beta1ListIndexesResponse extends SpeakeasyBase {
    /**
     * The indexes.
     */
    indexes?: GoogleFirestoreAdminV1beta1Index[];
    /**
     * The standard List next-page token.
     */
    nextPageToken?: string;
}
