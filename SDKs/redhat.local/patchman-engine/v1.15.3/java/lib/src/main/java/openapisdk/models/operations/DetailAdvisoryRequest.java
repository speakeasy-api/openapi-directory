package openapisdk.models.operations;



public class DetailAdvisoryRequest {
    public DetailAdvisoryPathParams pathParams;
    public DetailAdvisoryRequest withPathParams(DetailAdvisoryPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DetailAdvisorySecurity security;
    public DetailAdvisoryRequest withSecurity(DetailAdvisorySecurity security) {
        this.security = security;
        return this;
    }
}