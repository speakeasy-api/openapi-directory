package openapisdk.models.operations;



public class GetUserStatsRequest {
    public GetUserStatsPathParams pathParams;
    public GetUserStatsRequest withPathParams(GetUserStatsPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetUserStatsSecurity security;
    public GetUserStatsRequest withSecurity(GetUserStatsSecurity security) {
        this.security = security;
        return this;
    }
}