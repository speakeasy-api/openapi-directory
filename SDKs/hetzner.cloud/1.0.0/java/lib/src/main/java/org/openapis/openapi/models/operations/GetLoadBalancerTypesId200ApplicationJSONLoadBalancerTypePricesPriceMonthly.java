/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * GetLoadBalancerTypesId200ApplicationJSONLoadBalancerTypePricesPriceMonthly - Monthly costs for a Resource in this Location
 */
public class GetLoadBalancerTypesId200ApplicationJSONLoadBalancerTypePricesPriceMonthly {
    /**
     * Price with VAT added
     */
    @JsonProperty("gross")
    public String gross;

    public GetLoadBalancerTypesId200ApplicationJSONLoadBalancerTypePricesPriceMonthly withGross(String gross) {
        this.gross = gross;
        return this;
    }
    
    /**
     * Price without VAT
     */
    @JsonProperty("net")
    public String net;

    public GetLoadBalancerTypesId200ApplicationJSONLoadBalancerTypePricesPriceMonthly withNet(String net) {
        this.net = net;
        return this;
    }
    
    public GetLoadBalancerTypesId200ApplicationJSONLoadBalancerTypePricesPriceMonthly(@JsonProperty("gross") String gross, @JsonProperty("net") String net) {
        this.gross = gross;
        this.net = net;
  }
}
