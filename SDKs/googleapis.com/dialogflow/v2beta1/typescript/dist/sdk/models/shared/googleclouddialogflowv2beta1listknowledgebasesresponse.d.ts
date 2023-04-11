import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowV2beta1KnowledgeBase } from "./googleclouddialogflowv2beta1knowledgebase";
/**
 * Response message for KnowledgeBases.ListKnowledgeBases.
 */
export declare class GoogleCloudDialogflowV2beta1ListKnowledgeBasesResponse extends SpeakeasyBase {
    /**
     * The list of knowledge bases.
     */
    knowledgeBases?: GoogleCloudDialogflowV2beta1KnowledgeBase[];
    /**
     * Token to retrieve the next page of results, or empty if there are no more results in the list.
     */
    nextPageToken?: string;
}
