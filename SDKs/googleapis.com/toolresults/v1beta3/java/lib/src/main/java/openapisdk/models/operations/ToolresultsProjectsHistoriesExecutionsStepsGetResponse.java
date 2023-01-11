package openapisdk.models.operations;



public class ToolresultsProjectsHistoriesExecutionsStepsGetResponse {
    public String contentType;
    public ToolresultsProjectsHistoriesExecutionsStepsGetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ToolresultsProjectsHistoriesExecutionsStepsGetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.Step step;
    public ToolresultsProjectsHistoriesExecutionsStepsGetResponse withStep(openapisdk.models.shared.Step step) {
        this.step = step;
        return this;
    }
}