package openapisdk.models.operations;



public class DatatransferTransfersListRequest {
    public DatatransferTransfersListQueryParams queryParams;
    public DatatransferTransfersListRequest withQueryParams(DatatransferTransfersListQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public DatatransferTransfersListSecurity security;
    public DatatransferTransfersListRequest withSecurity(DatatransferTransfersListSecurity security) {
        this.security = security;
        return this;
    }
}