package openapisdk.models.shared;


public enum DomainResourceStateEnum {
    RESOURCE_STATE_UNSPECIFIED("RESOURCE_STATE_UNSPECIFIED"),
    IMPORTABLE("IMPORTABLE"),
    UNSUPPORTED("UNSUPPORTED"),
    SUSPENDED("SUSPENDED"),
    EXPIRED("EXPIRED"),
    DELETED("DELETED");

    public final String value;

    private DomainResourceStateEnum(String value) {
        this.value = value;
    }
}
