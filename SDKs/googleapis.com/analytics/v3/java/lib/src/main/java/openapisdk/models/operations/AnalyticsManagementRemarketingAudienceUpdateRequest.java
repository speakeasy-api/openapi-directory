package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AnalyticsManagementRemarketingAudienceUpdateRequest {
    public AnalyticsManagementRemarketingAudienceUpdatePathParams pathParams;
    public AnalyticsManagementRemarketingAudienceUpdateRequest withPathParams(AnalyticsManagementRemarketingAudienceUpdatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public AnalyticsManagementRemarketingAudienceUpdateQueryParams queryParams;
    public AnalyticsManagementRemarketingAudienceUpdateRequest withQueryParams(AnalyticsManagementRemarketingAudienceUpdateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.RemarketingAudienceInput request;
    public AnalyticsManagementRemarketingAudienceUpdateRequest withRequest(openapisdk.models.shared.RemarketingAudienceInput request) {
        this.request = request;
        return this;
    }
    public AnalyticsManagementRemarketingAudienceUpdateSecurity security;
    public AnalyticsManagementRemarketingAudienceUpdateRequest withSecurity(AnalyticsManagementRemarketingAudienceUpdateSecurity security) {
        this.security = security;
        return this;
    }
}