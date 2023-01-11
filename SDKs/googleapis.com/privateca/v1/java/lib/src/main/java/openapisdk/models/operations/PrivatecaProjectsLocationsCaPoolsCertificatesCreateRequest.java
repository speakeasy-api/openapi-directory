package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PrivatecaProjectsLocationsCaPoolsCertificatesCreateRequest {
    public PrivatecaProjectsLocationsCaPoolsCertificatesCreatePathParams pathParams;
    public PrivatecaProjectsLocationsCaPoolsCertificatesCreateRequest withPathParams(PrivatecaProjectsLocationsCaPoolsCertificatesCreatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public PrivatecaProjectsLocationsCaPoolsCertificatesCreateQueryParams queryParams;
    public PrivatecaProjectsLocationsCaPoolsCertificatesCreateRequest withQueryParams(PrivatecaProjectsLocationsCaPoolsCertificatesCreateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.CertificateInput request;
    public PrivatecaProjectsLocationsCaPoolsCertificatesCreateRequest withRequest(openapisdk.models.shared.CertificateInput request) {
        this.request = request;
        return this;
    }
    public PrivatecaProjectsLocationsCaPoolsCertificatesCreateSecurity security;
    public PrivatecaProjectsLocationsCaPoolsCertificatesCreateRequest withSecurity(PrivatecaProjectsLocationsCaPoolsCertificatesCreateSecurity security) {
        this.security = security;
        return this;
    }
}