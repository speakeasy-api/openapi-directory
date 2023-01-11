package openapisdk.models.shared;



public class AccessTokens {
    public String accessToken;
    public AccessTokens withAccessToken(String accessToken) {
        this.accessToken = accessToken;
        return this;
    }
    public Long accountId;
    public AccessTokens withAccountId(Long accountId) {
        this.accountId = accountId;
        return this;
    }
    public Long expiresOnDate;
    public AccessTokens withExpiresOnDate(Long expiresOnDate) {
        this.expiresOnDate = expiresOnDate;
        return this;
    }
    public Object[] scope;
    public AccessTokens withScope(Object[] scope) {
        this.scope = scope;
        return this;
    }
}