package openapisdk.models.operations;



public class AnalyticsManagementGoalsUpdateResponse {
    public String contentType;
    public AnalyticsManagementGoalsUpdateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Goal goal;
    public AnalyticsManagementGoalsUpdateResponse withGoal(openapisdk.models.shared.Goal goal) {
        this.goal = goal;
        return this;
    }
    public Long statusCode;
    public AnalyticsManagementGoalsUpdateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}