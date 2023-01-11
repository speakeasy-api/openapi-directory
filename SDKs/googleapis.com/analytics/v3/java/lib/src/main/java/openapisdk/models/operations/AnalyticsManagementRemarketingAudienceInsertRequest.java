package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AnalyticsManagementRemarketingAudienceInsertRequest {
    public AnalyticsManagementRemarketingAudienceInsertPathParams pathParams;
    public AnalyticsManagementRemarketingAudienceInsertRequest withPathParams(AnalyticsManagementRemarketingAudienceInsertPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public AnalyticsManagementRemarketingAudienceInsertQueryParams queryParams;
    public AnalyticsManagementRemarketingAudienceInsertRequest withQueryParams(AnalyticsManagementRemarketingAudienceInsertQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.RemarketingAudienceInput request;
    public AnalyticsManagementRemarketingAudienceInsertRequest withRequest(openapisdk.models.shared.RemarketingAudienceInput request) {
        this.request = request;
        return this;
    }
    public AnalyticsManagementRemarketingAudienceInsertSecurity security;
    public AnalyticsManagementRemarketingAudienceInsertRequest withSecurity(AnalyticsManagementRemarketingAudienceInsertSecurity security) {
        this.security = security;
        return this;
    }
}