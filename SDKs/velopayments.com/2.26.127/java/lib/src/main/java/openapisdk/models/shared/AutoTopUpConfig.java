package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class AutoTopUpConfig {
    @JsonProperty("enabled")
    public Boolean enabled;
    public AutoTopUpConfig withEnabled(Boolean enabled) {
        this.enabled = enabled;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("minBalance")
    public Long minBalance;
    public AutoTopUpConfig withMinBalance(Long minBalance) {
        this.minBalance = minBalance;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("targetBalance")
    public Long targetBalance;
    public AutoTopUpConfig withTargetBalance(Long targetBalance) {
        this.targetBalance = targetBalance;
        return this;
    }
}