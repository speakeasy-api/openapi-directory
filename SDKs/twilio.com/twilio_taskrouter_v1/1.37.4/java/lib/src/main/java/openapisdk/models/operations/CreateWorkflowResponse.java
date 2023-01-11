package openapisdk.models.operations;



public class CreateWorkflowResponse {
    public String contentType;
    public CreateWorkflowResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public CreateWorkflowResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.TaskrouterV1WorkspaceWorkflow taskrouterV1WorkspaceWorkflow;
    public CreateWorkflowResponse withTaskrouterV1WorkspaceWorkflow(openapisdk.models.shared.TaskrouterV1WorkspaceWorkflow taskrouterV1WorkspaceWorkflow) {
        this.taskrouterV1WorkspaceWorkflow = taskrouterV1WorkspaceWorkflow;
        return this;
    }
}