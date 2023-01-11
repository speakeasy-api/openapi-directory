package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class OrgpolicyOrganizationsCustomConstraintsCreateRequest {
    public OrgpolicyOrganizationsCustomConstraintsCreatePathParams pathParams;
    public OrgpolicyOrganizationsCustomConstraintsCreateRequest withPathParams(OrgpolicyOrganizationsCustomConstraintsCreatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public OrgpolicyOrganizationsCustomConstraintsCreateQueryParams queryParams;
    public OrgpolicyOrganizationsCustomConstraintsCreateRequest withQueryParams(OrgpolicyOrganizationsCustomConstraintsCreateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GoogleCloudOrgpolicyV2CustomConstraintInput request;
    public OrgpolicyOrganizationsCustomConstraintsCreateRequest withRequest(openapisdk.models.shared.GoogleCloudOrgpolicyV2CustomConstraintInput request) {
        this.request = request;
        return this;
    }
    public OrgpolicyOrganizationsCustomConstraintsCreateSecurity security;
    public OrgpolicyOrganizationsCustomConstraintsCreateRequest withSecurity(OrgpolicyOrganizationsCustomConstraintsCreateSecurity security) {
        this.security = security;
        return this;
    }
}