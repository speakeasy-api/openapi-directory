/**
 * Specifies the nature of the success or failure of a webhook delivery
 *
 * @remarks
 * attempt to the subscribed webhook URL. The currently returned values are
 * described below:
 *
 * - **`DELIVERED`**: The event was delivered to the webhook URL
 *   successfully and a `200` response was received.
 * - **`UNDELIVERABLE`**: The webhook URL was not reachable, or timed out.
 * - **`BAD_RESPONSE_CODE`**: The event was delivered to the webhook URL
 *   but a non-`200` response was received.
 *
 */
export declare enum WebhookDeliveryStatusEnumEnum {
    Delivered = "DELIVERED",
    Undeliverable = "UNDELIVERABLE",
    BadResponseCode = "BAD_RESPONSE_CODE"
}
