package openapisdk.models.operations;



public class TagServiceInventoryResponse {
    public String contentType;
    public TagServiceInventoryResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public TagServiceInventoryResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.Tag[] tags;
    public TagServiceInventoryResponse withTags(openapisdk.models.shared.Tag[] tags) {
        this.tags = tags;
        return this;
    }
}