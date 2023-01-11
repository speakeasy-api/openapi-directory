package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudPolicysimulatorV1ReplayResultsSummary
 * Summary statistics about the replayed log entries.
**/
public class GoogleCloudPolicysimulatorV1ReplayResultsSummary {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("differenceCount")
    public Integer differenceCount;
    public GoogleCloudPolicysimulatorV1ReplayResultsSummary withDifferenceCount(Integer differenceCount) {
        this.differenceCount = differenceCount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("errorCount")
    public Integer errorCount;
    public GoogleCloudPolicysimulatorV1ReplayResultsSummary withErrorCount(Integer errorCount) {
        this.errorCount = errorCount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("logCount")
    public Integer logCount;
    public GoogleCloudPolicysimulatorV1ReplayResultsSummary withLogCount(Integer logCount) {
        this.logCount = logCount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("newestDate")
    public GoogleTypeDate newestDate;
    public GoogleCloudPolicysimulatorV1ReplayResultsSummary withNewestDate(GoogleTypeDate newestDate) {
        this.newestDate = newestDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("oldestDate")
    public GoogleTypeDate oldestDate;
    public GoogleCloudPolicysimulatorV1ReplayResultsSummary withOldestDate(GoogleTypeDate oldestDate) {
        this.oldestDate = oldestDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("unchangedCount")
    public Integer unchangedCount;
    public GoogleCloudPolicysimulatorV1ReplayResultsSummary withUnchangedCount(Integer unchangedCount) {
        this.unchangedCount = unchangedCount;
        return this;
    }
}