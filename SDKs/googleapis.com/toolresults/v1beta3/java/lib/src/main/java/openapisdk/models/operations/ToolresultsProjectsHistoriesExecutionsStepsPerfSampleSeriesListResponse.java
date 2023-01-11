package openapisdk.models.operations;



public class ToolresultsProjectsHistoriesExecutionsStepsPerfSampleSeriesListResponse {
    public String contentType;
    public ToolresultsProjectsHistoriesExecutionsStepsPerfSampleSeriesListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ListPerfSampleSeriesResponse listPerfSampleSeriesResponse;
    public ToolresultsProjectsHistoriesExecutionsStepsPerfSampleSeriesListResponse withListPerfSampleSeriesResponse(openapisdk.models.shared.ListPerfSampleSeriesResponse listPerfSampleSeriesResponse) {
        this.listPerfSampleSeriesResponse = listPerfSampleSeriesResponse;
        return this;
    }
    public Long statusCode;
    public ToolresultsProjectsHistoriesExecutionsStepsPerfSampleSeriesListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}