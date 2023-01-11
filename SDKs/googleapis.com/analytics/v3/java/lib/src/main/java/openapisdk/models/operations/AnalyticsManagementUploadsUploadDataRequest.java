package openapisdk.models.operations;



public class AnalyticsManagementUploadsUploadDataRequest {
    public AnalyticsManagementUploadsUploadDataPathParams pathParams;
    public AnalyticsManagementUploadsUploadDataRequest withPathParams(AnalyticsManagementUploadsUploadDataPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public AnalyticsManagementUploadsUploadDataQueryParams queryParams;
    public AnalyticsManagementUploadsUploadDataRequest withQueryParams(AnalyticsManagementUploadsUploadDataQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public AnalyticsManagementUploadsUploadDataSecurity security;
    public AnalyticsManagementUploadsUploadDataRequest withSecurity(AnalyticsManagementUploadsUploadDataSecurity security) {
        this.security = security;
        return this;
    }
}