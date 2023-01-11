package openapisdk.models.operations;



public class PostPortfolioAnalysisBetaResponse {
    public String contentType;
    public PostPortfolioAnalysisBetaResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PostPortfolioAnalysisBetaResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public PostPortfolioAnalysisBeta200ApplicationJson postPortfolioAnalysisBeta200ApplicationJSONObject;
    public PostPortfolioAnalysisBetaResponse withPostPortfolioAnalysisBeta200ApplicationJsonObject(PostPortfolioAnalysisBeta200ApplicationJson postPortfolioAnalysisBeta200ApplicationJSONObject) {
        this.postPortfolioAnalysisBeta200ApplicationJSONObject = postPortfolioAnalysisBeta200ApplicationJSONObject;
        return this;
    }
}