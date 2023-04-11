import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowCxV3Changelog } from "./googleclouddialogflowcxv3changelog";
/**
 * The response message for Changelogs.ListChangelogs.
 */
export declare class GoogleCloudDialogflowCxV3ListChangelogsResponse extends SpeakeasyBase {
    /**
     * The list of changelogs. There will be a maximum number of items returned based on the page_size field in the request. The changelogs will be ordered by timestamp.
     */
    changelogs?: GoogleCloudDialogflowCxV3Changelog[];
    /**
     * Token to retrieve the next page of results, or empty if there are no more results in the list.
     */
    nextPageToken?: string;
}
