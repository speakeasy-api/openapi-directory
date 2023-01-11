package openapisdk.models.operations;



public class RetrieveBalanceTransfersRequest {
    public RetrieveBalanceTransfersPathParams pathParams;
    public RetrieveBalanceTransfersRequest withPathParams(RetrieveBalanceTransfersPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public RetrieveBalanceTransfersQueryParams queryParams;
    public RetrieveBalanceTransfersRequest withQueryParams(RetrieveBalanceTransfersQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public RetrieveBalanceTransfersSecurity security;
    public RetrieveBalanceTransfersRequest withSecurity(RetrieveBalanceTransfersSecurity security) {
        this.security = security;
        return this;
    }
}