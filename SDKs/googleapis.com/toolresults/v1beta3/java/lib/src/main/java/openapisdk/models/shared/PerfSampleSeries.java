package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * PerfSampleSeries
 * Resource representing a collection of performance samples (or data points)
**/
public class PerfSampleSeries {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("basicPerfSampleSeries")
    public BasicPerfSampleSeries basicPerfSampleSeries;
    public PerfSampleSeries withBasicPerfSampleSeries(BasicPerfSampleSeries basicPerfSampleSeries) {
        this.basicPerfSampleSeries = basicPerfSampleSeries;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("executionId")
    public String executionId;
    public PerfSampleSeries withExecutionId(String executionId) {
        this.executionId = executionId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("historyId")
    public String historyId;
    public PerfSampleSeries withHistoryId(String historyId) {
        this.historyId = historyId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("projectId")
    public String projectId;
    public PerfSampleSeries withProjectId(String projectId) {
        this.projectId = projectId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sampleSeriesId")
    public String sampleSeriesId;
    public PerfSampleSeries withSampleSeriesId(String sampleSeriesId) {
        this.sampleSeriesId = sampleSeriesId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("stepId")
    public String stepId;
    public PerfSampleSeries withStepId(String stepId) {
        this.stepId = stepId;
        return this;
    }
}