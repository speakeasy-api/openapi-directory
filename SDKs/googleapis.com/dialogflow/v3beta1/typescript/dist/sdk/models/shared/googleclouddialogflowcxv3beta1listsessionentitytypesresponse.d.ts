import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowCxV3beta1SessionEntityType } from "./googleclouddialogflowcxv3beta1sessionentitytype";
/**
 * The response message for SessionEntityTypes.ListSessionEntityTypes.
 */
export declare class GoogleCloudDialogflowCxV3beta1ListSessionEntityTypesResponse extends SpeakeasyBase {
    /**
     * Token to retrieve the next page of results, or empty if there are no more results in the list.
     */
    nextPageToken?: string;
    /**
     * The list of session entity types. There will be a maximum number of items returned based on the page_size field in the request.
     */
    sessionEntityTypes?: GoogleCloudDialogflowCxV3beta1SessionEntityType[];
}
