package openapisdk.models.operations;



public class SessionsIdViewsGetResponse {
    public String contentType;
    public SessionsIdViewsGetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public SessionsIdViewsGetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object problemDetail;
    public SessionsIdViewsGetResponse withProblemDetail(Object problemDetail) {
        this.problemDetail = problemDetail;
        return this;
    }
    public openapisdk.models.shared.View[] views;
    public SessionsIdViewsGetResponse withViews(openapisdk.models.shared.View[] views) {
        this.views = views;
        return this;
    }
}