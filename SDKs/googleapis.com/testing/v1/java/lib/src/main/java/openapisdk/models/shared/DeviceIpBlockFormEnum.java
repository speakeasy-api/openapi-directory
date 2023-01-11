package openapisdk.models.shared;


public enum DeviceIpBlockFormEnum {
    DEVICE_FORM_UNSPECIFIED("DEVICE_FORM_UNSPECIFIED"),
    VIRTUAL("VIRTUAL"),
    PHYSICAL("PHYSICAL"),
    EMULATOR("EMULATOR");

    public final String value;

    private DeviceIpBlockFormEnum(String value) {
        this.value = value;
    }
}
