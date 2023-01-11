package openapisdk.models.operations;



public class CloudsupportCasesAttachmentsListResponse {
    public String contentType;
    public CloudsupportCasesAttachmentsListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ListAttachmentsResponse listAttachmentsResponse;
    public CloudsupportCasesAttachmentsListResponse withListAttachmentsResponse(openapisdk.models.shared.ListAttachmentsResponse listAttachmentsResponse) {
        this.listAttachmentsResponse = listAttachmentsResponse;
        return this;
    }
    public Long statusCode;
    public CloudsupportCasesAttachmentsListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}