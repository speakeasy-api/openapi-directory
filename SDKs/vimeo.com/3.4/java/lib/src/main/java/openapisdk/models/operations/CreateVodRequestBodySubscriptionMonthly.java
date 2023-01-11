package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateVodRequestBodySubscriptionMonthly {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("active")
    public Boolean active;
    public CreateVodRequestBodySubscriptionMonthly withActive(Boolean active) {
        this.active = active;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("price")
    public CreateVodRequestBodySubscriptionMonthlyPrice price;
    public CreateVodRequestBodySubscriptionMonthly withPrice(CreateVodRequestBodySubscriptionMonthlyPrice price) {
        this.price = price;
        return this;
    }
}