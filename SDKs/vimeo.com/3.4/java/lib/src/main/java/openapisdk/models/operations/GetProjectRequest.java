package openapisdk.models.operations;



public class GetProjectRequest {
    public GetProjectPathParams pathParams;
    public GetProjectRequest withPathParams(GetProjectPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetProjectSecurity security;
    public GetProjectRequest withSecurity(GetProjectSecurity security) {
        this.security = security;
        return this;
    }
}