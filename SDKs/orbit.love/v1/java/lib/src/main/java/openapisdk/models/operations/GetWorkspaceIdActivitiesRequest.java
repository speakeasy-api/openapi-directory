package openapisdk.models.operations;



public class GetWorkspaceIdActivitiesRequest {
    public GetWorkspaceIdActivitiesPathParams pathParams;
    public GetWorkspaceIdActivitiesRequest withPathParams(GetWorkspaceIdActivitiesPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetWorkspaceIdActivitiesQueryParams queryParams;
    public GetWorkspaceIdActivitiesRequest withQueryParams(GetWorkspaceIdActivitiesQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetWorkspaceIdActivitiesSecurity security;
    public GetWorkspaceIdActivitiesRequest withSecurity(GetWorkspaceIdActivitiesSecurity security) {
        this.security = security;
        return this;
    }
}