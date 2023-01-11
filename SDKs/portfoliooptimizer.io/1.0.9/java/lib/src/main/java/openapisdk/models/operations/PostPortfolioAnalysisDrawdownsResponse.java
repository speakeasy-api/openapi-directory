package openapisdk.models.operations;



public class PostPortfolioAnalysisDrawdownsResponse {
    public String contentType;
    public PostPortfolioAnalysisDrawdownsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PostPortfolioAnalysisDrawdownsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public PostPortfolioAnalysisDrawdowns200ApplicationJson postPortfolioAnalysisDrawdowns200ApplicationJSONObject;
    public PostPortfolioAnalysisDrawdownsResponse withPostPortfolioAnalysisDrawdowns200ApplicationJsonObject(PostPortfolioAnalysisDrawdowns200ApplicationJson postPortfolioAnalysisDrawdowns200ApplicationJSONObject) {
        this.postPortfolioAnalysisDrawdowns200ApplicationJSONObject = postPortfolioAnalysisDrawdowns200ApplicationJSONObject;
        return this;
    }
}