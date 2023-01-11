package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PrivatecaProjectsLocationsCertificateAuthoritiesCertificatesPatchRequest {
    public PrivatecaProjectsLocationsCertificateAuthoritiesCertificatesPatchPathParams pathParams;
    public PrivatecaProjectsLocationsCertificateAuthoritiesCertificatesPatchRequest withPathParams(PrivatecaProjectsLocationsCertificateAuthoritiesCertificatesPatchPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public PrivatecaProjectsLocationsCertificateAuthoritiesCertificatesPatchQueryParams queryParams;
    public PrivatecaProjectsLocationsCertificateAuthoritiesCertificatesPatchRequest withQueryParams(PrivatecaProjectsLocationsCertificateAuthoritiesCertificatesPatchQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.CertificateInput request;
    public PrivatecaProjectsLocationsCertificateAuthoritiesCertificatesPatchRequest withRequest(openapisdk.models.shared.CertificateInput request) {
        this.request = request;
        return this;
    }
    public PrivatecaProjectsLocationsCertificateAuthoritiesCertificatesPatchSecurity security;
    public PrivatecaProjectsLocationsCertificateAuthoritiesCertificatesPatchRequest withSecurity(PrivatecaProjectsLocationsCertificateAuthoritiesCertificatesPatchSecurity security) {
        this.security = security;
        return this;
    }
}