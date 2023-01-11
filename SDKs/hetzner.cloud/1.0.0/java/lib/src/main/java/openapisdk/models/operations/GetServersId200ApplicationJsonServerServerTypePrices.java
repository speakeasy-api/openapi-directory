package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GetServersId200ApplicationJsonServerServerTypePrices {
    @JsonProperty("location")
    public String location;
    public GetServersId200ApplicationJsonServerServerTypePrices withLocation(String location) {
        this.location = location;
        return this;
    }
    @JsonProperty("price_hourly")
    public GetServersId200ApplicationJsonServerServerTypePricesPriceHourly priceHourly;
    public GetServersId200ApplicationJsonServerServerTypePrices withPriceHourly(GetServersId200ApplicationJsonServerServerTypePricesPriceHourly priceHourly) {
        this.priceHourly = priceHourly;
        return this;
    }
    @JsonProperty("price_monthly")
    public GetServersId200ApplicationJsonServerServerTypePricesPriceMonthly priceMonthly;
    public GetServersId200ApplicationJsonServerServerTypePrices withPriceMonthly(GetServersId200ApplicationJsonServerServerTypePricesPriceMonthly priceMonthly) {
        this.priceMonthly = priceMonthly;
        return this;
    }
}