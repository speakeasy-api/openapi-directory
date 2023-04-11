import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowV2Environment } from "./googleclouddialogflowv2environment";
/**
 * The response message for Environments.ListEnvironments.
 */
export declare class GoogleCloudDialogflowV2ListEnvironmentsResponse extends SpeakeasyBase {
    /**
     * The list of agent environments. There will be a maximum number of items returned based on the page_size field in the request.
     */
    environments?: GoogleCloudDialogflowV2Environment[];
    /**
     * Token to retrieve the next page of results, or empty if there are no more results in the list.
     */
    nextPageToken?: string;
}
