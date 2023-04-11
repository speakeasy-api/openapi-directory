import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowCxV3Page } from "./googleclouddialogflowcxv3page";
/**
 * The response message for Pages.ListPages.
 */
export declare class GoogleCloudDialogflowCxV3ListPagesResponse extends SpeakeasyBase {
    /**
     * Token to retrieve the next page of results, or empty if there are no more results in the list.
     */
    nextPageToken?: string;
    /**
     * The list of pages. There will be a maximum number of items returned based on the page_size field in the request.
     */
    pages?: GoogleCloudDialogflowCxV3Page[];
}
