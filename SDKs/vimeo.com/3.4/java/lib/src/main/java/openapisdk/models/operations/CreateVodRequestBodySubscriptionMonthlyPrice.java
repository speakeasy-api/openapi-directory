package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateVodRequestBodySubscriptionMonthlyPrice {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("USD")
    public Double usd;
    public CreateVodRequestBodySubscriptionMonthlyPrice withUsd(Double usd) {
        this.usd = usd;
        return this;
    }
}