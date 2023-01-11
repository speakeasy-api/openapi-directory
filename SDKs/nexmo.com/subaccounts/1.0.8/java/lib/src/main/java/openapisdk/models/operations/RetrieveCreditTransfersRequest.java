package openapisdk.models.operations;



public class RetrieveCreditTransfersRequest {
    public RetrieveCreditTransfersPathParams pathParams;
    public RetrieveCreditTransfersRequest withPathParams(RetrieveCreditTransfersPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public RetrieveCreditTransfersQueryParams queryParams;
    public RetrieveCreditTransfersRequest withQueryParams(RetrieveCreditTransfersQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public RetrieveCreditTransfersSecurity security;
    public RetrieveCreditTransfersRequest withSecurity(RetrieveCreditTransfersSecurity security) {
        this.security = security;
        return this;
    }
}