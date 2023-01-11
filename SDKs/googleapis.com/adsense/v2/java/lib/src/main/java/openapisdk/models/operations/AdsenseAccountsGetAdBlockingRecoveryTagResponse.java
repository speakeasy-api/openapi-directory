package openapisdk.models.operations;



public class AdsenseAccountsGetAdBlockingRecoveryTagResponse {
    public openapisdk.models.shared.AdBlockingRecoveryTag adBlockingRecoveryTag;
    public AdsenseAccountsGetAdBlockingRecoveryTagResponse withAdBlockingRecoveryTag(openapisdk.models.shared.AdBlockingRecoveryTag adBlockingRecoveryTag) {
        this.adBlockingRecoveryTag = adBlockingRecoveryTag;
        return this;
    }
    public String contentType;
    public AdsenseAccountsGetAdBlockingRecoveryTagResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public AdsenseAccountsGetAdBlockingRecoveryTagResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}