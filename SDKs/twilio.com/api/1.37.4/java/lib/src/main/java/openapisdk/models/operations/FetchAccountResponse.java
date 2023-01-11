package openapisdk.models.operations;



public class FetchAccountResponse {
    public String contentType;
    public FetchAccountResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public FetchAccountResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.ApiV2010Account apiV2010Account;
    public FetchAccountResponse withApiV2010Account(openapisdk.models.shared.ApiV2010Account apiV2010Account) {
        this.apiV2010Account = apiV2010Account;
        return this;
    }
}