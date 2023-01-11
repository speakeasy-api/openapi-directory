package openapisdk.models.operations;



public class GetEmployeeSecretRequest {
    public GetEmployeeSecretPathParams pathParams;
    public GetEmployeeSecretRequest withPathParams(GetEmployeeSecretPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetEmployeeSecretHeaders headers;
    public GetEmployeeSecretRequest withHeaders(GetEmployeeSecretHeaders headers) {
        this.headers = headers;
        return this;
    }
}