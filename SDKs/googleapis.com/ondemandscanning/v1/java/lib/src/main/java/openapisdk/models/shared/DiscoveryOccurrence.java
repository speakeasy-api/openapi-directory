package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DiscoveryOccurrence
 * Provides information about the analysis status of a discovered resource.
**/
public class DiscoveryOccurrence {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("analysisCompleted")
    public AnalysisCompleted analysisCompleted;
    public DiscoveryOccurrence withAnalysisCompleted(AnalysisCompleted analysisCompleted) {
        this.analysisCompleted = analysisCompleted;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("analysisError")
    public Status[] analysisError;
    public DiscoveryOccurrence withAnalysisError(Status[] analysisError) {
        this.analysisError = analysisError;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("analysisStatus")
    public DiscoveryOccurrenceAnalysisStatusEnum analysisStatus;
    public DiscoveryOccurrence withAnalysisStatus(DiscoveryOccurrenceAnalysisStatusEnum analysisStatus) {
        this.analysisStatus = analysisStatus;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("analysisStatusError")
    public Status analysisStatusError;
    public DiscoveryOccurrence withAnalysisStatusError(Status analysisStatusError) {
        this.analysisStatusError = analysisStatusError;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("archiveTime")
    public String archiveTime;
    public DiscoveryOccurrence withArchiveTime(String archiveTime) {
        this.archiveTime = archiveTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("continuousAnalysis")
    public DiscoveryOccurrenceContinuousAnalysisEnum continuousAnalysis;
    public DiscoveryOccurrence withContinuousAnalysis(DiscoveryOccurrenceContinuousAnalysisEnum continuousAnalysis) {
        this.continuousAnalysis = continuousAnalysis;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cpe")
    public String cpe;
    public DiscoveryOccurrence withCpe(String cpe) {
        this.cpe = cpe;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("lastScanTime")
    public String lastScanTime;
    public DiscoveryOccurrence withLastScanTime(String lastScanTime) {
        this.lastScanTime = lastScanTime;
        return this;
    }
}