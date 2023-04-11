import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowV2ConversationDataset } from "./googleclouddialogflowv2conversationdataset";
/**
 * The response message for ConversationDatasets.ListConversationDatasets.
 */
export declare class GoogleCloudDialogflowV2ListConversationDatasetsResponse extends SpeakeasyBase {
    /**
     * The list of datasets to return.
     */
    conversationDatasets?: GoogleCloudDialogflowV2ConversationDataset[];
    /**
     * The token to use to retrieve the next page of results, or empty if there are no more results in the list.
     */
    nextPageToken?: string;
}
