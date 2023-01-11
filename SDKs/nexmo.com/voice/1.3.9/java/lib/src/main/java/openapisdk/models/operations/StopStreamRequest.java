package openapisdk.models.operations;



public class StopStreamRequest {
    public StopStreamPathParams pathParams;
    public StopStreamRequest withPathParams(StopStreamPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public StopStreamSecurity security;
    public StopStreamRequest withSecurity(StopStreamSecurity security) {
        this.security = security;
        return this;
    }
}