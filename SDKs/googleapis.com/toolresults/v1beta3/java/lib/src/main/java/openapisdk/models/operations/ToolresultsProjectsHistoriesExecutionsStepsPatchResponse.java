package openapisdk.models.operations;



public class ToolresultsProjectsHistoriesExecutionsStepsPatchResponse {
    public String contentType;
    public ToolresultsProjectsHistoriesExecutionsStepsPatchResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ToolresultsProjectsHistoriesExecutionsStepsPatchResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.Step step;
    public ToolresultsProjectsHistoriesExecutionsStepsPatchResponse withStep(openapisdk.models.shared.Step step) {
        this.step = step;
        return this;
    }
}