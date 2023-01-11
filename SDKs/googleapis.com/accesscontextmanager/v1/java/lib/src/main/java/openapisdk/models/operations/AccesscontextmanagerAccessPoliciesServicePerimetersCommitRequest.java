package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AccesscontextmanagerAccessPoliciesServicePerimetersCommitRequest {
    public AccesscontextmanagerAccessPoliciesServicePerimetersCommitPathParams pathParams;
    public AccesscontextmanagerAccessPoliciesServicePerimetersCommitRequest withPathParams(AccesscontextmanagerAccessPoliciesServicePerimetersCommitPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public AccesscontextmanagerAccessPoliciesServicePerimetersCommitQueryParams queryParams;
    public AccesscontextmanagerAccessPoliciesServicePerimetersCommitRequest withQueryParams(AccesscontextmanagerAccessPoliciesServicePerimetersCommitQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.CommitServicePerimetersRequest request;
    public AccesscontextmanagerAccessPoliciesServicePerimetersCommitRequest withRequest(openapisdk.models.shared.CommitServicePerimetersRequest request) {
        this.request = request;
        return this;
    }
    public AccesscontextmanagerAccessPoliciesServicePerimetersCommitSecurity security;
    public AccesscontextmanagerAccessPoliciesServicePerimetersCommitRequest withSecurity(AccesscontextmanagerAccessPoliciesServicePerimetersCommitSecurity security) {
        this.security = security;
        return this;
    }
}