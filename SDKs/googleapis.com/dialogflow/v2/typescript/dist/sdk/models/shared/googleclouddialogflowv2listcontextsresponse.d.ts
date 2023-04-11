import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowV2Context } from "./googleclouddialogflowv2context";
/**
 * The response message for Contexts.ListContexts.
 */
export declare class GoogleCloudDialogflowV2ListContextsResponse extends SpeakeasyBase {
    /**
     * The list of contexts. There will be a maximum number of items returned based on the page_size field in the request.
     */
    contexts?: GoogleCloudDialogflowV2Context[];
    /**
     * Token to retrieve the next page of results, or empty if there are no more results in the list.
     */
    nextPageToken?: string;
}
