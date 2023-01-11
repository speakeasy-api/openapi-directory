package openapisdk.models.operations;



public class AddVideosToProjectRequest {
    public AddVideosToProjectPathParams pathParams;
    public AddVideosToProjectRequest withPathParams(AddVideosToProjectPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public AddVideosToProjectQueryParams queryParams;
    public AddVideosToProjectRequest withQueryParams(AddVideosToProjectQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public AddVideosToProjectSecurity security;
    public AddVideosToProjectRequest withSecurity(AddVideosToProjectSecurity security) {
        this.security = security;
        return this;
    }
}