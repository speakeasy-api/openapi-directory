package openapisdk.models.operations;



public class GetAllProductsInPosResponse {
    public String contentType;
    public GetAllProductsInPosResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ProductResponse[] productResponses;
    public GetAllProductsInPosResponse withProductResponses(openapisdk.models.shared.ProductResponse[] productResponses) {
        this.productResponses = productResponses;
        return this;
    }
    public Long statusCode;
    public GetAllProductsInPosResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}