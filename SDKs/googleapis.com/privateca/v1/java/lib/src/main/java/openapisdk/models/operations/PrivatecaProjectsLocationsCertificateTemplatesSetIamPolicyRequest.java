package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PrivatecaProjectsLocationsCertificateTemplatesSetIamPolicyRequest {
    public PrivatecaProjectsLocationsCertificateTemplatesSetIamPolicyPathParams pathParams;
    public PrivatecaProjectsLocationsCertificateTemplatesSetIamPolicyRequest withPathParams(PrivatecaProjectsLocationsCertificateTemplatesSetIamPolicyPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public PrivatecaProjectsLocationsCertificateTemplatesSetIamPolicyQueryParams queryParams;
    public PrivatecaProjectsLocationsCertificateTemplatesSetIamPolicyRequest withQueryParams(PrivatecaProjectsLocationsCertificateTemplatesSetIamPolicyQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.SetIamPolicyRequest request;
    public PrivatecaProjectsLocationsCertificateTemplatesSetIamPolicyRequest withRequest(openapisdk.models.shared.SetIamPolicyRequest request) {
        this.request = request;
        return this;
    }
    public PrivatecaProjectsLocationsCertificateTemplatesSetIamPolicySecurity security;
    public PrivatecaProjectsLocationsCertificateTemplatesSetIamPolicyRequest withSecurity(PrivatecaProjectsLocationsCertificateTemplatesSetIamPolicySecurity security) {
        this.security = security;
        return this;
    }
}