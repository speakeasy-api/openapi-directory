package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class PutServersId200ApplicationJsonServerServerTypePrices {
    @JsonProperty("location")
    public String location;
    public PutServersId200ApplicationJsonServerServerTypePrices withLocation(String location) {
        this.location = location;
        return this;
    }
    @JsonProperty("price_hourly")
    public PutServersId200ApplicationJsonServerServerTypePricesPriceHourly priceHourly;
    public PutServersId200ApplicationJsonServerServerTypePrices withPriceHourly(PutServersId200ApplicationJsonServerServerTypePricesPriceHourly priceHourly) {
        this.priceHourly = priceHourly;
        return this;
    }
    @JsonProperty("price_monthly")
    public PutServersId200ApplicationJsonServerServerTypePricesPriceMonthly priceMonthly;
    public PutServersId200ApplicationJsonServerServerTypePrices withPriceMonthly(PutServersId200ApplicationJsonServerServerTypePricesPriceMonthly priceMonthly) {
        this.priceMonthly = priceMonthly;
        return this;
    }
}