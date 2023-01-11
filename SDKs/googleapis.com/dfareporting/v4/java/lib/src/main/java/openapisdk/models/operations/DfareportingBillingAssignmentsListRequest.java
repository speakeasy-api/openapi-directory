package openapisdk.models.operations;



public class DfareportingBillingAssignmentsListRequest {
    public DfareportingBillingAssignmentsListPathParams pathParams;
    public DfareportingBillingAssignmentsListRequest withPathParams(DfareportingBillingAssignmentsListPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DfareportingBillingAssignmentsListQueryParams queryParams;
    public DfareportingBillingAssignmentsListRequest withQueryParams(DfareportingBillingAssignmentsListQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public DfareportingBillingAssignmentsListSecurity security;
    public DfareportingBillingAssignmentsListRequest withSecurity(DfareportingBillingAssignmentsListSecurity security) {
        this.security = security;
        return this;
    }
}