package openapisdk.models.shared;


public enum NetworkConfigTypeEnum {
    TYPE_UNSPECIFIED("TYPE_UNSPECIFIED"),
    CLIENT("CLIENT"),
    PRIVATE_("PRIVATE");

    public final String value;

    private NetworkConfigTypeEnum(String value) {
        this.value = value;
    }
}
