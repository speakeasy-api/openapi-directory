package openapisdk.models.shared;


public enum VersionFileStatusEnum {
    STATUS_UNSPECIFIED("STATUS_UNSPECIFIED"),
    EXPECTED("EXPECTED"),
    ACTIVE("ACTIVE");

    public final String value;

    private VersionFileStatusEnum(String value) {
        this.value = value;
    }
}
