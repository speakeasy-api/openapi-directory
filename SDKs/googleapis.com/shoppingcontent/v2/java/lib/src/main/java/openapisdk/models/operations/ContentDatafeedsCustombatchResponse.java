package openapisdk.models.operations;



public class ContentDatafeedsCustombatchResponse {
    public String contentType;
    public ContentDatafeedsCustombatchResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DatafeedsCustomBatchResponse datafeedsCustomBatchResponse;
    public ContentDatafeedsCustombatchResponse withDatafeedsCustomBatchResponse(openapisdk.models.shared.DatafeedsCustomBatchResponse datafeedsCustomBatchResponse) {
        this.datafeedsCustomBatchResponse = datafeedsCustomBatchResponse;
        return this;
    }
    public Long statusCode;
    public ContentDatafeedsCustombatchResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}