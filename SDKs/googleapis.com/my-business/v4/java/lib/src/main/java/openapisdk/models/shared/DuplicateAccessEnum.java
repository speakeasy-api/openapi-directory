package openapisdk.models.shared;


public enum DuplicateAccessEnum {
    ACCESS_UNSPECIFIED("ACCESS_UNSPECIFIED"),
    ACCESS_UNKNOWN("ACCESS_UNKNOWN"),
    ALLOWED("ALLOWED"),
    INSUFFICIENT("INSUFFICIENT");

    public final String value;

    private DuplicateAccessEnum(String value) {
        this.value = value;
    }
}
