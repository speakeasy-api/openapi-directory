package openapisdk.models.operations;



public class ContentPosInventoryResponse {
    public String contentType;
    public ContentPosInventoryResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.PosInventoryResponse posInventoryResponse;
    public ContentPosInventoryResponse withPosInventoryResponse(openapisdk.models.shared.PosInventoryResponse posInventoryResponse) {
        this.posInventoryResponse = posInventoryResponse;
        return this;
    }
    public Long statusCode;
    public ContentPosInventoryResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}