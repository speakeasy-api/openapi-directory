package openapisdk.models.operations;



public class GetReviewsFormatResponse {
    public String contentType;
    public GetReviewsFormatResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public GetReviewsFormat200ApplicationJson getReviewsFormat200ApplicationJSONObject;
    public GetReviewsFormatResponse withGetReviewsFormat200ApplicationJsonObject(GetReviewsFormat200ApplicationJson getReviewsFormat200ApplicationJSONObject) {
        this.getReviewsFormat200ApplicationJSONObject = getReviewsFormat200ApplicationJSONObject;
        return this;
    }
    public Long statusCode;
    public GetReviewsFormatResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}