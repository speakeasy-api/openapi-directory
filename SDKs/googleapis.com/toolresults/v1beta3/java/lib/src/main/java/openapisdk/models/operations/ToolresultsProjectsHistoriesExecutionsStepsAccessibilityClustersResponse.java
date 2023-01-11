package openapisdk.models.operations;



public class ToolresultsProjectsHistoriesExecutionsStepsAccessibilityClustersResponse {
    public String contentType;
    public ToolresultsProjectsHistoriesExecutionsStepsAccessibilityClustersResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ListStepAccessibilityClustersResponse listStepAccessibilityClustersResponse;
    public ToolresultsProjectsHistoriesExecutionsStepsAccessibilityClustersResponse withListStepAccessibilityClustersResponse(openapisdk.models.shared.ListStepAccessibilityClustersResponse listStepAccessibilityClustersResponse) {
        this.listStepAccessibilityClustersResponse = listStepAccessibilityClustersResponse;
        return this;
    }
    public Long statusCode;
    public ToolresultsProjectsHistoriesExecutionsStepsAccessibilityClustersResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}