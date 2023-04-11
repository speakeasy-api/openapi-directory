import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowV2beta1Suggestion } from "./googleclouddialogflowv2beta1suggestion";
/**
 * The response message for Participants.ListSuggestions.
 */
export declare class GoogleCloudDialogflowV2beta1ListSuggestionsResponse extends SpeakeasyBase {
    /**
     * Optional. Token to retrieve the next page of results or empty if there are no more results in the list.
     */
    nextPageToken?: string;
    /**
     * Required. The list of suggestions. There will be a maximum number of items returned based on the page_size field in the request. `suggestions` is sorted by `create_time` in descending order.
     */
    suggestions?: GoogleCloudDialogflowV2beta1Suggestion[];
}
