import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowV2beta1Document } from "./googleclouddialogflowv2beta1document";
/**
 * Response message for Documents.ListDocuments.
 */
export declare class GoogleCloudDialogflowV2beta1ListDocumentsResponse extends SpeakeasyBase {
    /**
     * The list of documents.
     */
    documents?: GoogleCloudDialogflowV2beta1Document[];
    /**
     * Token to retrieve the next page of results, or empty if there are no more results in the list.
     */
    nextPageToken?: string;
}
