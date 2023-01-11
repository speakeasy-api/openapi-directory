package openapisdk.models.operations;



public class AppengineAppsAuthorizedCertificatesListRequest {
    public AppengineAppsAuthorizedCertificatesListPathParams pathParams;
    public AppengineAppsAuthorizedCertificatesListRequest withPathParams(AppengineAppsAuthorizedCertificatesListPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public AppengineAppsAuthorizedCertificatesListQueryParams queryParams;
    public AppengineAppsAuthorizedCertificatesListRequest withQueryParams(AppengineAppsAuthorizedCertificatesListQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public AppengineAppsAuthorizedCertificatesListSecurity security;
    public AppengineAppsAuthorizedCertificatesListRequest withSecurity(AppengineAppsAuthorizedCertificatesListSecurity security) {
        this.security = security;
        return this;
    }
}