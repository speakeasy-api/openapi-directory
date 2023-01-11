package openapisdk.models.operations;



public class ContentOrderreturnsListResponse {
    public String contentType;
    public ContentOrderreturnsListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.OrderreturnsListResponse orderreturnsListResponse;
    public ContentOrderreturnsListResponse withOrderreturnsListResponse(openapisdk.models.shared.OrderreturnsListResponse orderreturnsListResponse) {
        this.orderreturnsListResponse = orderreturnsListResponse;
        return this;
    }
    public Long statusCode;
    public ContentOrderreturnsListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}