package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ApiUsageHistoryOut {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("detailedUsage")
    public ApiCounterV2Out[] detailedUsage;
    public ApiUsageHistoryOut withDetailedUsage(ApiCounterV2Out[] detailedUsage) {
        this.detailedUsage = detailedUsage;
        return this;
    }
}