package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DfareportingBillingAssignmentsInsertRequest {
    public DfareportingBillingAssignmentsInsertPathParams pathParams;
    public DfareportingBillingAssignmentsInsertRequest withPathParams(DfareportingBillingAssignmentsInsertPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DfareportingBillingAssignmentsInsertQueryParams queryParams;
    public DfareportingBillingAssignmentsInsertRequest withQueryParams(DfareportingBillingAssignmentsInsertQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.BillingAssignment request;
    public DfareportingBillingAssignmentsInsertRequest withRequest(openapisdk.models.shared.BillingAssignment request) {
        this.request = request;
        return this;
    }
    public DfareportingBillingAssignmentsInsertSecurity security;
    public DfareportingBillingAssignmentsInsertRequest withSecurity(DfareportingBillingAssignmentsInsertSecurity security) {
        this.security = security;
        return this;
    }
}