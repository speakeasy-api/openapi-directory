package openapisdk.models.operations;



public class GetItemByIdResponse {
    public String contentType;
    public GetItemByIdResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Item item;
    public GetItemByIdResponse withItem(openapisdk.models.shared.Item item) {
        this.item = item;
        return this;
    }
    public Long statusCode;
    public GetItemByIdResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}