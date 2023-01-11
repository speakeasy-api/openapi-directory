package openapisdk.models.operations;



public class GetAllEarningsRequest {
    public GetAllEarningsPathParams pathParams;
    public GetAllEarningsRequest withPathParams(GetAllEarningsPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetAllEarningsSecurity security;
    public GetAllEarningsRequest withSecurity(GetAllEarningsSecurity security) {
        this.security = security;
        return this;
    }
}