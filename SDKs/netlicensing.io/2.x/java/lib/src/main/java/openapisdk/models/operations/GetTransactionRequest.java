package openapisdk.models.operations;



public class GetTransactionRequest {
    public GetTransactionPathParams pathParams;
    public GetTransactionRequest withPathParams(GetTransactionPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetTransactionSecurity security;
    public GetTransactionRequest withSecurity(GetTransactionSecurity security) {
        this.security = security;
        return this;
    }
}