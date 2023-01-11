package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GetPricing200ApplicationJsonPricingServerTypesPrices {
    @JsonProperty("location")
    public String location;
    public GetPricing200ApplicationJsonPricingServerTypesPrices withLocation(String location) {
        this.location = location;
        return this;
    }
    @JsonProperty("price_hourly")
    public GetPricing200ApplicationJsonPricingServerTypesPricesPriceHourly priceHourly;
    public GetPricing200ApplicationJsonPricingServerTypesPrices withPriceHourly(GetPricing200ApplicationJsonPricingServerTypesPricesPriceHourly priceHourly) {
        this.priceHourly = priceHourly;
        return this;
    }
    @JsonProperty("price_monthly")
    public GetPricing200ApplicationJsonPricingServerTypesPricesPriceMonthly priceMonthly;
    public GetPricing200ApplicationJsonPricingServerTypesPrices withPriceMonthly(GetPricing200ApplicationJsonPricingServerTypesPricesPriceMonthly priceMonthly) {
        this.priceMonthly = priceMonthly;
        return this;
    }
}