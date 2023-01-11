package openapisdk.models.operations;



public class UpdateWorkflowResponse {
    public String contentType;
    public UpdateWorkflowResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public UpdateWorkflowResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.TaskrouterV1WorkspaceWorkflow taskrouterV1WorkspaceWorkflow;
    public UpdateWorkflowResponse withTaskrouterV1WorkspaceWorkflow(openapisdk.models.shared.TaskrouterV1WorkspaceWorkflow taskrouterV1WorkspaceWorkflow) {
        this.taskrouterV1WorkspaceWorkflow = taskrouterV1WorkspaceWorkflow;
        return this;
    }
}