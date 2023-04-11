import { SpeakeasyBase } from "../../../internal/utils";
import { WebhookDeliveryLogResource } from "./webhookdeliverylogresource";
export declare class ListWebhookDeliveryLogsResponseLinks extends SpeakeasyBase {
    /**
     * The link to the next page in the results. If this value is `null`
     *
     * @remarks
     * there is no next page.
     *
     */
    next: string;
    /**
     * The link to the previous page in the results. If this value is `null`
     *
     * @remarks
     * there is no previous page.
     *
     */
    prev: string;
}
/**
 * Successful response to get all delivery logs for a webhook. This returns
 *
 * @remarks
 * a paginated list of delivery logs, which can be scrolled by following the
 * `next` and `prev` links if present.
 *
 */
export declare class ListWebhookDeliveryLogsResponse extends SpeakeasyBase {
    /**
     * The list of delivery logs returned in this response.
     *
     * @remarks
     *
     */
    data: WebhookDeliveryLogResource[];
    links: ListWebhookDeliveryLogsResponseLinks;
}
