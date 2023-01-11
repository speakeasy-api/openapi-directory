package openapisdk.models.operations;



public class AnalyticsManagementGoalsGetResponse {
    public String contentType;
    public AnalyticsManagementGoalsGetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Goal goal;
    public AnalyticsManagementGoalsGetResponse withGoal(openapisdk.models.shared.Goal goal) {
        this.goal = goal;
        return this;
    }
    public Long statusCode;
    public AnalyticsManagementGoalsGetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}