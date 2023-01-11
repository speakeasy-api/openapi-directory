package openapisdk.models.operations;



public class UpdateTrustProductResponse {
    public String contentType;
    public UpdateTrustProductResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public UpdateTrustProductResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.TrusthubV1TrustProduct trusthubV1TrustProduct;
    public UpdateTrustProductResponse withTrusthubV1TrustProduct(openapisdk.models.shared.TrusthubV1TrustProduct trusthubV1TrustProduct) {
        this.trusthubV1TrustProduct = trusthubV1TrustProduct;
        return this;
    }
}