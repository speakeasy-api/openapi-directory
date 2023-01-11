package openapisdk.models.operations;



public class ToolresultsProjectsHistoriesExecutionsStepsTestCasesListResponse {
    public String contentType;
    public ToolresultsProjectsHistoriesExecutionsStepsTestCasesListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ListTestCasesResponse listTestCasesResponse;
    public ToolresultsProjectsHistoriesExecutionsStepsTestCasesListResponse withListTestCasesResponse(openapisdk.models.shared.ListTestCasesResponse listTestCasesResponse) {
        this.listTestCasesResponse = listTestCasesResponse;
        return this;
    }
    public Long statusCode;
    public ToolresultsProjectsHistoriesExecutionsStepsTestCasesListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}