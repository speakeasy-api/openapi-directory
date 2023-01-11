package openapisdk.models.operations;



public class DfareportingFilesListRequest {
    public DfareportingFilesListPathParams pathParams;
    public DfareportingFilesListRequest withPathParams(DfareportingFilesListPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DfareportingFilesListQueryParams queryParams;
    public DfareportingFilesListRequest withQueryParams(DfareportingFilesListQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public DfareportingFilesListSecurity security;
    public DfareportingFilesListRequest withSecurity(DfareportingFilesListSecurity security) {
        this.security = security;
        return this;
    }
}