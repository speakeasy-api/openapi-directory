package openapisdk.models.shared;


public enum PublicKeyTypeEnum {
    KEY_TYPE_UNSPECIFIED("KEY_TYPE_UNSPECIFIED"),
    PEM_RSA_KEY("PEM_RSA_KEY"),
    PEM_EC_KEY("PEM_EC_KEY");

    public final String value;

    private PublicKeyTypeEnum(String value) {
        this.value = value;
    }
}
