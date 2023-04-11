import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleFirestoreAdminV1beta2Field } from "./googlefirestoreadminv1beta2field";
/**
 * The response for FirestoreAdmin.ListFields.
 */
export declare class GoogleFirestoreAdminV1beta2ListFieldsResponse extends SpeakeasyBase {
    /**
     * The requested fields.
     */
    fields?: GoogleFirestoreAdminV1beta2Field[];
    /**
     * A page token that may be used to request another page of results. If blank, this is the last page.
     */
    nextPageToken?: string;
}
