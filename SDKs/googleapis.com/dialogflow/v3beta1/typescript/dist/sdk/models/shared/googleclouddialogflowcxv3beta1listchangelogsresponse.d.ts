import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowCxV3beta1Changelog } from "./googleclouddialogflowcxv3beta1changelog";
/**
 * The response message for Changelogs.ListChangelogs.
 */
export declare class GoogleCloudDialogflowCxV3beta1ListChangelogsResponse extends SpeakeasyBase {
    /**
     * The list of changelogs. There will be a maximum number of items returned based on the page_size field in the request. The changelogs will be ordered by timestamp.
     */
    changelogs?: GoogleCloudDialogflowCxV3beta1Changelog[];
    /**
     * Token to retrieve the next page of results, or empty if there are no more results in the list.
     */
    nextPageToken?: string;
}
