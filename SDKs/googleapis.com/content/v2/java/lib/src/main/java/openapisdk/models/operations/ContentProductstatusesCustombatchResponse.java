package openapisdk.models.operations;



public class ContentProductstatusesCustombatchResponse {
    public String contentType;
    public ContentProductstatusesCustombatchResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ProductstatusesCustomBatchResponse productstatusesCustomBatchResponse;
    public ContentProductstatusesCustombatchResponse withProductstatusesCustomBatchResponse(openapisdk.models.shared.ProductstatusesCustomBatchResponse productstatusesCustomBatchResponse) {
        this.productstatusesCustomBatchResponse = productstatusesCustomBatchResponse;
        return this;
    }
    public Long statusCode;
    public ContentProductstatusesCustombatchResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}