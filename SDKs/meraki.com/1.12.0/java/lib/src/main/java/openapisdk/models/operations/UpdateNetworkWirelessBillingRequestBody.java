package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdateNetworkWirelessBillingRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("currency")
    public String currency;
    public UpdateNetworkWirelessBillingRequestBody withCurrency(String currency) {
        this.currency = currency;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("plans")
    public UpdateNetworkWirelessBillingRequestBodyPlans[] plans;
    public UpdateNetworkWirelessBillingRequestBody withPlans(UpdateNetworkWirelessBillingRequestBodyPlans[] plans) {
        this.plans = plans;
        return this;
    }
}