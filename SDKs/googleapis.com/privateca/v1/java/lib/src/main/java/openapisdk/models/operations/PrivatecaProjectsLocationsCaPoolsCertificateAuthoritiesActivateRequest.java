package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PrivatecaProjectsLocationsCaPoolsCertificateAuthoritiesActivateRequest {
    public PrivatecaProjectsLocationsCaPoolsCertificateAuthoritiesActivatePathParams pathParams;
    public PrivatecaProjectsLocationsCaPoolsCertificateAuthoritiesActivateRequest withPathParams(PrivatecaProjectsLocationsCaPoolsCertificateAuthoritiesActivatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public PrivatecaProjectsLocationsCaPoolsCertificateAuthoritiesActivateQueryParams queryParams;
    public PrivatecaProjectsLocationsCaPoolsCertificateAuthoritiesActivateRequest withQueryParams(PrivatecaProjectsLocationsCaPoolsCertificateAuthoritiesActivateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ActivateCertificateAuthorityRequest request;
    public PrivatecaProjectsLocationsCaPoolsCertificateAuthoritiesActivateRequest withRequest(openapisdk.models.shared.ActivateCertificateAuthorityRequest request) {
        this.request = request;
        return this;
    }
    public PrivatecaProjectsLocationsCaPoolsCertificateAuthoritiesActivateSecurity security;
    public PrivatecaProjectsLocationsCaPoolsCertificateAuthoritiesActivateRequest withSecurity(PrivatecaProjectsLocationsCaPoolsCertificateAuthoritiesActivateSecurity security) {
        this.security = security;
        return this;
    }
}