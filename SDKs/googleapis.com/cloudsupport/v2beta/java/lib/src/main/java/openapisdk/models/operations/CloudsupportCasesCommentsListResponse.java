package openapisdk.models.operations;



public class CloudsupportCasesCommentsListResponse {
    public String contentType;
    public CloudsupportCasesCommentsListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ListCommentsResponse listCommentsResponse;
    public CloudsupportCasesCommentsListResponse withListCommentsResponse(openapisdk.models.shared.ListCommentsResponse listCommentsResponse) {
        this.listCommentsResponse = listCommentsResponse;
        return this;
    }
    public Long statusCode;
    public CloudsupportCasesCommentsListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}