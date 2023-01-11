package openapisdk.models.operations;



public class CreateTrustProductResponse {
    public String contentType;
    public CreateTrustProductResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public CreateTrustProductResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.TrusthubV1TrustProduct trusthubV1TrustProduct;
    public CreateTrustProductResponse withTrusthubV1TrustProduct(openapisdk.models.shared.TrusthubV1TrustProduct trusthubV1TrustProduct) {
        this.trusthubV1TrustProduct = trusthubV1TrustProduct;
        return this;
    }
}