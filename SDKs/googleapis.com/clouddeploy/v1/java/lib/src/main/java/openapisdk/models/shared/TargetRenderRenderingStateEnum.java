package openapisdk.models.shared;


public enum TargetRenderRenderingStateEnum {
    TARGET_RENDER_STATE_UNSPECIFIED("TARGET_RENDER_STATE_UNSPECIFIED"),
    SUCCEEDED("SUCCEEDED"),
    FAILED("FAILED"),
    IN_PROGRESS("IN_PROGRESS");

    public final String value;

    private TargetRenderRenderingStateEnum(String value) {
        this.value = value;
    }
}
