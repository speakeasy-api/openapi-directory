/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GetServers200ApplicationJSONServersServerTypePrices {
    /**
     * Name of the Location the price is for
     */
    @JsonProperty("location")
    public String location;

    public GetServers200ApplicationJSONServersServerTypePrices withLocation(String location) {
        this.location = location;
        return this;
    }
    
    /**
     * Hourly costs for a Server type in this Location
     */
    @JsonProperty("price_hourly")
    public GetServers200ApplicationJSONServersServerTypePricesPriceHourly priceHourly;

    public GetServers200ApplicationJSONServersServerTypePrices withPriceHourly(GetServers200ApplicationJSONServersServerTypePricesPriceHourly priceHourly) {
        this.priceHourly = priceHourly;
        return this;
    }
    
    /**
     * Monthly costs for a Server type in this Location
     */
    @JsonProperty("price_monthly")
    public GetServers200ApplicationJSONServersServerTypePricesPriceMonthly priceMonthly;

    public GetServers200ApplicationJSONServersServerTypePrices withPriceMonthly(GetServers200ApplicationJSONServersServerTypePricesPriceMonthly priceMonthly) {
        this.priceMonthly = priceMonthly;
        return this;
    }
    
    public GetServers200ApplicationJSONServersServerTypePrices(@JsonProperty("location") String location, @JsonProperty("price_hourly") GetServers200ApplicationJSONServersServerTypePricesPriceHourly priceHourly, @JsonProperty("price_monthly") GetServers200ApplicationJSONServersServerTypePricesPriceMonthly priceMonthly) {
        this.location = location;
        this.priceHourly = priceHourly;
        this.priceMonthly = priceMonthly;
  }
}
