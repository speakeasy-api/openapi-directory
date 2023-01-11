package openapisdk.models.operations;



public class ToolresultsProjectsHistoriesExecutionsEnvironmentsListResponse {
    public String contentType;
    public ToolresultsProjectsHistoriesExecutionsEnvironmentsListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ListEnvironmentsResponse listEnvironmentsResponse;
    public ToolresultsProjectsHistoriesExecutionsEnvironmentsListResponse withListEnvironmentsResponse(openapisdk.models.shared.ListEnvironmentsResponse listEnvironmentsResponse) {
        this.listEnvironmentsResponse = listEnvironmentsResponse;
        return this;
    }
    public Long statusCode;
    public ToolresultsProjectsHistoriesExecutionsEnvironmentsListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}