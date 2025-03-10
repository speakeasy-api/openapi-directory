/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * ListSubscriptionEventsResponse - Defines the fields that are included in the response from the
 * [ListSubscriptionEvents](https://developer.squareup.com/reference/square_2021-08-18/subscriptions-api/list-subscription-events)
 * endpoint.
 */
public class ListSubscriptionEventsResponse {
    /**
     * When a response is truncated, it includes a cursor that you can
     * use in a subsequent request to fetch the next set of events.
     * If empty, this is the final response.
     * 
     * For more information, see [Pagination](https://developer.squareup.com/docs/working-with-apis/pagination).
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cursor")
    public String cursor;

    public ListSubscriptionEventsResponse withCursor(String cursor) {
        this.cursor = cursor;
        return this;
    }
    
    /**
     * Information about errors encountered during the request.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("errors")
    public Error[] errors;

    public ListSubscriptionEventsResponse withErrors(Error[] errors) {
        this.errors = errors;
        return this;
    }
    
    /**
     * The `SubscriptionEvents` retrieved.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("subscription_events")
    public SubscriptionEvent[] subscriptionEvents;

    public ListSubscriptionEventsResponse withSubscriptionEvents(SubscriptionEvent[] subscriptionEvents) {
        this.subscriptionEvents = subscriptionEvents;
        return this;
    }
    
    public ListSubscriptionEventsResponse(){}
}
