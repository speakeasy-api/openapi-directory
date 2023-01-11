package openapisdk.models.operations;



public class BusinessprofileperformanceLocationsSearchkeywordsImpressionsMonthlyListResponse {
    public String contentType;
    public BusinessprofileperformanceLocationsSearchkeywordsImpressionsMonthlyListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ListSearchKeywordImpressionsMonthlyResponse listSearchKeywordImpressionsMonthlyResponse;
    public BusinessprofileperformanceLocationsSearchkeywordsImpressionsMonthlyListResponse withListSearchKeywordImpressionsMonthlyResponse(openapisdk.models.shared.ListSearchKeywordImpressionsMonthlyResponse listSearchKeywordImpressionsMonthlyResponse) {
        this.listSearchKeywordImpressionsMonthlyResponse = listSearchKeywordImpressionsMonthlyResponse;
        return this;
    }
    public Long statusCode;
    public BusinessprofileperformanceLocationsSearchkeywordsImpressionsMonthlyListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}