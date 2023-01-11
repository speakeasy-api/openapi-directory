package openapisdk.models.shared;


public enum AuthConfigAuthTypeEnum {
    AUTH_TYPE_UNSPECIFIED("AUTH_TYPE_UNSPECIFIED"),
    USER_PASSWORD("USER_PASSWORD"),
    OAUTH2_JWT_BEARER("OAUTH2_JWT_BEARER"),
    OAUTH2_CLIENT_CREDENTIALS("OAUTH2_CLIENT_CREDENTIALS"),
    SSH_PUBLIC_KEY("SSH_PUBLIC_KEY"),
    OAUTH2_AUTH_CODE_FLOW("OAUTH2_AUTH_CODE_FLOW");

    public final String value;

    private AuthConfigAuthTypeEnum(String value) {
        this.value = value;
    }
}
