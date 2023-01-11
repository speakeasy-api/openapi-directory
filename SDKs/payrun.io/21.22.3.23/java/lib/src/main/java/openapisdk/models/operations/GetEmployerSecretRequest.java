package openapisdk.models.operations;



public class GetEmployerSecretRequest {
    public GetEmployerSecretPathParams pathParams;
    public GetEmployerSecretRequest withPathParams(GetEmployerSecretPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetEmployerSecretHeaders headers;
    public GetEmployerSecretRequest withHeaders(GetEmployerSecretHeaders headers) {
        this.headers = headers;
        return this;
    }
}