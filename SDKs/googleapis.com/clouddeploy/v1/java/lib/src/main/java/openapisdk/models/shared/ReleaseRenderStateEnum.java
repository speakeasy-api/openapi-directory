package openapisdk.models.shared;


public enum ReleaseRenderStateEnum {
    RENDER_STATE_UNSPECIFIED("RENDER_STATE_UNSPECIFIED"),
    SUCCEEDED("SUCCEEDED"),
    FAILED("FAILED"),
    IN_PROGRESS("IN_PROGRESS");

    public final String value;

    private ReleaseRenderStateEnum(String value) {
        this.value = value;
    }
}
