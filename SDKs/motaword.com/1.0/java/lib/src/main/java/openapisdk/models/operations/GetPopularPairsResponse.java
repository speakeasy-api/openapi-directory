package openapisdk.models.operations;



public class GetPopularPairsResponse {
    public String contentType;
    public GetPopularPairsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Error error;
    public GetPopularPairsResponse withError(openapisdk.models.shared.Error error) {
        this.error = error;
        return this;
    }
    public openapisdk.models.shared.PopularLanguagePairs popularLanguagePairs;
    public GetPopularPairsResponse withPopularLanguagePairs(openapisdk.models.shared.PopularLanguagePairs popularLanguagePairs) {
        this.popularLanguagePairs = popularLanguagePairs;
        return this;
    }
    public Long statusCode;
    public GetPopularPairsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}