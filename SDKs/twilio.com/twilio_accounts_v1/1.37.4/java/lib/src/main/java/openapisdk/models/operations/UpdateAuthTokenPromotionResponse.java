package openapisdk.models.operations;



public class UpdateAuthTokenPromotionResponse {
    public String contentType;
    public UpdateAuthTokenPromotionResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public UpdateAuthTokenPromotionResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.AccountsV1AuthTokenPromotion accountsV1AuthTokenPromotion;
    public UpdateAuthTokenPromotionResponse withAccountsV1AuthTokenPromotion(openapisdk.models.shared.AccountsV1AuthTokenPromotion accountsV1AuthTokenPromotion) {
        this.accountsV1AuthTokenPromotion = accountsV1AuthTokenPromotion;
        return this;
    }
}