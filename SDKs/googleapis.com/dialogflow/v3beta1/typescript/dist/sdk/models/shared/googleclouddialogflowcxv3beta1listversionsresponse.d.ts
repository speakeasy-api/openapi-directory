import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowCxV3beta1Version } from "./googleclouddialogflowcxv3beta1version";
/**
 * The response message for Versions.ListVersions.
 */
export declare class GoogleCloudDialogflowCxV3beta1ListVersionsResponse extends SpeakeasyBase {
    /**
     * Token to retrieve the next page of results, or empty if there are no more results in the list.
     */
    nextPageToken?: string;
    /**
     * A list of versions. There will be a maximum number of items returned based on the page_size field in the request. The list may in some cases be empty or contain fewer entries than page_size even if this isn't the last page.
     */
    versions?: GoogleCloudDialogflowCxV3beta1Version[];
}
