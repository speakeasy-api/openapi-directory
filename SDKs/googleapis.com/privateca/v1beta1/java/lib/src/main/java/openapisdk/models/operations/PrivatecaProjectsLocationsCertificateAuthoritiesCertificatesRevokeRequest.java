package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PrivatecaProjectsLocationsCertificateAuthoritiesCertificatesRevokeRequest {
    public PrivatecaProjectsLocationsCertificateAuthoritiesCertificatesRevokePathParams pathParams;
    public PrivatecaProjectsLocationsCertificateAuthoritiesCertificatesRevokeRequest withPathParams(PrivatecaProjectsLocationsCertificateAuthoritiesCertificatesRevokePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public PrivatecaProjectsLocationsCertificateAuthoritiesCertificatesRevokeQueryParams queryParams;
    public PrivatecaProjectsLocationsCertificateAuthoritiesCertificatesRevokeRequest withQueryParams(PrivatecaProjectsLocationsCertificateAuthoritiesCertificatesRevokeQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.RevokeCertificateRequest request;
    public PrivatecaProjectsLocationsCertificateAuthoritiesCertificatesRevokeRequest withRequest(openapisdk.models.shared.RevokeCertificateRequest request) {
        this.request = request;
        return this;
    }
    public PrivatecaProjectsLocationsCertificateAuthoritiesCertificatesRevokeSecurity security;
    public PrivatecaProjectsLocationsCertificateAuthoritiesCertificatesRevokeRequest withSecurity(PrivatecaProjectsLocationsCertificateAuthoritiesCertificatesRevokeSecurity security) {
        this.security = security;
        return this;
    }
}