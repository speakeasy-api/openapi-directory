package openapisdk.models.operations;



public class ToolresultsProjectsHistoriesExecutionsStepsGetPerfMetricsSummaryResponse {
    public String contentType;
    public ToolresultsProjectsHistoriesExecutionsStepsGetPerfMetricsSummaryResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.PerfMetricsSummary perfMetricsSummary;
    public ToolresultsProjectsHistoriesExecutionsStepsGetPerfMetricsSummaryResponse withPerfMetricsSummary(openapisdk.models.shared.PerfMetricsSummary perfMetricsSummary) {
        this.perfMetricsSummary = perfMetricsSummary;
        return this;
    }
    public Long statusCode;
    public ToolresultsProjectsHistoriesExecutionsStepsGetPerfMetricsSummaryResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}