package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AnalyticsManagementRemarketingAudiencePatchRequest {
    public AnalyticsManagementRemarketingAudiencePatchPathParams pathParams;
    public AnalyticsManagementRemarketingAudiencePatchRequest withPathParams(AnalyticsManagementRemarketingAudiencePatchPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public AnalyticsManagementRemarketingAudiencePatchQueryParams queryParams;
    public AnalyticsManagementRemarketingAudiencePatchRequest withQueryParams(AnalyticsManagementRemarketingAudiencePatchQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.RemarketingAudienceInput request;
    public AnalyticsManagementRemarketingAudiencePatchRequest withRequest(openapisdk.models.shared.RemarketingAudienceInput request) {
        this.request = request;
        return this;
    }
    public AnalyticsManagementRemarketingAudiencePatchSecurity security;
    public AnalyticsManagementRemarketingAudiencePatchRequest withSecurity(AnalyticsManagementRemarketingAudiencePatchSecurity security) {
        this.security = security;
        return this;
    }
}