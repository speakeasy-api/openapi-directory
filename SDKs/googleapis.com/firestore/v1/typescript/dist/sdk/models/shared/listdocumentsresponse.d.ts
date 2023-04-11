import { SpeakeasyBase } from "../../../internal/utils";
import { Document } from "./document";
/**
 * The response for Firestore.ListDocuments.
 */
export declare class ListDocumentsResponse extends SpeakeasyBase {
    /**
     * The Documents found.
     */
    documents?: Document[];
    /**
     * A token to retrieve the next page of documents. If this field is omitted, there are no subsequent pages.
     */
    nextPageToken?: string;
}
