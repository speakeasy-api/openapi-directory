package openapisdk.models.shared;


public enum AuthorizationCodeGrantTypeEnum {
    AUTHORIZATION_CODE("authorization_code"),
    CLIENT_CREDENTIALS("client_credentials");

    public final String value;

    private AuthorizationCodeGrantTypeEnum(String value) {
        this.value = value;
    }
}
