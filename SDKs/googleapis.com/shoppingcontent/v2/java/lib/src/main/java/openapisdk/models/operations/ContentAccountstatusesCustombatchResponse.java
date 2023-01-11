package openapisdk.models.operations;



public class ContentAccountstatusesCustombatchResponse {
    public openapisdk.models.shared.AccountstatusesCustomBatchResponse accountstatusesCustomBatchResponse;
    public ContentAccountstatusesCustombatchResponse withAccountstatusesCustomBatchResponse(openapisdk.models.shared.AccountstatusesCustomBatchResponse accountstatusesCustomBatchResponse) {
        this.accountstatusesCustomBatchResponse = accountstatusesCustomBatchResponse;
        return this;
    }
    public String contentType;
    public ContentAccountstatusesCustombatchResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ContentAccountstatusesCustombatchResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}