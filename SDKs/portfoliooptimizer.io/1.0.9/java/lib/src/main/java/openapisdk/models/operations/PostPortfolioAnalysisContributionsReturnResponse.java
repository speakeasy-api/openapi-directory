package openapisdk.models.operations;



public class PostPortfolioAnalysisContributionsReturnResponse {
    public String contentType;
    public PostPortfolioAnalysisContributionsReturnResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PostPortfolioAnalysisContributionsReturnResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public PostPortfolioAnalysisContributionsReturn200ApplicationJson postPortfolioAnalysisContributionsReturn200ApplicationJSONObject;
    public PostPortfolioAnalysisContributionsReturnResponse withPostPortfolioAnalysisContributionsReturn200ApplicationJsonObject(PostPortfolioAnalysisContributionsReturn200ApplicationJson postPortfolioAnalysisContributionsReturn200ApplicationJSONObject) {
        this.postPortfolioAnalysisContributionsReturn200ApplicationJSONObject = postPortfolioAnalysisContributionsReturn200ApplicationJSONObject;
        return this;
    }
}