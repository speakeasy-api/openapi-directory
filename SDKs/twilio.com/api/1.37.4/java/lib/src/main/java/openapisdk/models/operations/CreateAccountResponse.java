package openapisdk.models.operations;



public class CreateAccountResponse {
    public String contentType;
    public CreateAccountResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public CreateAccountResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.ApiV2010Account apiV2010Account;
    public CreateAccountResponse withApiV2010Account(openapisdk.models.shared.ApiV2010Account apiV2010Account) {
        this.apiV2010Account = apiV2010Account;
        return this;
    }
}