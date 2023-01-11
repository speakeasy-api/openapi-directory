package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class ExchangeAuthCodeRequestBody {
    @JsonProperty("code")
    public String code;
    public ExchangeAuthCodeRequestBody withCode(String code) {
        this.code = code;
        return this;
    }
    @JsonProperty("grant_type")
    public ExchangeAuthCodeRequestBodyGrantTypeEnum grantType;
    public ExchangeAuthCodeRequestBody withGrantType(ExchangeAuthCodeRequestBodyGrantTypeEnum grantType) {
        this.grantType = grantType;
        return this;
    }
    @JsonProperty("redirect_uri")
    public String redirectUri;
    public ExchangeAuthCodeRequestBody withRedirectUri(String redirectUri) {
        this.redirectUri = redirectUri;
        return this;
    }
}