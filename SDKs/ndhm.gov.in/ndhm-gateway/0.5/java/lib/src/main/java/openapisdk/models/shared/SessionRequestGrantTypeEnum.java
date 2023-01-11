package openapisdk.models.shared;


public enum SessionRequestGrantTypeEnum {
    CLIENT_CREDENTIALS("client_credentials"),
    REFRESH_TOKEN("refresh_token");

    public final String value;

    private SessionRequestGrantTypeEnum(String value) {
        this.value = value;
    }
}
