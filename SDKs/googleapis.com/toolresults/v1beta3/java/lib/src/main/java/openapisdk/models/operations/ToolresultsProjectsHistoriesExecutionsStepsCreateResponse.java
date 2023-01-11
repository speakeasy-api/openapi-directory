package openapisdk.models.operations;



public class ToolresultsProjectsHistoriesExecutionsStepsCreateResponse {
    public String contentType;
    public ToolresultsProjectsHistoriesExecutionsStepsCreateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ToolresultsProjectsHistoriesExecutionsStepsCreateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.Step step;
    public ToolresultsProjectsHistoriesExecutionsStepsCreateResponse withStep(openapisdk.models.shared.Step step) {
        this.step = step;
        return this;
    }
}