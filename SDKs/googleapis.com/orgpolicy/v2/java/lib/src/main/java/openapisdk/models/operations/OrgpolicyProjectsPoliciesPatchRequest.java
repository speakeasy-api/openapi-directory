package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class OrgpolicyProjectsPoliciesPatchRequest {
    public OrgpolicyProjectsPoliciesPatchPathParams pathParams;
    public OrgpolicyProjectsPoliciesPatchRequest withPathParams(OrgpolicyProjectsPoliciesPatchPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public OrgpolicyProjectsPoliciesPatchQueryParams queryParams;
    public OrgpolicyProjectsPoliciesPatchRequest withQueryParams(OrgpolicyProjectsPoliciesPatchQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GoogleCloudOrgpolicyV2PolicyInput request;
    public OrgpolicyProjectsPoliciesPatchRequest withRequest(openapisdk.models.shared.GoogleCloudOrgpolicyV2PolicyInput request) {
        this.request = request;
        return this;
    }
    public OrgpolicyProjectsPoliciesPatchSecurity security;
    public OrgpolicyProjectsPoliciesPatchRequest withSecurity(OrgpolicyProjectsPoliciesPatchSecurity security) {
        this.security = security;
        return this;
    }
}