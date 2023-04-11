import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowV2Document } from "./googleclouddialogflowv2document";
/**
 * Response message for Documents.ListDocuments.
 */
export declare class GoogleCloudDialogflowV2ListDocumentsResponse extends SpeakeasyBase {
    /**
     * The list of documents.
     */
    documents?: GoogleCloudDialogflowV2Document[];
    /**
     * Token to retrieve the next page of results, or empty if there are no more results in the list.
     */
    nextPageToken?: string;
}
