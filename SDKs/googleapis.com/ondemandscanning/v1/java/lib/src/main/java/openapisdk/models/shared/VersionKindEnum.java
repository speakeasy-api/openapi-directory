package openapisdk.models.shared;


public enum VersionKindEnum {
    VERSION_KIND_UNSPECIFIED("VERSION_KIND_UNSPECIFIED"),
    NORMAL("NORMAL"),
    MINIMUM("MINIMUM"),
    MAXIMUM("MAXIMUM");

    public final String value;

    private VersionKindEnum(String value) {
        this.value = value;
    }
}
