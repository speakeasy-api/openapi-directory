package openapisdk.models.operations;



public class ToolresultsProjectsHistoriesExecutionsStepsPerfSampleSeriesGetResponse {
    public String contentType;
    public ToolresultsProjectsHistoriesExecutionsStepsPerfSampleSeriesGetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.PerfSampleSeries perfSampleSeries;
    public ToolresultsProjectsHistoriesExecutionsStepsPerfSampleSeriesGetResponse withPerfSampleSeries(openapisdk.models.shared.PerfSampleSeries perfSampleSeries) {
        this.perfSampleSeries = perfSampleSeries;
        return this;
    }
    public Long statusCode;
    public ToolresultsProjectsHistoriesExecutionsStepsPerfSampleSeriesGetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}