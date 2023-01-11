package openapisdk.models.operations;



public class DfareportingContentCategoriesListRequest {
    public DfareportingContentCategoriesListPathParams pathParams;
    public DfareportingContentCategoriesListRequest withPathParams(DfareportingContentCategoriesListPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DfareportingContentCategoriesListQueryParams queryParams;
    public DfareportingContentCategoriesListRequest withQueryParams(DfareportingContentCategoriesListQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public DfareportingContentCategoriesListSecurity security;
    public DfareportingContentCategoriesListRequest withSecurity(DfareportingContentCategoriesListSecurity security) {
        this.security = security;
        return this;
    }
}