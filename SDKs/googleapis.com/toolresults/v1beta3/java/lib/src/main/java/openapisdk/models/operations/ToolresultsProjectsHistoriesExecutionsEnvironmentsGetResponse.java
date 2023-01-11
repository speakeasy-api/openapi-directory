package openapisdk.models.operations;



public class ToolresultsProjectsHistoriesExecutionsEnvironmentsGetResponse {
    public String contentType;
    public ToolresultsProjectsHistoriesExecutionsEnvironmentsGetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Environment environment;
    public ToolresultsProjectsHistoriesExecutionsEnvironmentsGetResponse withEnvironment(openapisdk.models.shared.Environment environment) {
        this.environment = environment;
        return this;
    }
    public Long statusCode;
    public ToolresultsProjectsHistoriesExecutionsEnvironmentsGetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}