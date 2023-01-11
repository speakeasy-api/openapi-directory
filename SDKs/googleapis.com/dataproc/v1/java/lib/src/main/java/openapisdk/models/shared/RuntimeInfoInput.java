package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * RuntimeInfoInput
 * Runtime information about workload execution.
**/
public class RuntimeInfoInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("approximateUsage")
    public UsageMetrics approximateUsage;
    public RuntimeInfoInput withApproximateUsage(UsageMetrics approximateUsage) {
        this.approximateUsage = approximateUsage;
        return this;
    }
}