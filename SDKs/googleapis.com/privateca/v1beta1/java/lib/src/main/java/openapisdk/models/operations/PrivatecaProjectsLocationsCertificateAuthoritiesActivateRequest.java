package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PrivatecaProjectsLocationsCertificateAuthoritiesActivateRequest {
    public PrivatecaProjectsLocationsCertificateAuthoritiesActivatePathParams pathParams;
    public PrivatecaProjectsLocationsCertificateAuthoritiesActivateRequest withPathParams(PrivatecaProjectsLocationsCertificateAuthoritiesActivatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public PrivatecaProjectsLocationsCertificateAuthoritiesActivateQueryParams queryParams;
    public PrivatecaProjectsLocationsCertificateAuthoritiesActivateRequest withQueryParams(PrivatecaProjectsLocationsCertificateAuthoritiesActivateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ActivateCertificateAuthorityRequest request;
    public PrivatecaProjectsLocationsCertificateAuthoritiesActivateRequest withRequest(openapisdk.models.shared.ActivateCertificateAuthorityRequest request) {
        this.request = request;
        return this;
    }
    public PrivatecaProjectsLocationsCertificateAuthoritiesActivateSecurity security;
    public PrivatecaProjectsLocationsCertificateAuthoritiesActivateRequest withSecurity(PrivatecaProjectsLocationsCertificateAuthoritiesActivateSecurity security) {
        this.security = security;
        return this;
    }
}