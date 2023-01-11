package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class IamIamPoliciesQueryAuditableServicesRequest {
    public IamIamPoliciesQueryAuditableServicesQueryParams queryParams;
    public IamIamPoliciesQueryAuditableServicesRequest withQueryParams(IamIamPoliciesQueryAuditableServicesQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.QueryAuditableServicesRequest request;
    public IamIamPoliciesQueryAuditableServicesRequest withRequest(openapisdk.models.shared.QueryAuditableServicesRequest request) {
        this.request = request;
        return this;
    }
    public IamIamPoliciesQueryAuditableServicesSecurity security;
    public IamIamPoliciesQueryAuditableServicesRequest withSecurity(IamIamPoliciesQueryAuditableServicesSecurity security) {
        this.security = security;
        return this;
    }
}