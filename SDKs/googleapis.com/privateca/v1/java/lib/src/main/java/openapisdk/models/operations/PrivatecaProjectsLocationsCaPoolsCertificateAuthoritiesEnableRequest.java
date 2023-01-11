package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PrivatecaProjectsLocationsCaPoolsCertificateAuthoritiesEnableRequest {
    public PrivatecaProjectsLocationsCaPoolsCertificateAuthoritiesEnablePathParams pathParams;
    public PrivatecaProjectsLocationsCaPoolsCertificateAuthoritiesEnableRequest withPathParams(PrivatecaProjectsLocationsCaPoolsCertificateAuthoritiesEnablePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public PrivatecaProjectsLocationsCaPoolsCertificateAuthoritiesEnableQueryParams queryParams;
    public PrivatecaProjectsLocationsCaPoolsCertificateAuthoritiesEnableRequest withQueryParams(PrivatecaProjectsLocationsCaPoolsCertificateAuthoritiesEnableQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.EnableCertificateAuthorityRequest request;
    public PrivatecaProjectsLocationsCaPoolsCertificateAuthoritiesEnableRequest withRequest(openapisdk.models.shared.EnableCertificateAuthorityRequest request) {
        this.request = request;
        return this;
    }
    public PrivatecaProjectsLocationsCaPoolsCertificateAuthoritiesEnableSecurity security;
    public PrivatecaProjectsLocationsCaPoolsCertificateAuthoritiesEnableRequest withSecurity(PrivatecaProjectsLocationsCaPoolsCertificateAuthoritiesEnableSecurity security) {
        this.security = security;
        return this;
    }
}