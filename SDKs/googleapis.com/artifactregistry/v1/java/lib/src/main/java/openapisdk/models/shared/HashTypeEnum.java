package openapisdk.models.shared;


public enum HashTypeEnum {
    HASH_TYPE_UNSPECIFIED("HASH_TYPE_UNSPECIFIED"),
    SHA256("SHA256"),
    MD5("MD5");

    public final String value;

    private HashTypeEnum(String value) {
        this.value = value;
    }
}
