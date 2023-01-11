package openapisdk.models.operations;



public class SessionsIdViewsPostResponse {
    public String contentType;
    public SessionsIdViewsPostResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public SessionsIdViewsPostResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object problemDetail;
    public SessionsIdViewsPostResponse withProblemDetail(Object problemDetail) {
        this.problemDetail = problemDetail;
        return this;
    }
    public openapisdk.models.shared.View view;
    public SessionsIdViewsPostResponse withView(openapisdk.models.shared.View view) {
        this.view = view;
        return this;
    }
}