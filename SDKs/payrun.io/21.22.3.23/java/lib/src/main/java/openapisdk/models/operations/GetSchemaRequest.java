package openapisdk.models.operations;



public class GetSchemaRequest {
    public GetSchemaPathParams pathParams;
    public GetSchemaRequest withPathParams(GetSchemaPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetSchemaHeaders headers;
    public GetSchemaRequest withHeaders(GetSchemaHeaders headers) {
        this.headers = headers;
        return this;
    }
}