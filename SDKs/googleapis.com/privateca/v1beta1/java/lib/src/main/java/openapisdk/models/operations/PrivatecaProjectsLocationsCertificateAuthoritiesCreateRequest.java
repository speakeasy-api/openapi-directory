package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PrivatecaProjectsLocationsCertificateAuthoritiesCreateRequest {
    public PrivatecaProjectsLocationsCertificateAuthoritiesCreatePathParams pathParams;
    public PrivatecaProjectsLocationsCertificateAuthoritiesCreateRequest withPathParams(PrivatecaProjectsLocationsCertificateAuthoritiesCreatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public PrivatecaProjectsLocationsCertificateAuthoritiesCreateQueryParams queryParams;
    public PrivatecaProjectsLocationsCertificateAuthoritiesCreateRequest withQueryParams(PrivatecaProjectsLocationsCertificateAuthoritiesCreateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.CertificateAuthorityInput request;
    public PrivatecaProjectsLocationsCertificateAuthoritiesCreateRequest withRequest(openapisdk.models.shared.CertificateAuthorityInput request) {
        this.request = request;
        return this;
    }
    public PrivatecaProjectsLocationsCertificateAuthoritiesCreateSecurity security;
    public PrivatecaProjectsLocationsCertificateAuthoritiesCreateRequest withSecurity(PrivatecaProjectsLocationsCertificateAuthoritiesCreateSecurity security) {
        this.security = security;
        return this;
    }
}