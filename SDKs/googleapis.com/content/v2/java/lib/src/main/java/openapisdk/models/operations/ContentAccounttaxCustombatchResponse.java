package openapisdk.models.operations;



public class ContentAccounttaxCustombatchResponse {
    public openapisdk.models.shared.AccounttaxCustomBatchResponse accounttaxCustomBatchResponse;
    public ContentAccounttaxCustombatchResponse withAccounttaxCustomBatchResponse(openapisdk.models.shared.AccounttaxCustomBatchResponse accounttaxCustomBatchResponse) {
        this.accounttaxCustomBatchResponse = accounttaxCustomBatchResponse;
        return this;
    }
    public String contentType;
    public ContentAccounttaxCustombatchResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ContentAccounttaxCustombatchResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}