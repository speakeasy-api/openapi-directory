package openapisdk.models.operations;



public class ToolresultsProjectsHistoriesExecutionsStepsPerfSampleSeriesSamplesListResponse {
    public String contentType;
    public ToolresultsProjectsHistoriesExecutionsStepsPerfSampleSeriesSamplesListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ListPerfSamplesResponse listPerfSamplesResponse;
    public ToolresultsProjectsHistoriesExecutionsStepsPerfSampleSeriesSamplesListResponse withListPerfSamplesResponse(openapisdk.models.shared.ListPerfSamplesResponse listPerfSamplesResponse) {
        this.listPerfSamplesResponse = listPerfSamplesResponse;
        return this;
    }
    public Long statusCode;
    public ToolresultsProjectsHistoriesExecutionsStepsPerfSampleSeriesSamplesListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}