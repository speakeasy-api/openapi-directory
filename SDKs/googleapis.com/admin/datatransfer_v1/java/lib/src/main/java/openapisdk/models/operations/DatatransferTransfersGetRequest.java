package openapisdk.models.operations;



public class DatatransferTransfersGetRequest {
    public DatatransferTransfersGetPathParams pathParams;
    public DatatransferTransfersGetRequest withPathParams(DatatransferTransfersGetPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DatatransferTransfersGetQueryParams queryParams;
    public DatatransferTransfersGetRequest withQueryParams(DatatransferTransfersGetQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public DatatransferTransfersGetSecurity security;
    public DatatransferTransfersGetRequest withSecurity(DatatransferTransfersGetSecurity security) {
        this.security = security;
        return this;
    }
}