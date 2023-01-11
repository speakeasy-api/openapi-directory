package openapisdk.models.operations;



public class CloudsupportCasesCommentsCreateResponse {
    public openapisdk.models.shared.Comment comment;
    public CloudsupportCasesCommentsCreateResponse withComment(openapisdk.models.shared.Comment comment) {
        this.comment = comment;
        return this;
    }
    public String contentType;
    public CloudsupportCasesCommentsCreateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public CloudsupportCasesCommentsCreateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}