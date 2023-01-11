package openapisdk.models.operations;



public class GetUserProjectStatsRequest {
    public GetUserProjectStatsPathParams pathParams;
    public GetUserProjectStatsRequest withPathParams(GetUserProjectStatsPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetUserProjectStatsSecurity security;
    public GetUserProjectStatsRequest withSecurity(GetUserProjectStatsSecurity security) {
        this.security = security;
        return this;
    }
}