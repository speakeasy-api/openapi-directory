package openapisdk.models.operations;



public class GetAllProductsV2Response {
    public String contentType;
    public GetAllProductsV2Response withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ProductResponse[] productResponses;
    public GetAllProductsV2Response withProductResponses(openapisdk.models.shared.ProductResponse[] productResponses) {
        this.productResponses = productResponses;
        return this;
    }
    public Long statusCode;
    public GetAllProductsV2Response withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}