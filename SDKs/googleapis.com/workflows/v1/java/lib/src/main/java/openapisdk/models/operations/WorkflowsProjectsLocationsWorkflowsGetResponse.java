package openapisdk.models.operations;



public class WorkflowsProjectsLocationsWorkflowsGetResponse {
    public String contentType;
    public WorkflowsProjectsLocationsWorkflowsGetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public WorkflowsProjectsLocationsWorkflowsGetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.Workflow workflow;
    public WorkflowsProjectsLocationsWorkflowsGetResponse withWorkflow(openapisdk.models.shared.Workflow workflow) {
        this.workflow = workflow;
        return this;
    }
}