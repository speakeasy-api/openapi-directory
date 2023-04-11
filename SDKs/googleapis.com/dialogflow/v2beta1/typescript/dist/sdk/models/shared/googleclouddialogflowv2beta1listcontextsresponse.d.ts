import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowV2beta1Context } from "./googleclouddialogflowv2beta1context";
/**
 * The response message for Contexts.ListContexts.
 */
export declare class GoogleCloudDialogflowV2beta1ListContextsResponse extends SpeakeasyBase {
    /**
     * The list of contexts. There will be a maximum number of items returned based on the page_size field in the request.
     */
    contexts?: GoogleCloudDialogflowV2beta1Context[];
    /**
     * Token to retrieve the next page of results, or empty if there are no more results in the list.
     */
    nextPageToken?: string;
}
