package openapisdk.models.shared;


public enum IosModelFormFactorEnum {
    DEVICE_FORM_FACTOR_UNSPECIFIED("DEVICE_FORM_FACTOR_UNSPECIFIED"),
    PHONE("PHONE"),
    TABLET("TABLET"),
    WEARABLE("WEARABLE");

    public final String value;

    private IosModelFormFactorEnum(String value) {
        this.value = value;
    }
}
