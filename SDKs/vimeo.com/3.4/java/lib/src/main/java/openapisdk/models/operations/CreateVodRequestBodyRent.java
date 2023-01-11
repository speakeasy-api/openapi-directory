package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateVodRequestBodyRent {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("active")
    public Boolean active;
    public CreateVodRequestBodyRent withActive(Boolean active) {
        this.active = active;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("period")
    public CreateVodRequestBodyRentPeriodEnum period;
    public CreateVodRequestBodyRent withPeriod(CreateVodRequestBodyRentPeriodEnum period) {
        this.period = period;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("price")
    public CreateVodRequestBodyRentPrice price;
    public CreateVodRequestBodyRent withPrice(CreateVodRequestBodyRentPrice price) {
        this.price = price;
        return this;
    }
}