package openapisdk.models.shared;


public enum ServiceAccountKeyPrivateKeyTypeEnum {
    TYPE_UNSPECIFIED("TYPE_UNSPECIFIED"),
    TYPE_PKCS12_FILE("TYPE_PKCS12_FILE"),
    TYPE_GOOGLE_CREDENTIALS_FILE("TYPE_GOOGLE_CREDENTIALS_FILE");

    public final String value;

    private ServiceAccountKeyPrivateKeyTypeEnum(String value) {
        this.value = value;
    }
}
