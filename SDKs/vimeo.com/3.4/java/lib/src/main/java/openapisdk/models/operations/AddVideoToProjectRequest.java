package openapisdk.models.operations;



public class AddVideoToProjectRequest {
    public AddVideoToProjectPathParams pathParams;
    public AddVideoToProjectRequest withPathParams(AddVideoToProjectPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public AddVideoToProjectSecurity security;
    public AddVideoToProjectRequest withSecurity(AddVideoToProjectSecurity security) {
        this.security = security;
        return this;
    }
}