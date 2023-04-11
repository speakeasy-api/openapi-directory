import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetWebhooksWebhookIdLogsRequest extends SpeakeasyBase {
    /**
     * The number of records to return in each page.
     *
     * @remarks
     *
     */
    pageSize?: number;
    /**
     * The unique identifier for the webhook.
     *
     * @remarks
     *
     */
    webhookId: string;
}
export declare class GetWebhooksWebhookIdLogsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Successful response
     */
    listWebhookDeliveryLogsResponse?: shared.ListWebhookDeliveryLogsResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
