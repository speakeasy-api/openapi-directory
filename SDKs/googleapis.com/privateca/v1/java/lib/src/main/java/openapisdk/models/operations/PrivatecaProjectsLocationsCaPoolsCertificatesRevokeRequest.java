package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PrivatecaProjectsLocationsCaPoolsCertificatesRevokeRequest {
    public PrivatecaProjectsLocationsCaPoolsCertificatesRevokePathParams pathParams;
    public PrivatecaProjectsLocationsCaPoolsCertificatesRevokeRequest withPathParams(PrivatecaProjectsLocationsCaPoolsCertificatesRevokePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public PrivatecaProjectsLocationsCaPoolsCertificatesRevokeQueryParams queryParams;
    public PrivatecaProjectsLocationsCaPoolsCertificatesRevokeRequest withQueryParams(PrivatecaProjectsLocationsCaPoolsCertificatesRevokeQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.RevokeCertificateRequest request;
    public PrivatecaProjectsLocationsCaPoolsCertificatesRevokeRequest withRequest(openapisdk.models.shared.RevokeCertificateRequest request) {
        this.request = request;
        return this;
    }
    public PrivatecaProjectsLocationsCaPoolsCertificatesRevokeSecurity security;
    public PrivatecaProjectsLocationsCaPoolsCertificatesRevokeRequest withSecurity(PrivatecaProjectsLocationsCaPoolsCertificatesRevokeSecurity security) {
        this.security = security;
        return this;
    }
}