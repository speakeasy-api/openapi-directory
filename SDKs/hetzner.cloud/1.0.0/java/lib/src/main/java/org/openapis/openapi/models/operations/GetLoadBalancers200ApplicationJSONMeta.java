/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GetLoadBalancers200ApplicationJSONMeta {
    @JsonProperty("pagination")
    public GetLoadBalancers200ApplicationJSONMetaPagination pagination;

    public GetLoadBalancers200ApplicationJSONMeta withPagination(GetLoadBalancers200ApplicationJSONMetaPagination pagination) {
        this.pagination = pagination;
        return this;
    }
    
    public GetLoadBalancers200ApplicationJSONMeta(@JsonProperty("pagination") GetLoadBalancers200ApplicationJSONMetaPagination pagination) {
        this.pagination = pagination;
  }
}
