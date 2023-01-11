package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PrivatecaProjectsLocationsCaPoolsCertificateAuthoritiesCreateRequest {
    public PrivatecaProjectsLocationsCaPoolsCertificateAuthoritiesCreatePathParams pathParams;
    public PrivatecaProjectsLocationsCaPoolsCertificateAuthoritiesCreateRequest withPathParams(PrivatecaProjectsLocationsCaPoolsCertificateAuthoritiesCreatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public PrivatecaProjectsLocationsCaPoolsCertificateAuthoritiesCreateQueryParams queryParams;
    public PrivatecaProjectsLocationsCaPoolsCertificateAuthoritiesCreateRequest withQueryParams(PrivatecaProjectsLocationsCaPoolsCertificateAuthoritiesCreateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.CertificateAuthorityInput request;
    public PrivatecaProjectsLocationsCaPoolsCertificateAuthoritiesCreateRequest withRequest(openapisdk.models.shared.CertificateAuthorityInput request) {
        this.request = request;
        return this;
    }
    public PrivatecaProjectsLocationsCaPoolsCertificateAuthoritiesCreateSecurity security;
    public PrivatecaProjectsLocationsCaPoolsCertificateAuthoritiesCreateRequest withSecurity(PrivatecaProjectsLocationsCaPoolsCertificateAuthoritiesCreateSecurity security) {
        this.security = security;
        return this;
    }
}