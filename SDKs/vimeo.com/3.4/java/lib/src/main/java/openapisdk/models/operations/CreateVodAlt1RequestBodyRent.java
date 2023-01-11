package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateVodAlt1RequestBodyRent {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("active")
    public Boolean active;
    public CreateVodAlt1RequestBodyRent withActive(Boolean active) {
        this.active = active;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("period")
    public CreateVodAlt1RequestBodyRentPeriodEnum period;
    public CreateVodAlt1RequestBodyRent withPeriod(CreateVodAlt1RequestBodyRentPeriodEnum period) {
        this.period = period;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("price")
    public CreateVodAlt1RequestBodyRentPrice price;
    public CreateVodAlt1RequestBodyRent withPrice(CreateVodAlt1RequestBodyRentPrice price) {
        this.price = price;
        return this;
    }
}