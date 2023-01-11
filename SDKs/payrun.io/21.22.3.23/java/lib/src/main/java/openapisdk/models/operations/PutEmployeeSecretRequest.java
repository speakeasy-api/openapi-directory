package openapisdk.models.operations;



public class PutEmployeeSecretRequest {
    public PutEmployeeSecretPathParams pathParams;
    public PutEmployeeSecretRequest withPathParams(PutEmployeeSecretPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public PutEmployeeSecretHeaders headers;
    public PutEmployeeSecretRequest withHeaders(PutEmployeeSecretHeaders headers) {
        this.headers = headers;
        return this;
    }
}