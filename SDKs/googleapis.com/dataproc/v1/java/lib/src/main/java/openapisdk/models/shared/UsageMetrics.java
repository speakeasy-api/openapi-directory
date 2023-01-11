package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * UsageMetrics
 * Usage metrics represent approximate total resources consumed by a workload.
**/
public class UsageMetrics {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("milliDcuSeconds")
    public String milliDcuSeconds;
    public UsageMetrics withMilliDcuSeconds(String milliDcuSeconds) {
        this.milliDcuSeconds = milliDcuSeconds;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("shuffleStorageGbSeconds")
    public String shuffleStorageGbSeconds;
    public UsageMetrics withShuffleStorageGbSeconds(String shuffleStorageGbSeconds) {
        this.shuffleStorageGbSeconds = shuffleStorageGbSeconds;
        return this;
    }
}