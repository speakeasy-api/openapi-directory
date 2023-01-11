package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PrivatecaProjectsLocationsCertificateAuthoritiesDisableRequest {
    public PrivatecaProjectsLocationsCertificateAuthoritiesDisablePathParams pathParams;
    public PrivatecaProjectsLocationsCertificateAuthoritiesDisableRequest withPathParams(PrivatecaProjectsLocationsCertificateAuthoritiesDisablePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public PrivatecaProjectsLocationsCertificateAuthoritiesDisableQueryParams queryParams;
    public PrivatecaProjectsLocationsCertificateAuthoritiesDisableRequest withQueryParams(PrivatecaProjectsLocationsCertificateAuthoritiesDisableQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DisableCertificateAuthorityRequest request;
    public PrivatecaProjectsLocationsCertificateAuthoritiesDisableRequest withRequest(openapisdk.models.shared.DisableCertificateAuthorityRequest request) {
        this.request = request;
        return this;
    }
    public PrivatecaProjectsLocationsCertificateAuthoritiesDisableSecurity security;
    public PrivatecaProjectsLocationsCertificateAuthoritiesDisableRequest withSecurity(PrivatecaProjectsLocationsCertificateAuthoritiesDisableSecurity security) {
        this.security = security;
        return this;
    }
}