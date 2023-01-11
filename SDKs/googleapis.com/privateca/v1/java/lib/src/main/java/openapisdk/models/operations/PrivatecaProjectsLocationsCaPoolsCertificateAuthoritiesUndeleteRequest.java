package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PrivatecaProjectsLocationsCaPoolsCertificateAuthoritiesUndeleteRequest {
    public PrivatecaProjectsLocationsCaPoolsCertificateAuthoritiesUndeletePathParams pathParams;
    public PrivatecaProjectsLocationsCaPoolsCertificateAuthoritiesUndeleteRequest withPathParams(PrivatecaProjectsLocationsCaPoolsCertificateAuthoritiesUndeletePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public PrivatecaProjectsLocationsCaPoolsCertificateAuthoritiesUndeleteQueryParams queryParams;
    public PrivatecaProjectsLocationsCaPoolsCertificateAuthoritiesUndeleteRequest withQueryParams(PrivatecaProjectsLocationsCaPoolsCertificateAuthoritiesUndeleteQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.UndeleteCertificateAuthorityRequest request;
    public PrivatecaProjectsLocationsCaPoolsCertificateAuthoritiesUndeleteRequest withRequest(openapisdk.models.shared.UndeleteCertificateAuthorityRequest request) {
        this.request = request;
        return this;
    }
    public PrivatecaProjectsLocationsCaPoolsCertificateAuthoritiesUndeleteSecurity security;
    public PrivatecaProjectsLocationsCaPoolsCertificateAuthoritiesUndeleteRequest withSecurity(PrivatecaProjectsLocationsCaPoolsCertificateAuthoritiesUndeleteSecurity security) {
        this.security = security;
        return this;
    }
}