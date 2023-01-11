package openapisdk.models.operations;



public class AnalyticsManagementRemarketingAudienceGetResponse {
    public String contentType;
    public AnalyticsManagementRemarketingAudienceGetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.RemarketingAudience remarketingAudience;
    public AnalyticsManagementRemarketingAudienceGetResponse withRemarketingAudience(openapisdk.models.shared.RemarketingAudience remarketingAudience) {
        this.remarketingAudience = remarketingAudience;
        return this;
    }
    public Long statusCode;
    public AnalyticsManagementRemarketingAudienceGetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}