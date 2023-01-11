package openapisdk.models.shared;


public enum AndroidModelFormFactorEnum {
    DEVICE_FORM_FACTOR_UNSPECIFIED("DEVICE_FORM_FACTOR_UNSPECIFIED"),
    PHONE("PHONE"),
    TABLET("TABLET"),
    WEARABLE("WEARABLE");

    public final String value;

    private AndroidModelFormFactorEnum(String value) {
        this.value = value;
    }
}
