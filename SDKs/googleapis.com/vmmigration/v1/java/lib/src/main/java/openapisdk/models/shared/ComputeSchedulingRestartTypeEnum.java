package openapisdk.models.shared;


public enum ComputeSchedulingRestartTypeEnum {
    RESTART_TYPE_UNSPECIFIED("RESTART_TYPE_UNSPECIFIED"),
    AUTOMATIC_RESTART("AUTOMATIC_RESTART"),
    NO_AUTOMATIC_RESTART("NO_AUTOMATIC_RESTART");

    public final String value;

    private ComputeSchedulingRestartTypeEnum(String value) {
        this.value = value;
    }
}
