package openapisdk.models.operations;



public class GetReviewsSearchJsonResponse {
    public String contentType;
    public GetReviewsSearchJsonResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetReviewsSearchJsonResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public GetReviewsSearchJson200ApplicationJson getReviewsSearchJSON200ApplicationJSONObject;
    public GetReviewsSearchJsonResponse withGetReviewsSearchJson200ApplicationJsonObject(GetReviewsSearchJson200ApplicationJson getReviewsSearchJSON200ApplicationJSONObject) {
        this.getReviewsSearchJSON200ApplicationJSONObject = getReviewsSearchJSON200ApplicationJSONObject;
        return this;
    }
}