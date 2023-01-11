package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateVodAlt1RequestBodySubscriptionMonthly {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("active")
    public Boolean active;
    public CreateVodAlt1RequestBodySubscriptionMonthly withActive(Boolean active) {
        this.active = active;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("price")
    public CreateVodAlt1RequestBodySubscriptionMonthlyPrice price;
    public CreateVodAlt1RequestBodySubscriptionMonthly withPrice(CreateVodAlt1RequestBodySubscriptionMonthlyPrice price) {
        this.price = price;
        return this;
    }
}