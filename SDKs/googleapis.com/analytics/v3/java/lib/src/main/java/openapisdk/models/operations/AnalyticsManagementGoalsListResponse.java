package openapisdk.models.operations;



public class AnalyticsManagementGoalsListResponse {
    public String contentType;
    public AnalyticsManagementGoalsListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Goals goals;
    public AnalyticsManagementGoalsListResponse withGoals(openapisdk.models.shared.Goals goals) {
        this.goals = goals;
        return this;
    }
    public Long statusCode;
    public AnalyticsManagementGoalsListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}