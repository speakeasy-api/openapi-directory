package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PrivatecaProjectsLocationsCertificateAuthoritiesRestoreRequest {
    public PrivatecaProjectsLocationsCertificateAuthoritiesRestorePathParams pathParams;
    public PrivatecaProjectsLocationsCertificateAuthoritiesRestoreRequest withPathParams(PrivatecaProjectsLocationsCertificateAuthoritiesRestorePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public PrivatecaProjectsLocationsCertificateAuthoritiesRestoreQueryParams queryParams;
    public PrivatecaProjectsLocationsCertificateAuthoritiesRestoreRequest withQueryParams(PrivatecaProjectsLocationsCertificateAuthoritiesRestoreQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.RestoreCertificateAuthorityRequest request;
    public PrivatecaProjectsLocationsCertificateAuthoritiesRestoreRequest withRequest(openapisdk.models.shared.RestoreCertificateAuthorityRequest request) {
        this.request = request;
        return this;
    }
    public PrivatecaProjectsLocationsCertificateAuthoritiesRestoreSecurity security;
    public PrivatecaProjectsLocationsCertificateAuthoritiesRestoreRequest withSecurity(PrivatecaProjectsLocationsCertificateAuthoritiesRestoreSecurity security) {
        this.security = security;
        return this;
    }
}