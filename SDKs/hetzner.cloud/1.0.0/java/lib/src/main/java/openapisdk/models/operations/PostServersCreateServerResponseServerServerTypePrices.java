package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class PostServersCreateServerResponseServerServerTypePrices {
    @JsonProperty("location")
    public String location;
    public PostServersCreateServerResponseServerServerTypePrices withLocation(String location) {
        this.location = location;
        return this;
    }
    @JsonProperty("price_hourly")
    public PostServersCreateServerResponseServerServerTypePricesPriceHourly priceHourly;
    public PostServersCreateServerResponseServerServerTypePrices withPriceHourly(PostServersCreateServerResponseServerServerTypePricesPriceHourly priceHourly) {
        this.priceHourly = priceHourly;
        return this;
    }
    @JsonProperty("price_monthly")
    public PostServersCreateServerResponseServerServerTypePricesPriceMonthly priceMonthly;
    public PostServersCreateServerResponseServerServerTypePrices withPriceMonthly(PostServersCreateServerResponseServerServerTypePricesPriceMonthly priceMonthly) {
        this.priceMonthly = priceMonthly;
        return this;
    }
}