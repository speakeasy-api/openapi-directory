package openapisdk.models.operations;



public class FetchTrustProductResponse {
    public String contentType;
    public FetchTrustProductResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public FetchTrustProductResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.TrusthubV1TrustProduct trusthubV1TrustProduct;
    public FetchTrustProductResponse withTrusthubV1TrustProduct(openapisdk.models.shared.TrusthubV1TrustProduct trusthubV1TrustProduct) {
        this.trusthubV1TrustProduct = trusthubV1TrustProduct;
        return this;
    }
}