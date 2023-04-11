import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleFirestoreAdminV1Field } from "./googlefirestoreadminv1field";
/**
 * The response for FirestoreAdmin.ListFields.
 */
export declare class GoogleFirestoreAdminV1ListFieldsResponse extends SpeakeasyBase {
    /**
     * The requested fields.
     */
    fields?: GoogleFirestoreAdminV1Field[];
    /**
     * A page token that may be used to request another page of results. If blank, this is the last page.
     */
    nextPageToken?: string;
}
