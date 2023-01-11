package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PrivatecaProjectsLocationsCertificateAuthoritiesEnableRequest {
    public PrivatecaProjectsLocationsCertificateAuthoritiesEnablePathParams pathParams;
    public PrivatecaProjectsLocationsCertificateAuthoritiesEnableRequest withPathParams(PrivatecaProjectsLocationsCertificateAuthoritiesEnablePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public PrivatecaProjectsLocationsCertificateAuthoritiesEnableQueryParams queryParams;
    public PrivatecaProjectsLocationsCertificateAuthoritiesEnableRequest withQueryParams(PrivatecaProjectsLocationsCertificateAuthoritiesEnableQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.EnableCertificateAuthorityRequest request;
    public PrivatecaProjectsLocationsCertificateAuthoritiesEnableRequest withRequest(openapisdk.models.shared.EnableCertificateAuthorityRequest request) {
        this.request = request;
        return this;
    }
    public PrivatecaProjectsLocationsCertificateAuthoritiesEnableSecurity security;
    public PrivatecaProjectsLocationsCertificateAuthoritiesEnableRequest withSecurity(PrivatecaProjectsLocationsCertificateAuthoritiesEnableSecurity security) {
        this.security = security;
        return this;
    }
}