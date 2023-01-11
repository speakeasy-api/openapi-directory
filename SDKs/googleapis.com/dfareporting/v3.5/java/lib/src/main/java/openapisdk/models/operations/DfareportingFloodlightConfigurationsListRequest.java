package openapisdk.models.operations;



public class DfareportingFloodlightConfigurationsListRequest {
    public DfareportingFloodlightConfigurationsListPathParams pathParams;
    public DfareportingFloodlightConfigurationsListRequest withPathParams(DfareportingFloodlightConfigurationsListPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DfareportingFloodlightConfigurationsListQueryParams queryParams;
    public DfareportingFloodlightConfigurationsListRequest withQueryParams(DfareportingFloodlightConfigurationsListQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public DfareportingFloodlightConfigurationsListSecurity security;
    public DfareportingFloodlightConfigurationsListRequest withSecurity(DfareportingFloodlightConfigurationsListSecurity security) {
        this.security = security;
        return this;
    }
}