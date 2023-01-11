package openapisdk.models.operations;



public class GetUserByIdRequest {
    public GetUserByIdPathParams pathParams;
    public GetUserByIdRequest withPathParams(GetUserByIdPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetUserByIdSecurity security;
    public GetUserByIdRequest withSecurity(GetUserByIdSecurity security) {
        this.security = security;
        return this;
    }
}