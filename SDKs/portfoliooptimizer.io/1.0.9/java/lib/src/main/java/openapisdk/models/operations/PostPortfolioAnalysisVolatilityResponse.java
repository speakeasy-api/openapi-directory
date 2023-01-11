package openapisdk.models.operations;



public class PostPortfolioAnalysisVolatilityResponse {
    public String contentType;
    public PostPortfolioAnalysisVolatilityResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PostPortfolioAnalysisVolatilityResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public PostPortfolioAnalysisVolatility200ApplicationJson postPortfolioAnalysisVolatility200ApplicationJSONObject;
    public PostPortfolioAnalysisVolatilityResponse withPostPortfolioAnalysisVolatility200ApplicationJsonObject(PostPortfolioAnalysisVolatility200ApplicationJson postPortfolioAnalysisVolatility200ApplicationJSONObject) {
        this.postPortfolioAnalysisVolatility200ApplicationJSONObject = postPortfolioAnalysisVolatility200ApplicationJSONObject;
        return this;
    }
}