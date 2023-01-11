package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class PaymentChannelCountry {
    @JsonProperty("isoCountryCode")
    public String isoCountryCode;
    public PaymentChannelCountry withIsoCountryCode(String isoCountryCode) {
        this.isoCountryCode = isoCountryCode;
        return this;
    }
    @JsonProperty("rules")
    public PaymentChannelRule[] rules;
    public PaymentChannelCountry withRules(PaymentChannelRule[] rules) {
        this.rules = rules;
        return this;
    }
}