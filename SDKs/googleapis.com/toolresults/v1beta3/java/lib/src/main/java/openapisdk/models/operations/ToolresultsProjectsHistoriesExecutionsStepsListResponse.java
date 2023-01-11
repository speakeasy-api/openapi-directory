package openapisdk.models.operations;



public class ToolresultsProjectsHistoriesExecutionsStepsListResponse {
    public String contentType;
    public ToolresultsProjectsHistoriesExecutionsStepsListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ListStepsResponse listStepsResponse;
    public ToolresultsProjectsHistoriesExecutionsStepsListResponse withListStepsResponse(openapisdk.models.shared.ListStepsResponse listStepsResponse) {
        this.listStepsResponse = listStepsResponse;
        return this;
    }
    public Long statusCode;
    public ToolresultsProjectsHistoriesExecutionsStepsListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}