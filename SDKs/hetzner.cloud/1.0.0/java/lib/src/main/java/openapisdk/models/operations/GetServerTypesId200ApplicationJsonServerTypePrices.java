package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GetServerTypesId200ApplicationJsonServerTypePrices {
    @JsonProperty("location")
    public String location;
    public GetServerTypesId200ApplicationJsonServerTypePrices withLocation(String location) {
        this.location = location;
        return this;
    }
    @JsonProperty("price_hourly")
    public GetServerTypesId200ApplicationJsonServerTypePricesPriceHourly priceHourly;
    public GetServerTypesId200ApplicationJsonServerTypePrices withPriceHourly(GetServerTypesId200ApplicationJsonServerTypePricesPriceHourly priceHourly) {
        this.priceHourly = priceHourly;
        return this;
    }
    @JsonProperty("price_monthly")
    public GetServerTypesId200ApplicationJsonServerTypePricesPriceMonthly priceMonthly;
    public GetServerTypesId200ApplicationJsonServerTypePrices withPriceMonthly(GetServerTypesId200ApplicationJsonServerTypePricesPriceMonthly priceMonthly) {
        this.priceMonthly = priceMonthly;
        return this;
    }
}