package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class OrgpolicyProjectsPoliciesCreateRequest {
    public OrgpolicyProjectsPoliciesCreatePathParams pathParams;
    public OrgpolicyProjectsPoliciesCreateRequest withPathParams(OrgpolicyProjectsPoliciesCreatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public OrgpolicyProjectsPoliciesCreateQueryParams queryParams;
    public OrgpolicyProjectsPoliciesCreateRequest withQueryParams(OrgpolicyProjectsPoliciesCreateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GoogleCloudOrgpolicyV2PolicyInput request;
    public OrgpolicyProjectsPoliciesCreateRequest withRequest(openapisdk.models.shared.GoogleCloudOrgpolicyV2PolicyInput request) {
        this.request = request;
        return this;
    }
    public OrgpolicyProjectsPoliciesCreateSecurity security;
    public OrgpolicyProjectsPoliciesCreateRequest withSecurity(OrgpolicyProjectsPoliciesCreateSecurity security) {
        this.security = security;
        return this;
    }
}