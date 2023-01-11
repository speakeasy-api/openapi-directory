package openapisdk.models.operations;



public class ListDeploymentResponse {
    public String contentType;
    public ListDeploymentResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public ListDeploymentListDeploymentResponse listDeploymentResponse;
    public ListDeploymentResponse withListDeploymentResponse(ListDeploymentListDeploymentResponse listDeploymentResponse) {
        this.listDeploymentResponse = listDeploymentResponse;
        return this;
    }
    public Long statusCode;
    public ListDeploymentResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}