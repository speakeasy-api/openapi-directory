package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GenerateTokenV2RequestBody {
    @SpeakeasyMetadata("form:name=assertion")
    public String assertion;
    public GenerateTokenV2RequestBody withAssertion(String assertion) {
        this.assertion = assertion;
        return this;
    }
    @SpeakeasyMetadata("form:name=grant_type")
    public GenerateTokenV2RequestBodyGrantTypeEnum grantType;
    public GenerateTokenV2RequestBody withGrantType(GenerateTokenV2RequestBodyGrantTypeEnum grantType) {
        this.grantType = grantType;
        return this;
    }
    @SpeakeasyMetadata("form:name=refresh_token")
    public String refreshToken;
    public GenerateTokenV2RequestBody withRefreshToken(String refreshToken) {
        this.refreshToken = refreshToken;
        return this;
    }
    @SpeakeasyMetadata("form:name=scope")
    public String scope;
    public GenerateTokenV2RequestBody withScope(String scope) {
        this.scope = scope;
        return this;
    }
    @SpeakeasyMetadata("form:name=valid_for")
    public Integer validFor;
    public GenerateTokenV2RequestBody withValidFor(Integer validFor) {
        this.validFor = validFor;
        return this;
    }
}