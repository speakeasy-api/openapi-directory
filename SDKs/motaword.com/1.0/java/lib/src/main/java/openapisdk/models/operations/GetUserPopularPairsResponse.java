package openapisdk.models.operations;



public class GetUserPopularPairsResponse {
    public String contentType;
    public GetUserPopularPairsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Error error;
    public GetUserPopularPairsResponse withError(openapisdk.models.shared.Error error) {
        this.error = error;
        return this;
    }
    public openapisdk.models.shared.PopularLanguagePairs popularLanguagePairs;
    public GetUserPopularPairsResponse withPopularLanguagePairs(openapisdk.models.shared.PopularLanguagePairs popularLanguagePairs) {
        this.popularLanguagePairs = popularLanguagePairs;
        return this;
    }
    public Long statusCode;
    public GetUserPopularPairsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}