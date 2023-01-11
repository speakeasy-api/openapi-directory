package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateVodRequestBodyEpisodesRent {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("active")
    public Boolean active;
    public CreateVodRequestBodyEpisodesRent withActive(Boolean active) {
        this.active = active;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("period")
    public CreateVodRequestBodyEpisodesRentPeriodEnum period;
    public CreateVodRequestBodyEpisodesRent withPeriod(CreateVodRequestBodyEpisodesRentPeriodEnum period) {
        this.period = period;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("price")
    public CreateVodRequestBodyEpisodesRentPrice price;
    public CreateVodRequestBodyEpisodesRent withPrice(CreateVodRequestBodyEpisodesRentPrice price) {
        this.price = price;
        return this;
    }
}