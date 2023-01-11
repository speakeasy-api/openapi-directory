package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CertificatemanagerProjectsLocationsCertificatesCreateRequest {
    public CertificatemanagerProjectsLocationsCertificatesCreatePathParams pathParams;
    public CertificatemanagerProjectsLocationsCertificatesCreateRequest withPathParams(CertificatemanagerProjectsLocationsCertificatesCreatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public CertificatemanagerProjectsLocationsCertificatesCreateQueryParams queryParams;
    public CertificatemanagerProjectsLocationsCertificatesCreateRequest withQueryParams(CertificatemanagerProjectsLocationsCertificatesCreateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.CertificateInput request;
    public CertificatemanagerProjectsLocationsCertificatesCreateRequest withRequest(openapisdk.models.shared.CertificateInput request) {
        this.request = request;
        return this;
    }
    public CertificatemanagerProjectsLocationsCertificatesCreateSecurity security;
    public CertificatemanagerProjectsLocationsCertificatesCreateRequest withSecurity(CertificatemanagerProjectsLocationsCertificatesCreateSecurity security) {
        this.security = security;
        return this;
    }
}