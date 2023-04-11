import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetSubscriptionsRequest extends SpeakeasyBase {
    /**
     * Limits on `time_created`, Marks the start of a range, optionally use `before` to set the end. Result output excludes the given timestamp.
     */
    after?: Date;
    /**
     * Limits directly on `id`. Marks the start of a range, optionally use `before_id` to set the end. Result output excludes the given `id` value. Please note that `id` is in chronological order.
     */
    afterId?: string;
    /**
     * Limits on `time_created`. Marks the end of a range, optionally use `after` to set the start. Result output excludes the given timestamp.
     */
    before?: string;
    /**
     * Limits directly on `id`. Marks the end of a range, optionally use `after_id` to set the start. Result output excludes the given `id` value. Please note that `id` is in chronological order.
     */
    beforeId?: string;
    /**
     * Filter based on the number of hours events are retained in the database.
     */
    databaseHoldTimeH?: number;
    /**
     * Filter based on the description.
     */
    description?: string;
    /**
     * Limits on `time_created`. Marks the start of a range, optionally use `until` to set the end. Result output includes the given timestamp.
     */
    from?: string;
    /**
     * Limits on `id`. Marks the start of a range, optionally use `until_id` to set the end. Result output includes the given `id` value. Please note that `id` is in chronological order.
     */
    fromId?: string;
    /**
     * Unique identifier
     */
    id?: string;
    /**
     * Removes `url` fields from output and shows `_id` instead of `_url` in references.
     */
    idOnly?: boolean;
    /**
     * Sets the maximum number of returned resources. You may increase this number to large values, keep in mind that query times could become large. We advise you to use the pagination feature whenever you can.
     */
    limit?: number;
    /**
     * Expand a reference into the actual resource (lookup). You may add multiple fields by giving a comma separated value.
     */
    populate?: string;
    /**
     * Filter based on subscriptions that populate the events
     */
    populateEvents?: boolean;
    /**
     * Removes response envelope with information about query, only sends back a JSON array with the applicable resources.
     */
    resultsOnly?: boolean;
    /**
     * Select which properties should be returned. You may add multiple fields by giving a comma separated value. Select can also be used together with populate: Specify the resource first, then a period(.) followed by the field.
     */
    select?: string;
    /**
     * Allows you to sort on on or more fields in the resource. You may append a minus sign (`-`) to request reverse order (new to old).
     */
    sort?: string;
    /**
     * Filter on the time the resource was created.
     */
    timeCreated?: string;
    /**
     * Filter on the time the resource was last updated
     */
    timeUpdated?: string;
    /**
     * Overrides the default query timeout (in seconds). A value of 0 means unlimited. IMPORTANT: using high timeouts in production code is strongly discouraged as it may lead to stability issues.
     */
    timeoutS?: number;
    /**
     * Filter on the topic filter. Make sure to use [percent-encoding](https://en.wikipedia.org/wiki/Percent-encoding) in the query parameter.
     */
    topicFilter?: string;
    /**
     * Limits on `time_created`. Marks the end of a range, optionally use `from` to set the start. Result output includes the given timestamp.
     */
    until?: string;
    /**
     * Limits on `id`. Marks the end of a range, optionally use `from_id` to set the start. Result output includes the given `id` value. Please note that `id` is in chronological order.
     */
    untilId?: string;
    /**
     * Filter on the verification of the target certificate.
     */
    verifyTargetCertificate?: boolean;
}
/**
 * A JSON object containing a list of subscriptions
 */
export declare class GetSubscriptions200ApplicationJSON extends SpeakeasyBase {
    /**
     * The maximum number of items in the response (as set in the query or by default).
     */
    count?: number;
    /**
     * The maximum number of items available to return.
     */
    countCurrent?: number;
    /**
     * Becomes false when the number of results is smaller than limit.
     */
    isLimited?: boolean;
    /**
     * URL to the next page of items. ( null if none)
     */
    nextUrl?: string;
    /**
     * Amount of time, in milliseconds, the request needed to complete.
     */
    queryDurationMs?: number;
    results?: shared.Subscription[];
    /**
     * Url to the individual resource.
     */
    url?: string;
}
export declare class GetSubscriptionsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * A JSON object containing a list of subscriptions
     */
    getSubscriptions200ApplicationJSONObject?: GetSubscriptions200ApplicationJSON;
}
