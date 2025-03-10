/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * ListHostedNumbersDependentHostedNumberOrderListHostedNumbersDependentHostedNumberOrderResponse - OK
 */
public class ListHostedNumbersDependentHostedNumberOrderListHostedNumbersDependentHostedNumberOrderResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("items")
    public org.openapis.openapi.models.shared.PreviewHostedNumbersAuthorizationDocumentDependentHostedNumberOrder[] items;

    public ListHostedNumbersDependentHostedNumberOrderListHostedNumbersDependentHostedNumberOrderResponse withItems(org.openapis.openapi.models.shared.PreviewHostedNumbersAuthorizationDocumentDependentHostedNumberOrder[] items) {
        this.items = items;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("meta")
    public ListHostedNumbersDependentHostedNumberOrderListHostedNumbersDependentHostedNumberOrderResponseMeta meta;

    public ListHostedNumbersDependentHostedNumberOrderListHostedNumbersDependentHostedNumberOrderResponse withMeta(ListHostedNumbersDependentHostedNumberOrderListHostedNumbersDependentHostedNumberOrderResponseMeta meta) {
        this.meta = meta;
        return this;
    }
    
    public ListHostedNumbersDependentHostedNumberOrderListHostedNumbersDependentHostedNumberOrderResponse(){}
}
