package openapisdk.models.operations;



public class ContentLiasettingsCustombatchResponse {
    public String contentType;
    public ContentLiasettingsCustombatchResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.LiasettingsCustomBatchResponse liasettingsCustomBatchResponse;
    public ContentLiasettingsCustombatchResponse withLiasettingsCustomBatchResponse(openapisdk.models.shared.LiasettingsCustomBatchResponse liasettingsCustomBatchResponse) {
        this.liasettingsCustomBatchResponse = liasettingsCustomBatchResponse;
        return this;
    }
    public Long statusCode;
    public ContentLiasettingsCustombatchResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}