package openapisdk.models.operations;



public class AnalyticsManagementRemarketingAudiencePatchResponse {
    public String contentType;
    public AnalyticsManagementRemarketingAudiencePatchResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.RemarketingAudience remarketingAudience;
    public AnalyticsManagementRemarketingAudiencePatchResponse withRemarketingAudience(openapisdk.models.shared.RemarketingAudience remarketingAudience) {
        this.remarketingAudience = remarketingAudience;
        return this;
    }
    public Long statusCode;
    public AnalyticsManagementRemarketingAudiencePatchResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}