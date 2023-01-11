package openapisdk.models.shared;


public enum RenderResponseDataStatusEnum {
    QUEUED("queued"),
    FETCHING("fetching"),
    RENDERING("rendering"),
    SAVING("saving"),
    DONE("done"),
    FAILED("failed");

    public final String value;

    private RenderResponseDataStatusEnum(String value) {
        this.value = value;
    }
}
