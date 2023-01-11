package openapisdk.models.operations;



public class GetAllDirectDepositRequest {
    public GetAllDirectDepositPathParams pathParams;
    public GetAllDirectDepositRequest withPathParams(GetAllDirectDepositPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetAllDirectDepositSecurity security;
    public GetAllDirectDepositRequest withSecurity(GetAllDirectDepositSecurity security) {
        this.security = security;
        return this;
    }
}