package openapisdk.models.shared;


public enum AndroidModelFormEnum {
    DEVICE_FORM_UNSPECIFIED("DEVICE_FORM_UNSPECIFIED"),
    VIRTUAL("VIRTUAL"),
    PHYSICAL("PHYSICAL"),
    EMULATOR("EMULATOR");

    public final String value;

    private AndroidModelFormEnum(String value) {
        this.value = value;
    }
}
