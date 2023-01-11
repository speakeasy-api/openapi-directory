package openapisdk.models.operations;



public class DfareportingFloodlightActivityGroupsListRequest {
    public DfareportingFloodlightActivityGroupsListPathParams pathParams;
    public DfareportingFloodlightActivityGroupsListRequest withPathParams(DfareportingFloodlightActivityGroupsListPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DfareportingFloodlightActivityGroupsListQueryParams queryParams;
    public DfareportingFloodlightActivityGroupsListRequest withQueryParams(DfareportingFloodlightActivityGroupsListQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public DfareportingFloodlightActivityGroupsListSecurity security;
    public DfareportingFloodlightActivityGroupsListRequest withSecurity(DfareportingFloodlightActivityGroupsListSecurity security) {
        this.security = security;
        return this;
    }
}