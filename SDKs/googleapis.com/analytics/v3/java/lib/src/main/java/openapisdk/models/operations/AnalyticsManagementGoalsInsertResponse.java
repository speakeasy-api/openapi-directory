package openapisdk.models.operations;



public class AnalyticsManagementGoalsInsertResponse {
    public String contentType;
    public AnalyticsManagementGoalsInsertResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Goal goal;
    public AnalyticsManagementGoalsInsertResponse withGoal(openapisdk.models.shared.Goal goal) {
        this.goal = goal;
        return this;
    }
    public Long statusCode;
    public AnalyticsManagementGoalsInsertResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}