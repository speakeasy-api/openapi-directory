package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateTokenCreateTokenRequest {
    @SpeakeasyMetadata("form:name=ClientSecret")
    public String clientSecret;
    public CreateTokenCreateTokenRequest withClientSecret(String clientSecret) {
        this.clientSecret = clientSecret;
        return this;
    }
    @SpeakeasyMetadata("form:name=ClientSid")
    public String clientSid;
    public CreateTokenCreateTokenRequest withClientSid(String clientSid) {
        this.clientSid = clientSid;
        return this;
    }
    @SpeakeasyMetadata("form:name=Code")
    public String code;
    public CreateTokenCreateTokenRequest withCode(String code) {
        this.code = code;
        return this;
    }
    @SpeakeasyMetadata("form:name=CodeVerifier")
    public String codeVerifier;
    public CreateTokenCreateTokenRequest withCodeVerifier(String codeVerifier) {
        this.codeVerifier = codeVerifier;
        return this;
    }
    @SpeakeasyMetadata("form:name=DeviceCode")
    public String deviceCode;
    public CreateTokenCreateTokenRequest withDeviceCode(String deviceCode) {
        this.deviceCode = deviceCode;
        return this;
    }
    @SpeakeasyMetadata("form:name=DeviceId")
    public String deviceId;
    public CreateTokenCreateTokenRequest withDeviceId(String deviceId) {
        this.deviceId = deviceId;
        return this;
    }
    @SpeakeasyMetadata("form:name=GrantType")
    public String grantType;
    public CreateTokenCreateTokenRequest withGrantType(String grantType) {
        this.grantType = grantType;
        return this;
    }
    @SpeakeasyMetadata("form:name=RefreshToken")
    public String refreshToken;
    public CreateTokenCreateTokenRequest withRefreshToken(String refreshToken) {
        this.refreshToken = refreshToken;
        return this;
    }
}