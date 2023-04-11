import { SpeakeasyBase } from "../../../internal/utils";
import { WebhookResource } from "./webhookresource";
export declare class ListWebhooksResponseLinks extends SpeakeasyBase {
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
 * Successful response to get all webhooks. This returns a paginated list of
 *
 * @remarks
 * webhooks, which can be scrolled by following the `prev` and `next` links
 * if present.
 *
 */
export declare class ListWebhooksResponse extends SpeakeasyBase {
    /**
     * The list of webhooks returned in this response.
     *
     * @remarks
     *
     */
    data: WebhookResource[];
    links: ListWebhooksResponseLinks;
}
