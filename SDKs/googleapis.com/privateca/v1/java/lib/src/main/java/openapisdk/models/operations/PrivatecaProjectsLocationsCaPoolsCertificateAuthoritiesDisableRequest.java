package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PrivatecaProjectsLocationsCaPoolsCertificateAuthoritiesDisableRequest {
    public PrivatecaProjectsLocationsCaPoolsCertificateAuthoritiesDisablePathParams pathParams;
    public PrivatecaProjectsLocationsCaPoolsCertificateAuthoritiesDisableRequest withPathParams(PrivatecaProjectsLocationsCaPoolsCertificateAuthoritiesDisablePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public PrivatecaProjectsLocationsCaPoolsCertificateAuthoritiesDisableQueryParams queryParams;
    public PrivatecaProjectsLocationsCaPoolsCertificateAuthoritiesDisableRequest withQueryParams(PrivatecaProjectsLocationsCaPoolsCertificateAuthoritiesDisableQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DisableCertificateAuthorityRequest request;
    public PrivatecaProjectsLocationsCaPoolsCertificateAuthoritiesDisableRequest withRequest(openapisdk.models.shared.DisableCertificateAuthorityRequest request) {
        this.request = request;
        return this;
    }
    public PrivatecaProjectsLocationsCaPoolsCertificateAuthoritiesDisableSecurity security;
    public PrivatecaProjectsLocationsCaPoolsCertificateAuthoritiesDisableRequest withSecurity(PrivatecaProjectsLocationsCaPoolsCertificateAuthoritiesDisableSecurity security) {
        this.security = security;
        return this;
    }
}