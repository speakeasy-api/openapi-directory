package openapisdk.models.operations;


public enum CreateAccessTokenApplicationJsonGrantTypeEnum {
    AUTHORIZATION_CODE("authorization_code"),
    CLIENT_CREDENTIALS("client_credentials"),
    REFRESH_TOKEN("refresh_token");

    public final String value;

    private CreateAccessTokenApplicationJsonGrantTypeEnum(String value) {
        this.value = value;
    }
}
