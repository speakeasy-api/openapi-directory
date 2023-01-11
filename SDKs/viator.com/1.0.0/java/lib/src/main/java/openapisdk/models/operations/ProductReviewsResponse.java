package openapisdk.models.operations;



public class ProductReviewsResponse {
    public String contentType;
    public ProductReviewsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ProductReviewsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public ProductReviews200ApplicationJson productReviews200ApplicationJSONObject;
    public ProductReviewsResponse withProductReviews200ApplicationJsonObject(ProductReviews200ApplicationJson productReviews200ApplicationJSONObject) {
        this.productReviews200ApplicationJSONObject = productReviews200ApplicationJSONObject;
        return this;
    }
}