package openapisdk.models.shared;


public enum PackageDesiredStateEnum {
    DESIRED_STATE_UNSPECIFIED("DESIRED_STATE_UNSPECIFIED"),
    INSTALLED("INSTALLED"),
    UPDATED("UPDATED"),
    REMOVED("REMOVED");

    public final String value;

    private PackageDesiredStateEnum(String value) {
        this.value = value;
    }
}
