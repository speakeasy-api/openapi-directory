package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ReplicatingStep
 * ReplicatingStep contains specific step details.
**/
public class ReplicatingStep {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("lastThirtyMinutesAverageBytesPerSecond")
    public String lastThirtyMinutesAverageBytesPerSecond;
    public ReplicatingStep withLastThirtyMinutesAverageBytesPerSecond(String lastThirtyMinutesAverageBytesPerSecond) {
        this.lastThirtyMinutesAverageBytesPerSecond = lastThirtyMinutesAverageBytesPerSecond;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("lastTwoMinutesAverageBytesPerSecond")
    public String lastTwoMinutesAverageBytesPerSecond;
    public ReplicatingStep withLastTwoMinutesAverageBytesPerSecond(String lastTwoMinutesAverageBytesPerSecond) {
        this.lastTwoMinutesAverageBytesPerSecond = lastTwoMinutesAverageBytesPerSecond;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("replicatedBytes")
    public String replicatedBytes;
    public ReplicatingStep withReplicatedBytes(String replicatedBytes) {
        this.replicatedBytes = replicatedBytes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("totalBytes")
    public String totalBytes;
    public ReplicatingStep withTotalBytes(String totalBytes) {
        this.totalBytes = totalBytes;
        return this;
    }
}