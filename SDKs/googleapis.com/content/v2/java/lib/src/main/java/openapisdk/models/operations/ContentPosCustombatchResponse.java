package openapisdk.models.operations;



public class ContentPosCustombatchResponse {
    public String contentType;
    public ContentPosCustombatchResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.PosCustomBatchResponse posCustomBatchResponse;
    public ContentPosCustombatchResponse withPosCustomBatchResponse(openapisdk.models.shared.PosCustomBatchResponse posCustomBatchResponse) {
        this.posCustomBatchResponse = posCustomBatchResponse;
        return this;
    }
    public Long statusCode;
    public ContentPosCustombatchResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}