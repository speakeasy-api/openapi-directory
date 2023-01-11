package openapisdk.models.operations;



public class AnalyticsManagementRemarketingAudienceUpdateResponse {
    public String contentType;
    public AnalyticsManagementRemarketingAudienceUpdateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.RemarketingAudience remarketingAudience;
    public AnalyticsManagementRemarketingAudienceUpdateResponse withRemarketingAudience(openapisdk.models.shared.RemarketingAudience remarketingAudience) {
        this.remarketingAudience = remarketingAudience;
        return this;
    }
    public Long statusCode;
    public AnalyticsManagementRemarketingAudienceUpdateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}