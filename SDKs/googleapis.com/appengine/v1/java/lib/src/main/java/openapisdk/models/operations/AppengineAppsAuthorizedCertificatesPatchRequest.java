package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AppengineAppsAuthorizedCertificatesPatchRequest {
    public AppengineAppsAuthorizedCertificatesPatchPathParams pathParams;
    public AppengineAppsAuthorizedCertificatesPatchRequest withPathParams(AppengineAppsAuthorizedCertificatesPatchPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public AppengineAppsAuthorizedCertificatesPatchQueryParams queryParams;
    public AppengineAppsAuthorizedCertificatesPatchRequest withQueryParams(AppengineAppsAuthorizedCertificatesPatchQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.AuthorizedCertificate request;
    public AppengineAppsAuthorizedCertificatesPatchRequest withRequest(openapisdk.models.shared.AuthorizedCertificate request) {
        this.request = request;
        return this;
    }
    public AppengineAppsAuthorizedCertificatesPatchSecurity security;
    public AppengineAppsAuthorizedCertificatesPatchRequest withSecurity(AppengineAppsAuthorizedCertificatesPatchSecurity security) {
        this.security = security;
        return this;
    }
}