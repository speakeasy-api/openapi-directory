package openapisdk.models.operations;



public class PostPortfolioAnalysisTrackingErrorResponse {
    public String contentType;
    public PostPortfolioAnalysisTrackingErrorResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PostPortfolioAnalysisTrackingErrorResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public PostPortfolioAnalysisTrackingError200ApplicationJson postPortfolioAnalysisTrackingError200ApplicationJSONObject;
    public PostPortfolioAnalysisTrackingErrorResponse withPostPortfolioAnalysisTrackingError200ApplicationJsonObject(PostPortfolioAnalysisTrackingError200ApplicationJson postPortfolioAnalysisTrackingError200ApplicationJSONObject) {
        this.postPortfolioAnalysisTrackingError200ApplicationJSONObject = postPortfolioAnalysisTrackingError200ApplicationJSONObject;
        return this;
    }
}