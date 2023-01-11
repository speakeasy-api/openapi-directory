package openapisdk.models.operations;



public class DfareportingEventTagsListRequest {
    public DfareportingEventTagsListPathParams pathParams;
    public DfareportingEventTagsListRequest withPathParams(DfareportingEventTagsListPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DfareportingEventTagsListQueryParams queryParams;
    public DfareportingEventTagsListRequest withQueryParams(DfareportingEventTagsListQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public DfareportingEventTagsListSecurity security;
    public DfareportingEventTagsListRequest withSecurity(DfareportingEventTagsListSecurity security) {
        this.security = security;
        return this;
    }
}