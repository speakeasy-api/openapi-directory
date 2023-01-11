package openapisdk.models.operations;



public class GetIterationsRequest {
    public GetIterationsPathParams pathParams;
    public GetIterationsRequest withPathParams(GetIterationsPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetIterationsHeaders headers;
    public GetIterationsRequest withHeaders(GetIterationsHeaders headers) {
        this.headers = headers;
        return this;
    }
}