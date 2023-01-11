package openapisdk.models.operations;



public class PostPortfolioAnalysisAlphaResponse {
    public String contentType;
    public PostPortfolioAnalysisAlphaResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PostPortfolioAnalysisAlphaResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public PostPortfolioAnalysisAlpha200ApplicationJson postPortfolioAnalysisAlpha200ApplicationJSONObject;
    public PostPortfolioAnalysisAlphaResponse withPostPortfolioAnalysisAlpha200ApplicationJsonObject(PostPortfolioAnalysisAlpha200ApplicationJson postPortfolioAnalysisAlpha200ApplicationJSONObject) {
        this.postPortfolioAnalysisAlpha200ApplicationJSONObject = postPortfolioAnalysisAlpha200ApplicationJSONObject;
        return this;
    }
}