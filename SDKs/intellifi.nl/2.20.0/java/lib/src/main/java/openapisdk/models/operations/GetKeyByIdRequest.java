package openapisdk.models.operations;



public class GetKeyByIdRequest {
    public GetKeyByIdPathParams pathParams;
    public GetKeyByIdRequest withPathParams(GetKeyByIdPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetKeyByIdSecurity security;
    public GetKeyByIdRequest withSecurity(GetKeyByIdSecurity security) {
        this.security = security;
        return this;
    }
}