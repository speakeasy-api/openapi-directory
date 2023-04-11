import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetOrganizationWebhooksLogsRequest extends SpeakeasyBase {
    /**
     * A token used by the server to indicate the end of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it.
     */
    endingBefore?: string;
    organizationId: string;
    /**
     * The number of entries per page returned. Acceptable range is 3 - 1000. Default is 50.
     */
    perPage?: number;
    /**
     * A token used by the server to indicate the start of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it.
     */
    startingAfter?: string;
    /**
     * The beginning of the timespan for the data. The maximum lookback period is 90 days from today.
     */
    t0?: string;
    /**
     * The end of the timespan for the data. t1 can be a maximum of 31 days after t0.
     */
    t1?: string;
    /**
     * The timespan for which the information will be fetched. If specifying timespan, do not specify parameters t0 and t1. The value must be in seconds and be less than or equal to 31 days. The default is 1 day.
     */
    timespan?: number;
    /**
     * The URL the webhook was sent to
     */
    url?: string;
}
export declare class GetOrganizationWebhooksLogs200ApplicationJSON extends SpeakeasyBase {
    /**
     * Type of alert that the webhook is delivering
     */
    alertType?: string;
    /**
     * When the webhook log was created, in ISO8601 format
     */
    loggedAt?: Date;
    /**
     * Network ID for the webhook log
     */
    networkId?: string;
    /**
     * ID for the webhook log's organization
     */
    organizationId?: string;
    /**
     * Response code from the webhook
     */
    responseCode?: number;
    /**
     * Duration of the response, in milliseconds
     */
    responseDuration?: number;
    /**
     * When the webhook was sent, in ISO8601 format
     */
    sentAt?: Date;
    /**
     * URL where the webhook was sent
     */
    url?: string;
}
export declare class GetOrganizationWebhooksLogsResponse extends SpeakeasyBase {
    contentType: string;
    headers?: Record<string, string[]>;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful operation
     */
    getOrganizationWebhooksLogs200ApplicationJSONObjects?: GetOrganizationWebhooksLogs200ApplicationJSON[];
}
