package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CertificatemanagerProjectsLocationsCertificateIssuanceConfigsCreateRequest {
    public CertificatemanagerProjectsLocationsCertificateIssuanceConfigsCreatePathParams pathParams;
    public CertificatemanagerProjectsLocationsCertificateIssuanceConfigsCreateRequest withPathParams(CertificatemanagerProjectsLocationsCertificateIssuanceConfigsCreatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public CertificatemanagerProjectsLocationsCertificateIssuanceConfigsCreateQueryParams queryParams;
    public CertificatemanagerProjectsLocationsCertificateIssuanceConfigsCreateRequest withQueryParams(CertificatemanagerProjectsLocationsCertificateIssuanceConfigsCreateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.CertificateIssuanceConfigInput request;
    public CertificatemanagerProjectsLocationsCertificateIssuanceConfigsCreateRequest withRequest(openapisdk.models.shared.CertificateIssuanceConfigInput request) {
        this.request = request;
        return this;
    }
    public CertificatemanagerProjectsLocationsCertificateIssuanceConfigsCreateSecurity security;
    public CertificatemanagerProjectsLocationsCertificateIssuanceConfigsCreateRequest withSecurity(CertificatemanagerProjectsLocationsCertificateIssuanceConfigsCreateSecurity security) {
        this.security = security;
        return this;
    }
}