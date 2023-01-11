package openapisdk.models.operations;



public class ViewsIdGetResponse {
    public String contentType;
    public ViewsIdGetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ViewsIdGetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object problemDetail;
    public ViewsIdGetResponse withProblemDetail(Object problemDetail) {
        this.problemDetail = problemDetail;
        return this;
    }
    public openapisdk.models.shared.View view;
    public ViewsIdGetResponse withView(openapisdk.models.shared.View view) {
        this.view = view;
        return this;
    }
}