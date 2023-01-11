package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * PerfMetricsSummary
 * A summary of perf metrics collected and performance environment info
**/
public class PerfMetricsSummary {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("appStartTime")
    public AppStartTime appStartTime;
    public PerfMetricsSummary withAppStartTime(AppStartTime appStartTime) {
        this.appStartTime = appStartTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("executionId")
    public String executionId;
    public PerfMetricsSummary withExecutionId(String executionId) {
        this.executionId = executionId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("graphicsStats")
    public GraphicsStats graphicsStats;
    public PerfMetricsSummary withGraphicsStats(GraphicsStats graphicsStats) {
        this.graphicsStats = graphicsStats;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("historyId")
    public String historyId;
    public PerfMetricsSummary withHistoryId(String historyId) {
        this.historyId = historyId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("perfEnvironment")
    public PerfEnvironment perfEnvironment;
    public PerfMetricsSummary withPerfEnvironment(PerfEnvironment perfEnvironment) {
        this.perfEnvironment = perfEnvironment;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("perfMetrics")
    public PerfMetricsSummaryPerfMetricsEnum[] perfMetrics;
    public PerfMetricsSummary withPerfMetrics(PerfMetricsSummaryPerfMetricsEnum[] perfMetrics) {
        this.perfMetrics = perfMetrics;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("projectId")
    public String projectId;
    public PerfMetricsSummary withProjectId(String projectId) {
        this.projectId = projectId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("stepId")
    public String stepId;
    public PerfMetricsSummary withStepId(String stepId) {
        this.stepId = stepId;
        return this;
    }
}