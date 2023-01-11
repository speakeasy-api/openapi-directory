package openapisdk.models.operations;



public class GetUserEarningsRequest {
    public GetUserEarningsPathParams pathParams;
    public GetUserEarningsRequest withPathParams(GetUserEarningsPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetUserEarningsSecurity security;
    public GetUserEarningsRequest withSecurity(GetUserEarningsSecurity security) {
        this.security = security;
        return this;
    }
}