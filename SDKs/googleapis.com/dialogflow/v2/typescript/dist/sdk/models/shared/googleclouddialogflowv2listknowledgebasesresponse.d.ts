import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowV2KnowledgeBase } from "./googleclouddialogflowv2knowledgebase";
/**
 * Response message for KnowledgeBases.ListKnowledgeBases.
 */
export declare class GoogleCloudDialogflowV2ListKnowledgeBasesResponse extends SpeakeasyBase {
    /**
     * The list of knowledge bases.
     */
    knowledgeBases?: GoogleCloudDialogflowV2KnowledgeBase[];
    /**
     * Token to retrieve the next page of results, or empty if there are no more results in the list.
     */
    nextPageToken?: string;
}
