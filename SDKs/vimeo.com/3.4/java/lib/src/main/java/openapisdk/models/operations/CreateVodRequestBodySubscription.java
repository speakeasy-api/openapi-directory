package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateVodRequestBodySubscription {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("monthly")
    public CreateVodRequestBodySubscriptionMonthly monthly;
    public CreateVodRequestBodySubscription withMonthly(CreateVodRequestBodySubscriptionMonthly monthly) {
        this.monthly = monthly;
        return this;
    }
}