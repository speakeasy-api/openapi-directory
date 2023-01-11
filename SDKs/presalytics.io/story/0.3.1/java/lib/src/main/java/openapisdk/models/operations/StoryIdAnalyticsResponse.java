package openapisdk.models.operations;



public class StoryIdAnalyticsResponse {
    public String contentType;
    public StoryIdAnalyticsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public String loginButton;
    public StoryIdAnalyticsResponse withLoginButton(String loginButton) {
        this.loginButton = loginButton;
        return this;
    }
    public Long statusCode;
    public StoryIdAnalyticsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object problemDetail;
    public StoryIdAnalyticsResponse withProblemDetail(Object problemDetail) {
        this.problemDetail = problemDetail;
        return this;
    }
    public String revealJsPresenationWithAnalyticsData;
    public StoryIdAnalyticsResponse withRevealJsPresenationWithAnalyticsData(String revealJsPresenationWithAnalyticsData) {
        this.revealJsPresenationWithAnalyticsData = revealJsPresenationWithAnalyticsData;
        return this;
    }
}