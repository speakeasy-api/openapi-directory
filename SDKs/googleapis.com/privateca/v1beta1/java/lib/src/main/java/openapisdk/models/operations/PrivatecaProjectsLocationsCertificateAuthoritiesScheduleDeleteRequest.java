package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PrivatecaProjectsLocationsCertificateAuthoritiesScheduleDeleteRequest {
    public PrivatecaProjectsLocationsCertificateAuthoritiesScheduleDeletePathParams pathParams;
    public PrivatecaProjectsLocationsCertificateAuthoritiesScheduleDeleteRequest withPathParams(PrivatecaProjectsLocationsCertificateAuthoritiesScheduleDeletePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public PrivatecaProjectsLocationsCertificateAuthoritiesScheduleDeleteQueryParams queryParams;
    public PrivatecaProjectsLocationsCertificateAuthoritiesScheduleDeleteRequest withQueryParams(PrivatecaProjectsLocationsCertificateAuthoritiesScheduleDeleteQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ScheduleDeleteCertificateAuthorityRequest request;
    public PrivatecaProjectsLocationsCertificateAuthoritiesScheduleDeleteRequest withRequest(openapisdk.models.shared.ScheduleDeleteCertificateAuthorityRequest request) {
        this.request = request;
        return this;
    }
    public PrivatecaProjectsLocationsCertificateAuthoritiesScheduleDeleteSecurity security;
    public PrivatecaProjectsLocationsCertificateAuthoritiesScheduleDeleteRequest withSecurity(PrivatecaProjectsLocationsCertificateAuthoritiesScheduleDeleteSecurity security) {
        this.security = security;
        return this;
    }
}