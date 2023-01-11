package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetApiV2ListMarkets200ApplicationJsonData {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("all")
    public String[] all;
    public GetApiV2ListMarkets200ApplicationJsonData withAll(String[] all) {
        this.all = all;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("allowed_for_your_subscription")
    public String[] allowedForYourSubscription;
    public GetApiV2ListMarkets200ApplicationJsonData withAllowedForYourSubscription(String[] allowedForYourSubscription) {
        this.allowedForYourSubscription = allowedForYourSubscription;
        return this;
    }
}