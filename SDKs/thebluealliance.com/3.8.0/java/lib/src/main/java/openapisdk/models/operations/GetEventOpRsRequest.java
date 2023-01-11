package openapisdk.models.operations;



public class GetEventOpRsRequest {
    public GetEventOpRsPathParams pathParams;
    public GetEventOpRsRequest withPathParams(GetEventOpRsPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetEventOpRsHeaders headers;
    public GetEventOpRsRequest withHeaders(GetEventOpRsHeaders headers) {
        this.headers = headers;
        return this;
    }
    public GetEventOpRsSecurity security;
    public GetEventOpRsRequest withSecurity(GetEventOpRsSecurity security) {
        this.security = security;
        return this;
    }
}