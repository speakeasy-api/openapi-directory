package openapisdk.models.shared;


public enum ServiceConfigIngressSettingsEnum {
    INGRESS_SETTINGS_UNSPECIFIED("INGRESS_SETTINGS_UNSPECIFIED"),
    ALLOW_ALL("ALLOW_ALL"),
    ALLOW_INTERNAL_ONLY("ALLOW_INTERNAL_ONLY"),
    ALLOW_INTERNAL_AND_GCLB("ALLOW_INTERNAL_AND_GCLB");

    public final String value;

    private ServiceConfigIngressSettingsEnum(String value) {
        this.value = value;
    }
}
