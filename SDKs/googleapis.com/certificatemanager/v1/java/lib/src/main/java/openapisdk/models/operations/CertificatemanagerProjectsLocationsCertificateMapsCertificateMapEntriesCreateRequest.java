package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CertificatemanagerProjectsLocationsCertificateMapsCertificateMapEntriesCreateRequest {
    public CertificatemanagerProjectsLocationsCertificateMapsCertificateMapEntriesCreatePathParams pathParams;
    public CertificatemanagerProjectsLocationsCertificateMapsCertificateMapEntriesCreateRequest withPathParams(CertificatemanagerProjectsLocationsCertificateMapsCertificateMapEntriesCreatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public CertificatemanagerProjectsLocationsCertificateMapsCertificateMapEntriesCreateQueryParams queryParams;
    public CertificatemanagerProjectsLocationsCertificateMapsCertificateMapEntriesCreateRequest withQueryParams(CertificatemanagerProjectsLocationsCertificateMapsCertificateMapEntriesCreateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.CertificateMapEntryInput request;
    public CertificatemanagerProjectsLocationsCertificateMapsCertificateMapEntriesCreateRequest withRequest(openapisdk.models.shared.CertificateMapEntryInput request) {
        this.request = request;
        return this;
    }
    public CertificatemanagerProjectsLocationsCertificateMapsCertificateMapEntriesCreateSecurity security;
    public CertificatemanagerProjectsLocationsCertificateMapsCertificateMapEntriesCreateRequest withSecurity(CertificatemanagerProjectsLocationsCertificateMapsCertificateMapEntriesCreateSecurity security) {
        this.security = security;
        return this;
    }
}