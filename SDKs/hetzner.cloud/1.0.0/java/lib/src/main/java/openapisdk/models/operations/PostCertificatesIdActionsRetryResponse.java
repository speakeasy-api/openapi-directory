package openapisdk.models.operations;



public class PostCertificatesIdActionsRetryResponse {
    public PostCertificatesIdActionsRetryActionResponse actionResponse;
    public PostCertificatesIdActionsRetryResponse withActionResponse(PostCertificatesIdActionsRetryActionResponse actionResponse) {
        this.actionResponse = actionResponse;
        return this;
    }
    public String contentType;
    public PostCertificatesIdActionsRetryResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PostCertificatesIdActionsRetryResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}