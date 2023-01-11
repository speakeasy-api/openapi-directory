package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateVodAlt1RequestBodyEpisodesRent {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("active")
    public Boolean active;
    public CreateVodAlt1RequestBodyEpisodesRent withActive(Boolean active) {
        this.active = active;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("period")
    public CreateVodAlt1RequestBodyEpisodesRentPeriodEnum period;
    public CreateVodAlt1RequestBodyEpisodesRent withPeriod(CreateVodAlt1RequestBodyEpisodesRentPeriodEnum period) {
        this.period = period;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("price")
    public CreateVodAlt1RequestBodyEpisodesRentPrice price;
    public CreateVodAlt1RequestBodyEpisodesRent withPrice(CreateVodAlt1RequestBodyEpisodesRentPrice price) {
        this.price = price;
        return this;
    }
}