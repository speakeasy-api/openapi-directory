package openapisdk.models.operations;



public class DfareportingPlacementGroupsListRequest {
    public DfareportingPlacementGroupsListPathParams pathParams;
    public DfareportingPlacementGroupsListRequest withPathParams(DfareportingPlacementGroupsListPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DfareportingPlacementGroupsListQueryParams queryParams;
    public DfareportingPlacementGroupsListRequest withQueryParams(DfareportingPlacementGroupsListQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public DfareportingPlacementGroupsListSecurity security;
    public DfareportingPlacementGroupsListRequest withSecurity(DfareportingPlacementGroupsListSecurity security) {
        this.security = security;
        return this;
    }
}