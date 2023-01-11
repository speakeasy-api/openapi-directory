package openapisdk.models.operations;



public class AnalyticsManagementGoalsPatchResponse {
    public String contentType;
    public AnalyticsManagementGoalsPatchResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Goal goal;
    public AnalyticsManagementGoalsPatchResponse withGoal(openapisdk.models.shared.Goal goal) {
        this.goal = goal;
        return this;
    }
    public Long statusCode;
    public AnalyticsManagementGoalsPatchResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}