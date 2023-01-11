package openapisdk.models.operations;



public class AnalyticsManagementRemarketingAudienceListResponse {
    public String contentType;
    public AnalyticsManagementRemarketingAudienceListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.RemarketingAudiences remarketingAudiences;
    public AnalyticsManagementRemarketingAudienceListResponse withRemarketingAudiences(openapisdk.models.shared.RemarketingAudiences remarketingAudiences) {
        this.remarketingAudiences = remarketingAudiences;
        return this;
    }
    public Long statusCode;
    public AnalyticsManagementRemarketingAudienceListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}