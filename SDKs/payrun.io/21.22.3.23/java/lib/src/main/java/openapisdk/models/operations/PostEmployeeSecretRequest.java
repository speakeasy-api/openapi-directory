package openapisdk.models.operations;



public class PostEmployeeSecretRequest {
    public PostEmployeeSecretPathParams pathParams;
    public PostEmployeeSecretRequest withPathParams(PostEmployeeSecretPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public PostEmployeeSecretHeaders headers;
    public PostEmployeeSecretRequest withHeaders(PostEmployeeSecretHeaders headers) {
        this.headers = headers;
        return this;
    }
}