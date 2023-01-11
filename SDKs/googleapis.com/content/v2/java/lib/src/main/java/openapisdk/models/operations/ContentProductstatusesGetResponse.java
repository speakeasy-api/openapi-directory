package openapisdk.models.operations;



public class ContentProductstatusesGetResponse {
    public String contentType;
    public ContentProductstatusesGetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ProductStatus productStatus;
    public ContentProductstatusesGetResponse withProductStatus(openapisdk.models.shared.ProductStatus productStatus) {
        this.productStatus = productStatus;
        return this;
    }
    public Long statusCode;
    public ContentProductstatusesGetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}