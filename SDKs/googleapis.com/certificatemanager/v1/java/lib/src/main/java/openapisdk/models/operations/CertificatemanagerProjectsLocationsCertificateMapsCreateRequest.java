package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CertificatemanagerProjectsLocationsCertificateMapsCreateRequest {
    public CertificatemanagerProjectsLocationsCertificateMapsCreatePathParams pathParams;
    public CertificatemanagerProjectsLocationsCertificateMapsCreateRequest withPathParams(CertificatemanagerProjectsLocationsCertificateMapsCreatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public CertificatemanagerProjectsLocationsCertificateMapsCreateQueryParams queryParams;
    public CertificatemanagerProjectsLocationsCertificateMapsCreateRequest withQueryParams(CertificatemanagerProjectsLocationsCertificateMapsCreateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.CertificateMapInput request;
    public CertificatemanagerProjectsLocationsCertificateMapsCreateRequest withRequest(openapisdk.models.shared.CertificateMapInput request) {
        this.request = request;
        return this;
    }
    public CertificatemanagerProjectsLocationsCertificateMapsCreateSecurity security;
    public CertificatemanagerProjectsLocationsCertificateMapsCreateRequest withSecurity(CertificatemanagerProjectsLocationsCertificateMapsCreateSecurity security) {
        this.security = security;
        return this;
    }
}