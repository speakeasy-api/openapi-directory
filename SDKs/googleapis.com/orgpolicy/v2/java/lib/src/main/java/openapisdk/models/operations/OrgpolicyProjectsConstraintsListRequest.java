package openapisdk.models.operations;



public class OrgpolicyProjectsConstraintsListRequest {
    public OrgpolicyProjectsConstraintsListPathParams pathParams;
    public OrgpolicyProjectsConstraintsListRequest withPathParams(OrgpolicyProjectsConstraintsListPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public OrgpolicyProjectsConstraintsListQueryParams queryParams;
    public OrgpolicyProjectsConstraintsListRequest withQueryParams(OrgpolicyProjectsConstraintsListQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public OrgpolicyProjectsConstraintsListSecurity security;
    public OrgpolicyProjectsConstraintsListRequest withSecurity(OrgpolicyProjectsConstraintsListSecurity security) {
        this.security = security;
        return this;
    }
}