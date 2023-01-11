package openapisdk.models.operations;



public class ToolresultsProjectsHistoriesExecutionsStepsPerfSampleSeriesCreateResponse {
    public String contentType;
    public ToolresultsProjectsHistoriesExecutionsStepsPerfSampleSeriesCreateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.PerfSampleSeries perfSampleSeries;
    public ToolresultsProjectsHistoriesExecutionsStepsPerfSampleSeriesCreateResponse withPerfSampleSeries(openapisdk.models.shared.PerfSampleSeries perfSampleSeries) {
        this.perfSampleSeries = perfSampleSeries;
        return this;
    }
    public Long statusCode;
    public ToolresultsProjectsHistoriesExecutionsStepsPerfSampleSeriesCreateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}