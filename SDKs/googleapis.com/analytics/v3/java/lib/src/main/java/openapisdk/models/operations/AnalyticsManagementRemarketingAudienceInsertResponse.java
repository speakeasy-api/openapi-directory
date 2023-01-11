package openapisdk.models.operations;



public class AnalyticsManagementRemarketingAudienceInsertResponse {
    public String contentType;
    public AnalyticsManagementRemarketingAudienceInsertResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.RemarketingAudience remarketingAudience;
    public AnalyticsManagementRemarketingAudienceInsertResponse withRemarketingAudience(openapisdk.models.shared.RemarketingAudience remarketingAudience) {
        this.remarketingAudience = remarketingAudience;
        return this;
    }
    public Long statusCode;
    public AnalyticsManagementRemarketingAudienceInsertResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}