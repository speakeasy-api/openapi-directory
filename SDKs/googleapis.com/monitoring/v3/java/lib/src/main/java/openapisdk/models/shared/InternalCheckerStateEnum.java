package openapisdk.models.shared;


public enum InternalCheckerStateEnum {
    UNSPECIFIED("UNSPECIFIED"),
    CREATING("CREATING"),
    RUNNING("RUNNING");

    public final String value;

    private InternalCheckerStateEnum(String value) {
        this.value = value;
    }
}
