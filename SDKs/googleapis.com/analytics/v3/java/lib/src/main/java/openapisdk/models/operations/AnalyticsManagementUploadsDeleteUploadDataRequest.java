package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AnalyticsManagementUploadsDeleteUploadDataRequest {
    public AnalyticsManagementUploadsDeleteUploadDataPathParams pathParams;
    public AnalyticsManagementUploadsDeleteUploadDataRequest withPathParams(AnalyticsManagementUploadsDeleteUploadDataPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public AnalyticsManagementUploadsDeleteUploadDataQueryParams queryParams;
    public AnalyticsManagementUploadsDeleteUploadDataRequest withQueryParams(AnalyticsManagementUploadsDeleteUploadDataQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.AnalyticsDataimportDeleteUploadDataRequest request;
    public AnalyticsManagementUploadsDeleteUploadDataRequest withRequest(openapisdk.models.shared.AnalyticsDataimportDeleteUploadDataRequest request) {
        this.request = request;
        return this;
    }
    public AnalyticsManagementUploadsDeleteUploadDataSecurity security;
    public AnalyticsManagementUploadsDeleteUploadDataRequest withSecurity(AnalyticsManagementUploadsDeleteUploadDataSecurity security) {
        this.security = security;
        return this;
    }
}