package openapisdk.models.operations;



public class PostEmployerSecretRequest {
    public PostEmployerSecretPathParams pathParams;
    public PostEmployerSecretRequest withPathParams(PostEmployerSecretPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public PostEmployerSecretHeaders headers;
    public PostEmployerSecretRequest withHeaders(PostEmployerSecretHeaders headers) {
        this.headers = headers;
        return this;
    }
}