package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DoubleVerifyFraudInvalidTraffic
 * DoubleVerify Fraud & Invalid Traffic settings.
**/
public class DoubleVerifyFraudInvalidTraffic {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("avoidInsufficientOption")
    public Boolean avoidInsufficientOption;
    public DoubleVerifyFraudInvalidTraffic withAvoidInsufficientOption(Boolean avoidInsufficientOption) {
        this.avoidInsufficientOption = avoidInsufficientOption;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("avoidedFraudOption")
    public DoubleVerifyFraudInvalidTrafficAvoidedFraudOptionEnum avoidedFraudOption;
    public DoubleVerifyFraudInvalidTraffic withAvoidedFraudOption(DoubleVerifyFraudInvalidTrafficAvoidedFraudOptionEnum avoidedFraudOption) {
        this.avoidedFraudOption = avoidedFraudOption;
        return this;
    }
}