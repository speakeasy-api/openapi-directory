package openapisdk.models.operations;



public class PostPortfolioAnalysisReturnResponse {
    public String contentType;
    public PostPortfolioAnalysisReturnResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PostPortfolioAnalysisReturnResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public PostPortfolioAnalysisReturn200ApplicationJson postPortfolioAnalysisReturn200ApplicationJSONObject;
    public PostPortfolioAnalysisReturnResponse withPostPortfolioAnalysisReturn200ApplicationJsonObject(PostPortfolioAnalysisReturn200ApplicationJson postPortfolioAnalysisReturn200ApplicationJSONObject) {
        this.postPortfolioAnalysisReturn200ApplicationJSONObject = postPortfolioAnalysisReturn200ApplicationJSONObject;
        return this;
    }
}