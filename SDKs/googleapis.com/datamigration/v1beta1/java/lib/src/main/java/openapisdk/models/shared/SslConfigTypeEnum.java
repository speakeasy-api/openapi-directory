package openapisdk.models.shared;


public enum SslConfigTypeEnum {
    SSL_TYPE_UNSPECIFIED("SSL_TYPE_UNSPECIFIED"),
    SERVER_ONLY("SERVER_ONLY"),
    SERVER_CLIENT("SERVER_CLIENT");

    public final String value;

    private SslConfigTypeEnum(String value) {
        this.value = value;
    }
}
