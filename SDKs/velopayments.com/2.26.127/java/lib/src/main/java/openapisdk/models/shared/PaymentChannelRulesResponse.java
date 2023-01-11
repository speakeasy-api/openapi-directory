package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PaymentChannelRulesResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("bank")
    public PaymentChannelCountry[] bank;
    public PaymentChannelRulesResponse withBank(PaymentChannelCountry[] bank) {
        this.bank = bank;
        return this;
    }
}