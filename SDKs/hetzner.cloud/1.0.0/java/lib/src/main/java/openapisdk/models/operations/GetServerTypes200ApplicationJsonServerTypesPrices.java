package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GetServerTypes200ApplicationJsonServerTypesPrices {
    @JsonProperty("location")
    public String location;
    public GetServerTypes200ApplicationJsonServerTypesPrices withLocation(String location) {
        this.location = location;
        return this;
    }
    @JsonProperty("price_hourly")
    public GetServerTypes200ApplicationJsonServerTypesPricesPriceHourly priceHourly;
    public GetServerTypes200ApplicationJsonServerTypesPrices withPriceHourly(GetServerTypes200ApplicationJsonServerTypesPricesPriceHourly priceHourly) {
        this.priceHourly = priceHourly;
        return this;
    }
    @JsonProperty("price_monthly")
    public GetServerTypes200ApplicationJsonServerTypesPricesPriceMonthly priceMonthly;
    public GetServerTypes200ApplicationJsonServerTypesPrices withPriceMonthly(GetServerTypes200ApplicationJsonServerTypesPricesPriceMonthly priceMonthly) {
        this.priceMonthly = priceMonthly;
        return this;
    }
}