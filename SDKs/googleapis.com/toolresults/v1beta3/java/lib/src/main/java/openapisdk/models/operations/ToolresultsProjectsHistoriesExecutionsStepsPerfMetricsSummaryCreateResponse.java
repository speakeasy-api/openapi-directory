package openapisdk.models.operations;



public class ToolresultsProjectsHistoriesExecutionsStepsPerfMetricsSummaryCreateResponse {
    public String contentType;
    public ToolresultsProjectsHistoriesExecutionsStepsPerfMetricsSummaryCreateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.PerfMetricsSummary perfMetricsSummary;
    public ToolresultsProjectsHistoriesExecutionsStepsPerfMetricsSummaryCreateResponse withPerfMetricsSummary(openapisdk.models.shared.PerfMetricsSummary perfMetricsSummary) {
        this.perfMetricsSummary = perfMetricsSummary;
        return this;
    }
    public Long statusCode;
    public ToolresultsProjectsHistoriesExecutionsStepsPerfMetricsSummaryCreateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}