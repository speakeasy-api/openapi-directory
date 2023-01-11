package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AppengineAppsAuthorizedCertificatesCreateRequest {
    public AppengineAppsAuthorizedCertificatesCreatePathParams pathParams;
    public AppengineAppsAuthorizedCertificatesCreateRequest withPathParams(AppengineAppsAuthorizedCertificatesCreatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public AppengineAppsAuthorizedCertificatesCreateQueryParams queryParams;
    public AppengineAppsAuthorizedCertificatesCreateRequest withQueryParams(AppengineAppsAuthorizedCertificatesCreateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.AuthorizedCertificate request;
    public AppengineAppsAuthorizedCertificatesCreateRequest withRequest(openapisdk.models.shared.AuthorizedCertificate request) {
        this.request = request;
        return this;
    }
    public AppengineAppsAuthorizedCertificatesCreateSecurity security;
    public AppengineAppsAuthorizedCertificatesCreateRequest withSecurity(AppengineAppsAuthorizedCertificatesCreateSecurity security) {
        this.security = security;
        return this;
    }
}