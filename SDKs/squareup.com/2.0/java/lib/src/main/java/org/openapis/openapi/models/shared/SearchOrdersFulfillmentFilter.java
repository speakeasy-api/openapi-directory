/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * SearchOrdersFulfillmentFilter - Filter based on [order fulfillment](https://developer.squareup.com/reference/square_2021-08-18/objects/OrderFulfillment) information.
 */
public class SearchOrdersFulfillmentFilter {
    /**
     * A list of [fulfillment states](https://developer.squareup.com/reference/square_2021-08-18/objects/OrderFulfillmentState) to filter
     * for. The list returns orders if any of its fulfillments match any of the
     * fulfillment states listed in this field.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("fulfillment_states")
    public String[] fulfillmentStates;

    public SearchOrdersFulfillmentFilter withFulfillmentStates(String[] fulfillmentStates) {
        this.fulfillmentStates = fulfillmentStates;
        return this;
    }
    
    /**
     * A list of [fulfillment types](https://developer.squareup.com/reference/square_2021-08-18/enums/OrderFulfillmentType) to filter
     * for. The list returns orders if any of its fulfillments match any of the fulfillment types
     * listed in this field.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("fulfillment_types")
    public String[] fulfillmentTypes;

    public SearchOrdersFulfillmentFilter withFulfillmentTypes(String[] fulfillmentTypes) {
        this.fulfillmentTypes = fulfillmentTypes;
        return this;
    }
    
    public SearchOrdersFulfillmentFilter(){}
}
