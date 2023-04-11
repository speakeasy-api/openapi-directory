import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowCxV3Webhook } from "./googleclouddialogflowcxv3webhook";
/**
 * The response message for Webhooks.ListWebhooks.
 */
export declare class GoogleCloudDialogflowCxV3ListWebhooksResponse extends SpeakeasyBase {
    /**
     * Token to retrieve the next page of results, or empty if there are no more results in the list.
     */
    nextPageToken?: string;
    /**
     * The list of webhooks. There will be a maximum number of items returned based on the page_size field in the request.
     */
    webhooks?: GoogleCloudDialogflowCxV3Webhook[];
}
