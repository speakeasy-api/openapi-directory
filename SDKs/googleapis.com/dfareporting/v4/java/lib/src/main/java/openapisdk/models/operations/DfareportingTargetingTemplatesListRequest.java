package openapisdk.models.operations;



public class DfareportingTargetingTemplatesListRequest {
    public DfareportingTargetingTemplatesListPathParams pathParams;
    public DfareportingTargetingTemplatesListRequest withPathParams(DfareportingTargetingTemplatesListPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DfareportingTargetingTemplatesListQueryParams queryParams;
    public DfareportingTargetingTemplatesListRequest withQueryParams(DfareportingTargetingTemplatesListQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public DfareportingTargetingTemplatesListSecurity security;
    public DfareportingTargetingTemplatesListRequest withSecurity(DfareportingTargetingTemplatesListSecurity security) {
        this.security = security;
        return this;
    }
}