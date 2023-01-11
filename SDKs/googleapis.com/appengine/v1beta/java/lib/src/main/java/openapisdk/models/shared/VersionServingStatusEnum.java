package openapisdk.models.shared;


public enum VersionServingStatusEnum {
    SERVING_STATUS_UNSPECIFIED("SERVING_STATUS_UNSPECIFIED"),
    SERVING("SERVING"),
    STOPPED("STOPPED");

    public final String value;

    private VersionServingStatusEnum(String value) {
        this.value = value;
    }
}
