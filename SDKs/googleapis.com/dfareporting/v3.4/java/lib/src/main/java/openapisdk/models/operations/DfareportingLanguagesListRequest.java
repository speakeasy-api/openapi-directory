package openapisdk.models.operations;



public class DfareportingLanguagesListRequest {
    public DfareportingLanguagesListPathParams pathParams;
    public DfareportingLanguagesListRequest withPathParams(DfareportingLanguagesListPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DfareportingLanguagesListQueryParams queryParams;
    public DfareportingLanguagesListRequest withQueryParams(DfareportingLanguagesListQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public DfareportingLanguagesListSecurity security;
    public DfareportingLanguagesListRequest withSecurity(DfareportingLanguagesListSecurity security) {
        this.security = security;
        return this;
    }
}