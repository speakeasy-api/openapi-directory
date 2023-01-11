package openapisdk.models.shared;


public enum NetworkTypeEnum {
    TYPE_UNSPECIFIED("TYPE_UNSPECIFIED"),
    CLIENT("CLIENT"),
    PRIVATE_("PRIVATE");

    public final String value;

    private NetworkTypeEnum(String value) {
        this.value = value;
    }
}
