package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GetServers200ApplicationJsonServersServerTypePrices {
    @JsonProperty("location")
    public String location;
    public GetServers200ApplicationJsonServersServerTypePrices withLocation(String location) {
        this.location = location;
        return this;
    }
    @JsonProperty("price_hourly")
    public GetServers200ApplicationJsonServersServerTypePricesPriceHourly priceHourly;
    public GetServers200ApplicationJsonServersServerTypePrices withPriceHourly(GetServers200ApplicationJsonServersServerTypePricesPriceHourly priceHourly) {
        this.priceHourly = priceHourly;
        return this;
    }
    @JsonProperty("price_monthly")
    public GetServers200ApplicationJsonServersServerTypePricesPriceMonthly priceMonthly;
    public GetServers200ApplicationJsonServersServerTypePrices withPriceMonthly(GetServers200ApplicationJsonServersServerTypePricesPriceMonthly priceMonthly) {
        this.priceMonthly = priceMonthly;
        return this;
    }
}