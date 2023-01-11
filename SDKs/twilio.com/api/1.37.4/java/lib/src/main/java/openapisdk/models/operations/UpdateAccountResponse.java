package openapisdk.models.operations;



public class UpdateAccountResponse {
    public String contentType;
    public UpdateAccountResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public UpdateAccountResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.ApiV2010Account apiV2010Account;
    public UpdateAccountResponse withApiV2010Account(openapisdk.models.shared.ApiV2010Account apiV2010Account) {
        this.apiV2010Account = apiV2010Account;
        return this;
    }
}