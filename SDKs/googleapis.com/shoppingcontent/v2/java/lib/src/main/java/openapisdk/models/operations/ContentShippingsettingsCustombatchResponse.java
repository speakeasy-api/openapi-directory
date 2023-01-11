package openapisdk.models.operations;



public class ContentShippingsettingsCustombatchResponse {
    public String contentType;
    public ContentShippingsettingsCustombatchResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ShippingsettingsCustomBatchResponse shippingsettingsCustomBatchResponse;
    public ContentShippingsettingsCustombatchResponse withShippingsettingsCustomBatchResponse(openapisdk.models.shared.ShippingsettingsCustomBatchResponse shippingsettingsCustomBatchResponse) {
        this.shippingsettingsCustomBatchResponse = shippingsettingsCustomBatchResponse;
        return this;
    }
    public Long statusCode;
    public ContentShippingsettingsCustombatchResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}