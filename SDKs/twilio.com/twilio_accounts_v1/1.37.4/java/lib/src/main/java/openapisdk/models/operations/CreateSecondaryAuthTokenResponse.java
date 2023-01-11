package openapisdk.models.operations;



public class CreateSecondaryAuthTokenResponse {
    public String contentType;
    public CreateSecondaryAuthTokenResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public CreateSecondaryAuthTokenResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.AccountsV1SecondaryAuthToken accountsV1SecondaryAuthToken;
    public CreateSecondaryAuthTokenResponse withAccountsV1SecondaryAuthToken(openapisdk.models.shared.AccountsV1SecondaryAuthToken accountsV1SecondaryAuthToken) {
        this.accountsV1SecondaryAuthToken = accountsV1SecondaryAuthToken;
        return this;
    }
}