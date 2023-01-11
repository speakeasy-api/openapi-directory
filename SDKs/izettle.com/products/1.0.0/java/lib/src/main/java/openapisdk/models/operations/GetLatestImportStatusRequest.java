package openapisdk.models.operations;



public class GetLatestImportStatusRequest {
    public GetLatestImportStatusPathParams pathParams;
    public GetLatestImportStatusRequest withPathParams(GetLatestImportStatusPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetLatestImportStatusSecurity security;
    public GetLatestImportStatusRequest withSecurity(GetLatestImportStatusSecurity security) {
        this.security = security;
        return this;
    }
}