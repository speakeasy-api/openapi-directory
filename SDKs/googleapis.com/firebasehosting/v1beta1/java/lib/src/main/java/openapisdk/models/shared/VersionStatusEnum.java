package openapisdk.models.shared;


public enum VersionStatusEnum {
    VERSION_STATUS_UNSPECIFIED("VERSION_STATUS_UNSPECIFIED"),
    CREATED("CREATED"),
    FINALIZED("FINALIZED"),
    DELETED("DELETED"),
    ABANDONED("ABANDONED"),
    EXPIRED("EXPIRED"),
    CLONING("CLONING");

    public final String value;

    private VersionStatusEnum(String value) {
        this.value = value;
    }
}
