package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PrivatecaProjectsLocationsCertificateAuthoritiesCertificatesCreateRequest {
    public PrivatecaProjectsLocationsCertificateAuthoritiesCertificatesCreatePathParams pathParams;
    public PrivatecaProjectsLocationsCertificateAuthoritiesCertificatesCreateRequest withPathParams(PrivatecaProjectsLocationsCertificateAuthoritiesCertificatesCreatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public PrivatecaProjectsLocationsCertificateAuthoritiesCertificatesCreateQueryParams queryParams;
    public PrivatecaProjectsLocationsCertificateAuthoritiesCertificatesCreateRequest withQueryParams(PrivatecaProjectsLocationsCertificateAuthoritiesCertificatesCreateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.CertificateInput request;
    public PrivatecaProjectsLocationsCertificateAuthoritiesCertificatesCreateRequest withRequest(openapisdk.models.shared.CertificateInput request) {
        this.request = request;
        return this;
    }
    public PrivatecaProjectsLocationsCertificateAuthoritiesCertificatesCreateSecurity security;
    public PrivatecaProjectsLocationsCertificateAuthoritiesCertificatesCreateRequest withSecurity(PrivatecaProjectsLocationsCertificateAuthoritiesCertificatesCreateSecurity security) {
        this.security = security;
        return this;
    }
}