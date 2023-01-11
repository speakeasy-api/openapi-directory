package openapisdk.models.operations;



public class StoryIdRevealResponse {
    public String contentType;
    public StoryIdRevealResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public String loginButton;
    public StoryIdRevealResponse withLoginButton(String loginButton) {
        this.loginButton = loginButton;
        return this;
    }
    public Long statusCode;
    public StoryIdRevealResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object problemDetail;
    public StoryIdRevealResponse withProblemDetail(Object problemDetail) {
        this.problemDetail = problemDetail;
        return this;
    }
    public String revealJsPresenation;
    public StoryIdRevealResponse withRevealJsPresenation(String revealJsPresenation) {
        this.revealJsPresenation = revealJsPresenation;
        return this;
    }
}