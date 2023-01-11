package openapisdk.models.operations;



public class FetchBalanceResponse {
    public String contentType;
    public FetchBalanceResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public FetchBalanceResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.ApiV2010AccountBalance apiV2010AccountBalance;
    public FetchBalanceResponse withApiV2010AccountBalance(openapisdk.models.shared.ApiV2010AccountBalance apiV2010AccountBalance) {
        this.apiV2010AccountBalance = apiV2010AccountBalance;
        return this;
    }
}