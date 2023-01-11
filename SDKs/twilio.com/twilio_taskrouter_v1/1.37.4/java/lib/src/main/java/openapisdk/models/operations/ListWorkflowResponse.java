package openapisdk.models.operations;



public class ListWorkflowResponse {
    public String contentType;
    public ListWorkflowResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public ListWorkflowListWorkflowResponse listWorkflowResponse;
    public ListWorkflowResponse withListWorkflowResponse(ListWorkflowListWorkflowResponse listWorkflowResponse) {
        this.listWorkflowResponse = listWorkflowResponse;
        return this;
    }
    public Long statusCode;
    public ListWorkflowResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}