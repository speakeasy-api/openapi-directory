import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowV2beta1Version } from "./googleclouddialogflowv2beta1version";
/**
 * The response message for Versions.ListVersions.
 */
export declare class GoogleCloudDialogflowV2beta1ListVersionsResponse extends SpeakeasyBase {
    /**
     * Token to retrieve the next page of results, or empty if there are no more results in the list.
     */
    nextPageToken?: string;
    /**
     * The list of agent versions. There will be a maximum number of items returned based on the page_size field in the request.
     */
    versions?: GoogleCloudDialogflowV2beta1Version[];
}
