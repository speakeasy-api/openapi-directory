package openapisdk.models.shared;


public enum SoftwareRecipeDesiredStateEnum {
    DESIRED_STATE_UNSPECIFIED("DESIRED_STATE_UNSPECIFIED"),
    INSTALLED("INSTALLED"),
    UPDATED("UPDATED"),
    REMOVED("REMOVED");

    public final String value;

    private SoftwareRecipeDesiredStateEnum(String value) {
        this.value = value;
    }
}
