import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowCxV3beta1Page } from "./googleclouddialogflowcxv3beta1page";
/**
 * The response message for Pages.ListPages.
 */
export declare class GoogleCloudDialogflowCxV3beta1ListPagesResponse extends SpeakeasyBase {
    /**
     * Token to retrieve the next page of results, or empty if there are no more results in the list.
     */
    nextPageToken?: string;
    /**
     * The list of pages. There will be a maximum number of items returned based on the page_size field in the request.
     */
    pages?: GoogleCloudDialogflowCxV3beta1Page[];
}
